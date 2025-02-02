import './index.scss'
import SideBar from '../SideBar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="App">
      <SideBar />
      <div className="page">
        <span className="tags top-tags"></span>

        <Outlet />

        <span className="tags bottom-tags">
          <br />
          <span className="bottom-tag-html"></span>
        </span>
      </div>
    </div>
  )
}

export default Layout
