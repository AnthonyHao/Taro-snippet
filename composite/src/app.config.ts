export default defineAppConfig({
  pages: [
    'pages/index/index',
    'composite/demo/alert-badge/index'
  ],
  components: [
    'composite/components/alert-badge/index',
    'composite/components/icon/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
})
