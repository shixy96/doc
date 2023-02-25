export default {
  lang: 'zh-CN',
  title: 'shixy',
  titleTemplate: 'doc',
  description: '施翔宇的个人文档',
  markdown: {
    lineNumbers: false,
  },
  lastUpdated: '最近更新时间',
  themeConfig: {
    nav: [
      { text: '前端', link: '/front-end/js/index' },
      { text: '后端', link: '/server/database/mysql/index' },
      { text: '设计模式', link: '/设计模式/index' },
      {
        text: '其他',
        items: [{ text: '命令行工具', link: '/util/command/git' }],
      },
    ],
    sidebar: {
      '/front-end/js/': [
        {
          text: 'js',
          items: [
            { text: 'BOM', link: '/front-end/js/BOM' },
            { text: '对象', link: '/front-end/js/对象' },
            { text: 'Promise', link: '/front-end/js/promise' },
            { text: '函数式编程', link: '/front-end/js/函数式编程' },
            {
              text: 'vue',
              items: [
                { text: '组件化实践', link: '/front-end/js/vue/组件化实践' },
                { text: 'reactivity', link: '/front-end/js/vue/reactivity' },
              ],
            },
            { text: 'rxjs', link: '/front-end/js/rxjs' },
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
                {text: '基础', link: '/server/java/concurrent/基础'},
                {
                  text: '锁',
                  items: [
                    { text: 'lock', link: '/server/java/锁' },
                    { text: 'reentrantlock', link: '/server/java/reentrantlock' },
                  ],
                },
                {
                  text: '线程',
                  items: [
                    { text: 'threadlocal', link: '/server/java/threadlocal' },
                    { text: '线程池', link: '/server/java/线程池' },
                  ],
                },  
              ]
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
  },
}
