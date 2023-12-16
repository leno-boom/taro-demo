// import home_icon from "../assets/tabBar/home.png"
// import active_icon from "../assets/tabBar/cener.png"
// import mine_icon from "../assets/tabBar/mine.png"
import home from "@/assets/tabBar/home.png"
import honeActive from "@/assets/tabBar/hone-active.png"
import mine from "@/assets/tabBar/mine.png"

export const TabList = [
    {
      pagePath: 'pages/index/index', 
      text: 'Home',
      iconPath: home,
      selectedIconPath: honeActive
    },
    {
      pagePath: 'pages/active/index',
      text: '',
      iconPath: '',
    },
    {
      pagePath: 'pages/mine/index',
      text: 'Mine',
      iconPath: mine,
    }
  ]