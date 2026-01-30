#!/usr/bin/env python3

# <xbar.title>Claude Token Usage</xbar.title>
# <xbar.version>v1.1</xbar.version>
# <xbar.author>Preslav Rachev</xbar.author>
# <xbar.desc>Shows today's Claude Code token usage in the Mac toolbar</xbar.desc>
# <xbar.dependencies>python3,ccusage</xbar.dependencies>
# <xbar.abouturl>https://ccusage.com</xbar.abouturl>

import json
import subprocess
import os
import glob
from datetime import datetime, timedelta
from typing import Any

def format_number(num):
    """Formats a number into a human-readable string with K/M suffixes."""
    if num >= 1000000:
        return f"{num / 1000000:.1f}M"
    if num >= 1000:
        return f"{num / 1000:.1f}K"
    return str(num)


def calculate_percentage_change(current: float, previous: float) -> tuple[float, str]:
    """计算环比变化百分比，返回 (百分比, 方向符号)"""
    if previous == 0:
        return (0, "") if current == 0 else (100, "↑")
    change = ((current - previous) / previous) * 100
    direction = "↑" if change >= 0 else "↓"
    return (abs(change), direction)


def format_comparison(current: float, previous: float) -> str:
    """格式化环比对比字符串，如 $120/$100 +20%↑"""
    pct, direction = calculate_percentage_change(current, previous)
    sign = "+" if direction == "↑" else "-"
    return f"${current:.2f}/${previous:.2f} {sign}{pct:.0f}%{direction}"


def calculate_model_percentages(breakdown_list: list) -> list:
    """计算模型金额百分比"""
    total_cost = sum(m.get("cost", 0) for m in breakdown_list)
    if total_cost == 0:
        return breakdown_list
    result = []
    for m in breakdown_list:
        pct = (m.get("cost", 0) / total_cost) * 100 if total_cost > 0 else 0
        result.append({**m, "percentage": pct})
    return result


def print_model_breakdown(breakdowns: list, prefix: str = "--"):
    """打印模型分类统计，按费用降序排序，格式：模型名: $花费/token数 (百分比%)"""
    if not breakdowns:
        return
    breakdowns_with_pct = calculate_model_percentages(breakdowns)
    sorted_breakdowns = sorted(breakdowns_with_pct, key=lambda x: x.get("cost", 0), reverse=True)
    for model_data in sorted_breakdowns:
        model_name = model_data.get("modelName", "unknown")
        cost = model_data.get("cost", 0)
        total_tokens = model_data.get("inputTokens", 0) + model_data.get("outputTokens", 0)
        pct = model_data.get("percentage", 0)
        print(f"{prefix}{model_name}: ${cost:.2f}/{format_number(total_tokens)} ({pct:.0f}%)")


def _merge_breakdown(breakdown: dict, day: dict):
    """合并模型统计数据"""
    for model_data in day.get("modelBreakdowns", []):
        model_name = model_data.get("modelName", "unknown")
        if model_name not in breakdown:
            breakdown[model_name] = {"cost": 0, "inputTokens": 0, "outputTokens": 0}
        breakdown[model_name]["cost"] += model_data.get("cost", 0)
        breakdown[model_name]["inputTokens"] += model_data.get("inputTokens", 0)
        breakdown[model_name]["outputTokens"] += model_data.get("outputTokens", 0)


def _to_breakdown_list(breakdown: dict) -> list:
    """将字典转换为列表格式"""
    return [{"modelName": k, **v} for k, v in breakdown.items()]


def compute_all_stats(daily_data: list, today: str, yesterday: str,
                      this_week: set, last_week: set, current_month: str):
    """单次遍历计算所有统计数据"""
    today_usage = None
    yesterday_usage = None
    week_tokens, week_cost = 0, 0.0
    week_breakdown = {}
    last_week_tokens, last_week_cost = 0, 0.0
    month_tokens, month_cost = 0, 0.0
    month_breakdown = {}

    for day in daily_data:
        date = day.get("date", "")
        if date == today:
            today_usage = day
        if date == yesterday:
            yesterday_usage = day
        if date in this_week:
            week_tokens += day.get("totalTokens", 0)
            week_cost += day.get("totalCost", 0)
            _merge_breakdown(week_breakdown, day)
        if date in last_week:
            last_week_tokens += day.get("totalTokens", 0)
            last_week_cost += day.get("totalCost", 0)
        if date.startswith(current_month):
            month_tokens += day.get("totalTokens", 0)
            month_cost += day.get("totalCost", 0)
            _merge_breakdown(month_breakdown, day)

    return {
        "today": today_usage,
        "yesterday": yesterday_usage,
        "week": (week_tokens, week_cost, _to_breakdown_list(week_breakdown)),
        "last_week": (last_week_tokens, last_week_cost),
        "month": (month_tokens, month_cost, _to_breakdown_list(month_breakdown)),
    }


def print_period_stats(title: str, tokens: int, cost: float, breakdown_list: list,
                       days_count: int = 0, comparison: tuple = None):
    """打印某个时间段的统计信息"""
    print(title)
    avg_str = f" / avg ${cost/days_count:.0f}/day" if days_count > 0 else ""
    print(f"${cost:.2f} / {format_number(tokens)} tokens{avg_str}")
    if comparison:
        prev_cost = comparison[0]
        label = comparison[1]
        print(f"{format_comparison(cost, prev_cost)} vs {label}")
    if breakdown_list:
        print("Models:")
        print_model_breakdown(breakdown_list, prefix="--")


def get_ccusage_data() -> dict[str, Any]:
    """Fetches Claude Code usage statistics using the `npx ccusage@latest -j` command."""
    try:
        # Set up environment with common paths for xbar
        env = os.environ.copy()

        # Add common Node.js paths to ensure npx is found
        common_paths = [
            "/usr/local/bin",
            "/usr/bin",
            "/bin",
            "/opt/homebrew/bin",  # Homebrew on Apple Silicon
            os.path.expanduser("~/.nvm/versions/node/*/bin"),  # NVM paths
            os.path.expanduser("~/node_modules/.bin"),  # Local node modules
        ]

        # Expand glob patterns and filter existing paths
        expanded_paths = []
        for path in common_paths:
            if "*" in path:
                expanded_paths.extend(glob.glob(path))
            elif os.path.exists(path):
                expanded_paths.append(path)

        # Add to PATH if not already present
        current_path = env.get("PATH", "")
        for path in expanded_paths:
            if path not in current_path:
                current_path = f"{path}:{current_path}"
        env["PATH"] = current_path

        # 优先尝试使用全局安装的 ccusage (更快)
        try:
            result = subprocess.run(
                ["ccusage", "-j", "--offline"],
                capture_output=True,
                text=True,
                timeout=30,
                check=False,
                env=env,
            )
            if result.returncode == 0:
                return json.loads(result.stdout)
        except FileNotFoundError:
            pass

        # 降级到 npx，使用 @latest (可能已缓存) + 增加超时
        result = subprocess.run(
            ["npx", "ccusage", "-j", "--offline"],
            capture_output=True,
            text=True,
            timeout=300,  # 增加超时到 300 秒以应对首次下载
            check=False,
            env=env,
        )

        if result.returncode == 0:
            return json.loads(result.stdout)

        return {
            "error": f"Command failed with code {result.returncode}",
            "stderr": result.stderr,
            "stdout": result.stdout,
        }
    except subprocess.TimeoutExpired:
        return {"error": "Command timed out after 300 seconds"}
    except json.JSONDecodeError as e:
        return {"error": f"JSON decode error: {e}", "stdout": result.stdout}
    except FileNotFoundError:
        return {"error": "npx command not found - Node.js may not be installed"}


def main():
    """Main function to fetch and display Claude Code usage statistics."""
    # 缓存当前时间，避免重复调用
    now = datetime.now()
    today = now.strftime("%Y-%m-%d")
    yesterday = (now - timedelta(days=1)).strftime("%Y-%m-%d")
    current_month = now.strftime("%Y-%m")

    # 计算本周（周一到今天）
    weekday = now.weekday()  # 0=Monday
    this_week = {(now - timedelta(days=i)).strftime("%Y-%m-%d") for i in range(weekday + 1)}
    # 计算上周（上周一到上周日）
    last_monday = now - timedelta(days=weekday + 7)
    last_week = {(last_monday + timedelta(days=i)).strftime("%Y-%m-%d") for i in range(7)}

    # Get usage data
    data = get_ccusage_data()

    if not data or (isinstance(data, dict) and "error" in data):
        print(f"Error")
        print("---")
        if isinstance(data, dict) and "error" in data:
            print(f"Error: {data['error']}")
            if "stderr" in data:
                print(f"Stderr: {data['stderr']}")
            if "stdout" in data:
                print(f"Stdout: {data['stdout']}")
        else:
            print("Failed to fetch usage data")
        return

    # 单次遍历计算所有统计数据
    daily_data = data.get("daily", [])
    stats = compute_all_stats(daily_data, today, yesterday, this_week, last_week, current_month)

    today_usage = stats["today"]
    yesterday_usage = stats["yesterday"]
    w_tokens, w_cost, w_breakdown = stats["week"]
    lw_tokens, lw_cost = stats["last_week"]
    m_tokens, m_cost, m_breakdown = stats["month"]

    # 计算日均（本月天数）
    days_in_month = now.day
    avg_daily = m_cost / days_in_month if days_in_month > 0 else 0

    if not today_usage:
        print(f"$0.00/0 (avg ${avg_daily:.0f})")
        print("---")
        print("No usage today")
    else:
        # Display today's token count in toolbar
        total_tokens = today_usage.get("totalTokens", 0)
        total_cost = today_usage.get("totalCost", 0)
        yesterday_cost = yesterday_usage.get("totalCost", 0) if yesterday_usage else 0

        # 菜单栏格式：$今日花费/今日token数 (avg $日均)
        print(f"${total_cost:.2f}/{format_number(total_tokens)} (avg ${avg_daily:.0f})")
        print("---")
        print(f"📊 Today ({today})")
        print(f"${total_cost:.2f} / {format_number(total_tokens)} tokens")
        print(f"{format_comparison(total_cost, yesterday_cost)} vs yesterday")

        # 显示今天的模型分类
        today_breakdown = today_usage.get("modelBreakdowns", [])
        if today_breakdown:
            print("Models:")
            print_model_breakdown(today_breakdown, prefix="--")

    print("---")

    # This week statistics
    week_days = len(this_week)
    print_period_stats("📅 This Week", w_tokens, w_cost, w_breakdown,
                       days_count=week_days, comparison=(lw_cost, "last week"))
    print("---")

    # Current month statistics
    month_name = now.strftime("%B %Y")
    print_period_stats(f"📆 {month_name}", m_tokens, m_cost, m_breakdown,
                       days_count=days_in_month)
    print("---")

    # Show total usage
    totals = data.get("totals", {})
    total_all_tokens = totals.get("totalTokens", 0)
    total_all_cost = totals.get("totalCost", 0)
    print(f"Total: ${total_all_cost:.2f} / {format_number(total_all_tokens)} tokens")


if __name__ == "__main__":
    main()