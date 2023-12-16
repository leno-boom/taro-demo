import { useEffect, useState } from 'react'
import { View, Text, Input, Swiper, SwiperItem } from '@tarojs/components'
import { AtTabs, AtTabsPane } from 'taro-ui'
import Goods from './goods'
import { GOODS_LIST, CATEGORY, SUB_CATEGORY } from './const'
import styles from './index.module.scss'

const Home = props => {
  const [curIndex, setCurIndex] = useState(0)// 轮播图当前下标
  const [topCurrent, setTopCurrent] = useState(0)// 一级菜单当前下标
  const [subCurrent, setSubCurrent] = useState(0)// 一级菜单当前下标

  const onSwiperChange = (e) =>{
    setCurIndex(e.detail.current);
  }

  const handleTopTabClick = (val) =>{
    setTopCurrent(val);
    setSubCurrent(0);
  }

  const handleSubTabClick = (val) =>{
    setSubCurrent(val);
  }


  return (
    <View className={styles.homePage}>
      <View className='search-wrap'>
        <Input className='search' type='text' placeholder='Search for dreams'/>
      </View>
      <View className='banner-wrap'>
        <Swiper
          className='banner-content'
          circular
          autoplay
          onChange={onSwiperChange}
        >
          {
            Array.from({ length: 7 }, (_, index) => {
              return <SwiperItem key={index}>
                <View className='banner-item'>
                  <View className="info-wrap">
                    <View className="info-title">Arachna</View>
                    <View className="info-text">A group of spider women on the outskirts of the city. These fierce and elegant creatures possess the upper body of a woman and the lower body of a spider...</View>
                    <View className="info-btn">Get started</View>
                  </View>
                </View>
              </SwiperItem>
            })
          }
        </Swiper>
      </View>
      <View className="indicator-wrap">
        {
          Array.from({ length: 7 }, (_, index) => {
            const cls = curIndex === index ? 'indicator-item-active' : ''
            return <View className={`indicator-item ${cls}`} key={index} />
          })
        }
      </View>

      <View className='top-category'>
        <AtTabs
          current={topCurrent}
          tabList={CATEGORY}
          onClick={handleTopTabClick}
        />
        <View className='next' />
      </View >

      
      <View className='sub-category'>
        <AtTabs
          current={subCurrent}
          tabList={SUB_CATEGORY}
          onClick={handleSubTabClick}
        />
        <View className='filter'>Filter</View>
      </View >

      <View className='goods-list'>
        {
          GOODS_LIST.map((item, index) => {
            return <Goods infos={item} key={index} className='goods-item' />
          })
        }
      </View>
    </View>
)}

export default Home