import { useState } from 'react'
import { View, Text, Swiper, SwiperItem, Image } from '@tarojs/components'
import Taro from "@tarojs/taro"
import { TAGS, CATEGORY } from './const '
import icon_user from "@/assets/home/icon_user.png"
import icon_01 from "@/assets/detail/icon_01.png"
import styles from './index.module.scss'

const detail = props => {
  const [curIndex, setCurIndex] = useState(0)
  const detailInfo = Taro.getStorageSync('detailInfo') || {}
  const style = { background: `url(${detailInfo.pic}) no-repeat center / cover` }
  const { top } = Taro.getMenuButtonBoundingClientRect()

  const goBack = () => {
    Taro.navigateBack()
  }
  const goNextBanner = () => {
    setCurIndex(pre => {
      return pre >= 3 ? 0 : pre + 1
    });
  }

  const onSwiperChange = (e) =>{
    setCurIndex(e.detail.current);
  }

  return (
    <View className={styles.detail}>
      <View className='banner-wrap'>
        <View className="back" style={{ top }} onClick={goBack} />
        <View className="next" onClick={goNextBanner} />
        <Swiper
          className='banner-content'
          circular
          current={curIndex}
          autoplay
          onChange={onSwiperChange}
        >
          {
            Array.from({ length: 4 }, (_, index) => {
              return <SwiperItem key={index}>
                <View className='banner-item' style={style} />
              </SwiperItem>
            })
          }
        </Swiper>
      </View>
      <View className="detail-content">
        <View className="title">{detailInfo.title}</View>
        <View className="user"><Image src={icon_user} className='avatar' />Fannings</View>
        <View className="desc">You find yourself in a vast celestial landscape,with the radiant figure of Goddess Maria shining brightly beyond the sun. Her golden aura illuminates the surroundings casting a warm light on the ethereal clouds that float in the sky. </View>
        <View className="tags">
          {
            TAGS.map((item, index) => <View key={index} className='tag-item'>#{item}</View>)
          }
        </View>
        <View className="category">
          {
            CATEGORY.map((item, index) => <View key={index} className='category-item'>{item}</View>)
          }
        </View>
        <View className="contributors">+28 contributors<View className='value'>2492</View></View>
        <View className="enter-btn">Enter Dream</View>
        <View className="link"><Text>View Dream Details</Text><Image src={icon_01} className='icon' /></View>
      </View>
    </View>
  )
}

export default detail
