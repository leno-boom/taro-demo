export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/active/index',
    'pages/mine/index',
    'pages/detail/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    custom: true,  
    list: [
      { pagePath: 'pages/index/index' },
      { pagePath: 'pages/active/index' },
      { pagePath: 'pages/mine/index' },
    ]

  }
})
