# Agentic Coding

什么是 Agentic Coding（eg. [claude-code](https://github.com/anthropics/claude-code), [codex](https://github.com/openai/codex/blob/b519267d05459095eccb9767c28550a2952d8a2f/codex-rs/core/prompt.md?plain=1#L9)）？

Agentic Coding  = 「有工具 + 有记忆 + 会自己规划与行动的编程助手」。



相较于早期只会补全代码的「Code LLM」（如传统 Copilot），Agentic Coder 的核心特征是：

* 不只写一段函数，而是能围绕一个目标：

  * 理解代码库

  * 制定计划

  * 调用工具（搜索、执行、编辑、测试）

  * 多轮迭代，直到任务完成

* 支持多模态（代码 + 文本 + 图片，有的还支持音频/界面）

* 能在 **本地/Cloud 环境** 中执行命令、运行测试、修改文件

* 有一定的「记忆」，能记住项目背景、你的偏好与历史决策



## **概览**

### **产品形式 （local + cloud）**

terminal cli

* [claude code](https://code.claude.com/docs/en/overview)

  * [Claude Code Changelog](https://claudelog.com/claude-code-changelog/)

  * [Claude Code Template](https://aitmpl.com)

* [codex](https://openai.com/index/introducing-upgrades-to-codex/)

* [gemini-cli](https://geminicli.com/)

* [qoder-cli](https://qoder.com/changelog?page=1\&type=cli)

* [iflow-cli](https://cli.iflow.cn/)

* [Qwen Code](https://qwenlm.github.io/qwen-code-docs/zh/)

* ...

ide

* [cursor](https://cursor.com/cn/changelog)

* [kiro](https://kiro.dev/)

* [qoder](https://qoder.com/changelog)

* [windsurf](https://windsurf.com/)

* [antigravity](https://antigravity.google/)

* ...

extension

* [cline](https://cline.bot/)

* [roo-code](https://roocode.com/)

* [kilo-code](https://kilocode.ai/)

* [augmentcode](https://www.augmentcode.com/)

* ...

### 应该包含哪些标配功能

* 核心能力：代码理解与上下文管理、自主执行能力

* 工作模式：交互模式、任务管理（任务拆解/进度追踪/subagent）

* 编码特性：智能补全、问题诊断、版本集成..

* 配置/定制：特定知识配置（AGENTS.md）、Slash command、mcp、[skill](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview)

* 开发体验：cloud、会话恢复、checkpoint、沙箱隔离、git worktree ..



## **高效使用**

* 一口气生成整个需求代码，然后打补丁快？还是边写代码边提问快？

* AI 的能力边界在哪？什么场景下适合使用？什么场景下适合手搓？



## **上下文工程**

**由于AI模型的上下文窗口存在容量限制（有限的“注意力”），我们需要在有限空间内最大化信息价值，实现自我规划、自我纠错、自我迭代。**



大模型的本质工作是读取token然后吐出token；

初始 Token 组成：初始输入 = SystemPrompt + 用户问题 + Rules + 对话历史

用户问题 : 我们输入的文字 + 主动添加的上下文（图片、项目目录、文件）

Rules: project rule + user rule + memories



### **代码库检索（Retrieval/Chunking Strategies & Query Augmentation）**

1. Codebase Indexing（chunking & embedding，聚焦函数、类和逻辑代码块，根据查询的信息 embedding 后向量检索找到用户环境中的实际代码内容）

   * 对于复杂查询可能不准确，容易漏召回关键信息，或召回大量无关噪声

   * embedding 准确性，可能会提供大量无关的信息浪费有限的上下文

   * &#x20;无法精准定位到某几行

2. Agentic Search，使用 CLI 工具来探索代码库 like grep patterns search，与人类行为相符，通过文件系统、书签来按需检索加载（progressive disclosure）

   * 通常很慢，需要用户设备与模型推理端之间进行多轮的顺序交互

   * 可能会包含大量无关信息

   * 优化

     * subagent like claude code plan subagent（节省 Lead-Agent 的上下文预算，关注点分离）

     * 并行工具调用

     * 快速推理模型

相关产品/模式：[Sourcegraph](https://sourcegraph.com/)、[Cognition Fast Context](https://cognition.ai/blog/swe-grep#where-to-try-fast-context)、[langchain - How agents can use filesystems for context engineering](https://blog.langchain.com/how-agents-can-use-filesystems-for-context-engineering/)



### **Agents & Memory**

* 思维链 (Chain of Thought, CoT)

* 自我反思 (Self-Reflection)

  * 高效的信息压缩

* 规划 (Planning)

  * plan mode/subagent  -->  拆分 subtasks 形成计划清单

* 工具调用

```plain&#x20;text
                        思考 -> 行动(选择工具) -> 观察
                         ｜_____________________｜

                    +--------------------------------+
                    |         用户问题 (Query)        |
                    |  "2023年诺贝尔物理学奖得主是谁?" |
                    +--------------------------------+
                                   |
                                   v
+----------------------+  STEP 1: THINK  +-----------------------------------+
|   大型语言模型      | <-------------- | "我需要查找最新的信息。我应该使用  |
| (LLM, e.g., GPT-4) |                | '搜索' 工具来查找2023年诺贝尔奖。"|
+----------------------+                +-----------------------------------+
                                   |
                                   v
+----------------------+  STEP 2: ACT   +-----------------------------------+
|   大型语言模型      | --------------> | 搜索('2023年诺贝尔物理学奖得主')    |
| (LLM, e.g., GPT-4) |                +-----------------------------------+
+----------------------+                                 |
                                   |                   (调用外部工具/API)
                                   |                   |
                                   v                   v
                             (外部世界) <-------- [网络搜索/数据库/API]
                                   |                   |
                                   |                   |
                                   v                   |
+----------------------+  STEP 3: OBSERVE +-----------------------------------+
|   大型语言模型      | <-------------- | "搜索结果：Pierre Agostini, Ferenc |
| (LLM, e.g., GPT-4) |                | Krausz, and Anne L'Huillier。"     |
+----------------------+                +-----------------------------------+
                                   |
                                   |
                                   |  <--- 循环开始，基于新的观察进行新一轮思考
                                   |
                                   v
+----------------------+  STEP 4: THINK  +-----------------------------------+
|   大型语言模型      | <-------------- | "我已经找到了三位得主，信息足够。  |
| (LLM, e.g., GPT-4) |                | 我现在可以给出最终答案了。"         |
+----------------------+                +-----------------------------------+
                                   |
                                   v
+----------------------+  STEP 5: FINAL   +-----------------------------------+
|   大型语言模型      | --------------> | "2023年诺贝尔物理学奖得主是..."   |
| (LLM, e.g., GPT-4) |                +-----------------------------------+
+----------------------+                            |
                                                 最终答案
                                                 |
                                                 v
                                +--------------------------------+
                                |           用户得到的答案        |
                                +--------------------------------+
```





### Tools (eg.  [claude](https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview))

* web search/fetch

* text editor

* bash

* code execution

* computer use

* Mcp

  * &#x20;[context7](https://context7.com/about)

  * [sequential-thinking](https://github.com/modelcontextprotocol/servers/tree/main/src/sequentialthinking)

  * [chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp)

  * [figma](https://help.figma.com/hc/en-us/articles/32132100833559-Guide-to-the-Figma-MCP-server)

* skills

* askquestion tool

  * Claude code: Use the askquestion tool to clarify requirements

  ![](images/hidden-gem-in-claude-code-v2-0-21-the-askquestion-tool-v0-32s763pm42xf1.webp)

  * cursor

  ![](images/c631f1af-3fa5-4a78-b75b-8ba9d3003a5e.png)

  * Roo-code

  ![](images/image.png)



### **上下文存在的问题**：

* Context Poisoning 上下文污染：幻觉或其它错误进入上下文，并被反复引用的情况，执着于实现不可能或不相关的目标

* Context Distraction 上下文干扰：历史对话累积，上下文变得过于冗长，模型过度关注上下文，注意力被分散

* Context Confusion 上下文混淆：模型使用上下文中多余的内容生成低质量回复的情况，eg. 过多的 mcp tools工具

* Context Clash 上下文冲突：上下文中积累了与其他信息相冲突的新信息和工具（模型的上下文包含了整个对话过程，不仅是你的提问，也包括了模型早期对你提问所做的尝试回答）

建议：

1. 进行清晰的问题描述

   * 在描述问题时，我们最好能给出具体的功能、文件名、方法名、代码块，让模型能够通过语义检索等方式，用较短的路径找到代码，避免在检索这部分混杂太多弱相关内容，干扰上下文。

2. 把控上下文长度（compact 大部分情况下会丢失信息），尽可能地使用Revert和新开对话



## **Conclusion**

根据实践经验，不推荐输出完方案后让 AI 一口气基于方案完成需求（非常小的需求除外），需求越大代码质量越烂。我的使用方式是，跟 AI 进行结对编程，讨论具体的方案是什么，这个场景下的最佳实践是什么，拆解需求后，人工控制每一个块的代码生成。生成之后，可以咨询一下代码实现是否优雅，是否有重构空间，根据需要进行修改。

总结来说，有这些好处：

* 因为上下文窗口有限，任务粒度越小，AI 完成度越高

* 分步骤代码量便于做 Code Review



SPEC 怎么使用

* 直接把“公司手册”和“最佳实践”灌输给 AI ，通过不断迭代优化 rule 来提升效果，从而确保最新的代码变更得到准确反映，并且因为具备完善的规范、最佳实践、特定领域知识等，可以帮助开发者在开发阶段为架构决策识别潜在风险。

  * cursor rules

    * 可以配置 always/在特定匹配下/ai决定/明确提及

    * https://github.com/PatrickJS/awesome-cursorrules

  * CLAUDE.md/AGENTS.md

    * https://github.com/brennercruvinel/CCPlugins

  * [spec-kit](https://github.com/github/spec-kit) / [openspec](https://github.com/Fission-AI/OpenSpec) / [bmad](https://github.com/bmad-code-org/BMAD-METHOD)

    * 规约驱动的分层架构，[example](https://github.com/ZhongMingEnergy/education-teacher/tree/main/specs)

    * [Constitution](https://github.com/ZhongMingEnergy/education-teacher/blob/main/.specify/memory/constitution.md)，具体规则/最佳实践



## Development  [Workflow](https://notebooklm.google.com/notebook/e6a3db04-6153-4e34-a62a-71b0d0b72058?artifactId=31ff48eb-9269-47d4-9b47-f68b7dc9031a)

Specification/Plan  -->  Code  -->  Review(CICD)

* Specification/Plan: 首先详细描述新功能，然后确定必要的决策或信息，把一个可能有漏洞/模糊的需求，拆解成一份详细的规格说明书。

* Code：功能文档/设计稿 -> 代码/测试

* Review：最后，开发人员/ai 审查 ai 的工作，并根据需要进行调整。

  * [lint example](https://github.com/ZhongMingEnergy/webcommon/actions/runs/19611271190/job/56157444282)、[e2e-draft-preview](https://github.com/ZhongMingEnergy/education-student/actions/workflows/e2e-playwright.yml)

  * [Github pr review action](https://github.com/ZhongMingEnergy/education-teacher/blob/main/.github/workflows/pr_agent.yml) （https://www.coderabbit.ai/ 、https://www.qodo.ai/）

  * [review action example1](https://github.com/ZhongMingEnergy/education-teacher/pull/87)、 [review action example2](https://github.com/ZhongMingEnergy/webcommon/pull/26)





## **OTHERS**

### Rank

https://lmarena.ai/leaderboard/

https://artificialanalysis.ai/

https://roocode.com/evals

https://openrouter.ai/rankings

https://composio.dev/blog/kimi-k2-thinking-vs-claude-4-5-sonnet-vs-gpt-5-codex-tested-the-best-models-for-agentic-coding



### Usage

https://cdn.openai.com/pdf/6a2631dc-783e-479b-b1a4-af0cfbd38630/how-openai-uses-codex.pdf

https://www.reddit.com/r/ClaudeCode/comments/1oesyrc/hidden\_gem\_in\_claude\_code\_v2021\_the\_askquestion/

https://cdn.openai.com/business-guides-and-resources/building-an-ai-native-engineering-team.pdf



### Demo

https://x.com/dotey/status/1991340906646036959?t=XblgKGmMrv9R3lKUjLGxIw\&s=19

https://x.com/Lessnoise365/status/1991391000833716683?t=mhB-un2-QYc0aLJfJ7eu7Q\&s=19

https://x.com/goodfellow\_ian/status/1990839056331337797?t=SmkTfE4S6Z-yaXbVz1coOw\&s=19

https://x.com/zarazhangrui/status/1991748762616885266?t=ednaEu6tKzx1j0nBDXmByA\&s=19



https://x.com/howie\_serious/status/1991725052358979717?t=GPj6y24bLuW0ubddZDM4zQ\&s=19

https://x.com/frxiaobei/status/1991528682733859137?t=qAqgETY-6Qr97FLFjRFQKQ\&s=19

https://x.com/0xShellywang/status/1992156914848084278?t=gnW-jGXTPty0itlLr9cEgw\&s=19



### others

https://aitmpl.com

https://zenmux.ai/

https://huggingface.co/blog/MiniMax-AI/why-did-m2-end-up-as-a-full-attention-model

https://codewiki.google/

https://github.com/FSoft-AI4Code/CodeWiki

https://buildermethods.com/agent-os

