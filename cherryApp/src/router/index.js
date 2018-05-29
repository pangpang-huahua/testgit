import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/home'
import PrivatePhoto from '@/components/privatePhoto'
import Video from '@/components/video'
import Circle from '@/components/circle'
import Mine from '@/components/mine'
import Search from '@/components/search'
import VideoAlbums from '@/components/videoAlbums'
import VideoAlbumD from '@/components/videoAlbumD'
import MyData from '@/components/myData'
import Grade from '@/components/grade'
import Attention from '@/components/attention'
import Mission from '@/components/mission'
import Purchased from '@/components/purchased'
import ModelAlbum from '@/components/modelAlbum'
//import Com from '@/components/com'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/privatephoto',
      name: 'PrivatePhoto',
      component: PrivatePhoto
    },
    {
      path: '/video',
      name: 'Video',
      component: Video
    },
    {
      path: '/circle',
      name: 'Circle',
      component: Circle
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/videoAlbums',
      name: 'VideoAlbums',
      component: VideoAlbums
    },
    {
      path: '/videoAlbumD',
      name: 'VideoAlbumD',
      component: VideoAlbumD
    },
    {
      path: '/myData',
      name: 'MyData',
      component: MyData
    },
    {
      path: '/grade',
      name: 'Grade',
      component: Grade
    },
    {
      path: '/attention',
      name: 'Attention',
      component: Attention
    },
    {
      path: '/mission',
      name: 'Mission',
      component: Mission
    },
    {
      path: '/purchased',
      name: 'Purchased',
      component: Purchased
    },
    {
      path: '/modelalbum',
      name: 'ModelAlbum',
      component: ModelAlbum
    }
  ]
})
