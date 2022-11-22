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
      { text: 'Web', link: '/web/js/' },
      { text: '工具', link: '/util/git' },
      { text: '测试', link: '/test/' },
      {
        text: '数据库',
        items: [
          { text: 'Mysql', link: '/database/mysql/' },
          { text: 'Elasticsearch', link: '/database/elasticsearch/' },
        ],
      },
    ],
    sidebar: {
      // '/web/': [{}],
      // '/util/': [],
      // '/test/': [],
      // '/database/mysql/': [],
      // '/database/elasticsearch/': [
      //   {
      //     text: 'elasticsearch',
      //     items: [
      //       {text: '基础', link: '/database/elasticsearch/'},
      //       {text: '倒排索引', link: '/database/elasticsearch/倒排索引'},
      //       {text: '文档CRUD', link: '/database/elasticsearch/文档CRUD'},
      //       { text: 'Mapping', link: '/database/elasticsearch/Mapping' },
      //       { text: 'Search', link: '/database/elasticsearch/search' },
      //       { text: 'Search Api', link: '/database/elasticsearch/search_api' },
      //     ],
      //   },
      // ],
    },
    smoothScroll: true
  },
}
