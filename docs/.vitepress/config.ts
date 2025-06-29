export default {
  lang: 'zh-CN',
  title: 'shixy',
  titleTemplate: 'doc',
  description: '施翔宇的个人文档',
  markdown: {
    lineNumbers: false,
  },
  head: [['link', { rel: 'icon', href: '/favicon.jpg' }]],
  lastUpdated: '最近更新时间',
  themeConfig: {
    nav: [
      { text: '前端', link: '/frontend/index' },
      { text: '后端', link: '/server/database/mysql/index' },
      { text: '设计模式', link: '/设计模式/index' },
      {
        text: '其他',
        items: [{ text: '命令行工具', link: '/util/command/git' }],
      },
    ],
    sidebar: {
      '/frontend/': [
        {
          text: 'web',
          items: [
            { text: 'overview', link: '/frontend/index' },
            {
              text: 'js',
              items: [
                { text: 'script', link: '/frontend/js/script' },
                { text: '作用域', link: '/frontend/js/scope' },
                {
                  text: '对象',
                  link: '/frontend/js/object/index',
                  items: [
                    { text: '转换', link: '/frontend/js/object/transform' },
                  ],
                },
                { text: 'Promise', link: '/frontend/js/promise' },
                { text: '函数式编程', link: '/frontend/js/函数式编程' },
                { text: 'BOM', link: '/frontend/js/BOM' },
                {
                  text: 'vue',
                  items: [
                    {
                      text: '组件化实践',
                      link: '/frontend/js/vue/组件化实践',
                    },
                    {
                      text: 'reactivity',
                      link: '/frontend/js/vue/reactivity',
                    },
                  ],
                },
                { text: 'react', link: '/frontend/js/react/react' },
                { text: 'rxjs', link: '/frontend/js/rxjs' },
              ],
            },
            { text: 'css', items: [
              { text: '选择器', link: '/frontend/css/index' },
              { text: '流布局', link: '/frontend/css/flow' },
              { text: 'margin', link: '/frontend/css/margin' },
            ] },
          ],
        },
      ],
      '/util/': [
        {
          text: '命令工具',
          items: [
            { text: 'git', link: '/util/command/git' },
            { text: 'linux', link: '/util/command/linux' },
            { text: 'mysql', link: '/util/command/mysql' },
            { text: 'nginx', link: '/util/command/nginx' },
            { text: 'node', link: '/util/command/node' },
          ],
        },
      ],
      '/设计模式/': [
        {
          text: '设计模式',
          items: [
            { text: '设计规则', link: '/设计模式/design_rule' },
            { text: '可读性', link: '/设计模式/readable' },
          ],
        },
      ],
      '/server/': [
        {
          text: 'java',
          items: [
            { text: '0-jvm params', link: '/server/java/0-jvm params' },
            { text: '1-memory area', link: '/server/java/1-memory area' },
            {
              text: '2-GarBage collect',
              link: '/server/java/2-GarBage collect',
            },
            {
              text: '并发编程',
              items: [
                { text: '基础', link: '/server/java/concurrent/基础' },
                {
                  text: '锁',
                  items: [
                    { text: 'lock', link: '/server/java/锁' },
                    {
                      text: 'reentrantlock',
                      link: '/server/java/reentrantlock',
                    },
                  ],
                },
                {
                  text: '线程',
                  items: [
                    { text: 'threadlocal', link: '/server/java/threadlocal' },
                    { text: '线程池', link: '/server/java/线程池' },
                  ],
                },
              ],
            },
            { text: 'compare', link: '/server/java/compare' },
          ],
        },
        {
          text: '数据库',
          items: [
            {
              text: 'mysql',
              items: [
                { text: '必知必会', link: '/server/database/mysql/必知必会' },
                { text: '基础类型', link: '/server/database/mysql/基础类型' },
                { text: '数据目录', link: '/server/database/mysql/数据目录' },
                {
                  text: '索引页数据结构',
                  link: '/server/database/mysql/索引页数据结构',
                },
                { text: '执行优化', link: '/server/database/mysql/执行优化' },
              ],
            },
            {
              text: 'elasticsearch',
              items: [
                { text: '基础', link: '/server/database/elasticsearch/基础' },
                {
                  text: '倒排索引',
                  link: '/server/database/elasticsearch/倒排索引',
                },
                {
                  text: '文档CRUD',
                  link: '/server/database/elasticsearch/文档CRUD',
                },
                {
                  text: 'Mapping',
                  link: '/server/database/elasticsearch/Mapping',
                },
                {
                  text: 'Search',
                  link: '/server/database/elasticsearch/search',
                },
                {
                  text: 'Search Api',
                  link: '/server/database/elasticsearch/search_api',
                },
              ],
            },
          ],
        },
        {
          text: 'docker',
          items: [
            { text: 'image', link: '/server/docker/image' },
            { text: 'container', link: '/server/docker/container' },
            { text: 'compose', link: '/server/docker/compose' },
          ],
        },
      ],
    },
    smoothScroll: true,
    socialLinks: [{ icon: 'github', link: 'https://github.com/shixy96' }],
  },
}
