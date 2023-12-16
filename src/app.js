import { useState } from 'react';
import Taro, { createContext, Provider } from '@tarojs/taro';
import UserContext from './userContext';
import './app.scss'
import 'taro-ui/dist/style/index.scss'

const App = (props) => {
  const [selectedTab, setSelectedTab] = useState(0)

  // this.props.children 是将要会渲染的页面
  return  <UserContext.Provider value={{ selectedTab, setSelectedTab }}>
    {props.children}
  </UserContext.Provider> 
}

export default App
