import { useContext } from 'react'
import { View, Text } from "@tarojs/components"
import Taro from "@tarojs/taro"
import UserContext from '../userContext'
import { TabList } from './const'
import active_bg from '@/assets/tabBar/active_bg.png'
import styles from './index.module.scss'

const CustomTabBar = props =>{
    const { selectedTab, setSelectedTab} = useContext(UserContext);

    const switchTab = (url, index) => {
        if(index === selectedTab) { return }
        setSelectedTab(index)
        Taro.switchTab({ url: `/${url}` })
    }
    
    return <View className={styles.customTabBar}>
        {
            TabList.map(({ pagePath, text, iconPath }, index) => {
                const activeClass = selectedTab === index ? 'tab-item-active' : ''
                let style = iconPath ? { background: `url(${iconPath}) no-repeat center / 22px 22px` } : {}
                if(activeClass && iconPath) style = { background: `url(${iconPath}) no-repeat top 4px center / 22px 22px, url(${active_bg}) no-repeat top center / 36px auto` }
                return <View className={`tab-item ${activeClass}`} onClick={() => switchTab(pagePath, index)}>
                    <View className='tab-icon' style={style} />
                    <Text>{text}</Text>
                </View>
            })
        }
    </View>
}

export default CustomTabBar