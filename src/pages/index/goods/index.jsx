import { View, Text, Image } from '@tarojs/components'
import Taro from "@tarojs/taro"
import { icon_user, VIEW_DATA } from '../const'
import styles from './index.module.scss'

const Goods = props => {
  const { infos={}, className='' } = props
  const style = { background: `url(${infos.pic}) no-repeat center / contain` }

  const goToDetail = () => {
    console.log(11);
    Taro.navigateTo({ url: '/pages/detail/index' })
    Taro.setStorageSync('detailInfo', infos )
  }

  return (
    <View className={`${styles.goods} ${className}`} onClick={goToDetail}>
      <View className="main-pic" style={style}>
        <View className="datas">
          {
            VIEW_DATA.map(({ key, icon }) => {
              return <View className="data-item" key={key}>
                <Image src={icon} className='icon' />
                {infos[key]}
              </View>
            })
          }
        </View>
      </View>
      <Text className='title'>{infos.title}</Text>
      <View className='detail'>
        <Text className='desc'>{infos.desc}</Text>
        <Image src={icon_user} className='user' />
      </View>
    </View>
  )
}

export default Goods
