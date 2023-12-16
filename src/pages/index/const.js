import pic_01 from '@/assets/home/pic_01.png'
import pic_02 from '@/assets/home/pic_02.png'
import pic_03 from '@/assets/home/pic_03.png'
import pic_04 from '@/assets/home/pic_04.png'
import icon_user from "@/assets/home/icon_user.png"
import icon_01 from "@/assets/home/icon_01.png"
import icon_02 from "@/assets/home/icon_02.png"
import tag_02 from "@/assets/home/tag_02.png"

const GOODS_LIST = [
    { title: 'Spider Potter', desc: 'Love, celebration, and a promise of forever.', pic: pic_01, view: '330.5k', comment: '4280' },
    { title: 'Goddess Maria', desc: 'The rise and fall of an ancient empire.', pic: pic_02, view: '230.3k', comment: '1280' },
    { title: 'Moonlight', desc: 'Pure fairy tales...', pic: pic_03, view: '390.4k', comment: '980' },
    { title: 'Jungle Hunter', desc: 'Pure fairy tales...', pic: pic_04, view: '240.5k', comment: '2280' }
]

const VIEW_DATA = [
    { key: 'view', icon: icon_01 },
    { key: 'comment', icon: icon_02 }
]

const CATEGORY = [
    { key: 1, title: 'Recommended' },
    { key: 2, title: 'Fan Fiction' },
    { key: 3, title: 'Sci-fi' },
    { key: 4, title: 'RPG' },
]

const SUB_CATEGORY = [
    { key: 1, title: 'Default' },
    { key: 2, title: 'Recent' },
    { key: 3, title: 'Hot' },
    { key: 4, title: 'Nodes' },
]

export {
    GOODS_LIST,
    icon_user,
    VIEW_DATA,
    CATEGORY,
    SUB_CATEGORY,
    tag_02
}