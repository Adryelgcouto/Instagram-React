import Storys from './storys/storys'
import Posts from './posts-insta/posts'
import SideBar from './asideBar/SideBar'
export default function Body() {
  return (
    <div class="corpo">
      <div class="esquerda">
        <Storys />
        <Posts />
      </div>
      <SideBar/>
    </div>
  )
}
