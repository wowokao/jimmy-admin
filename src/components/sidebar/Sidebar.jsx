import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import FaceIcon from '@mui/icons-material/Face';
import SettingsApplicationsOutlinedIcon from '@mui/icons-material/SettingsApplicationsOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

const Sidebar = () => {

  return (
    <div className='sidebar'>
      <div className="top">
        <span className='logo'>Jimmy admin</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">Main</p>
          <li>
            <DashboardIcon className='icon'/>
            <span>Dashboard</span>
          </li>
          <p className="title">List</p>
          <li>
            <AccountCircleOutlinedIcon className='icon'/>
            <span>Users</span>
          </li>
          <li>
            <Inventory2OutlinedIcon className='icon'/>
            <span>Products</span>
          </li>
          <li>
            <BookmarkBorderOutlinedIcon className='icon'/>
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingOutlinedIcon className='icon'/>
            <span>Delivery</span>
          </li>
          <p className="title">Useful</p>
          <li>
            <AnalyticsIcon className='icon'/>
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneIcon className='icon'/>
            <span>Notifications</span>
          </li>
          <p className="title">Service</p>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className='icon'/>
            <span>System Health</span>
          </li>
          <li>
            <FaceIcon className='icon'/>
            <span>Logs</span>
          </li>
          <li>
            <SettingsApplicationsOutlinedIcon className='icon'/>
            <span>Settings</span>
          </li>
          <p className="title">User</p>
          <li>
            <AccountBoxOutlinedIcon className='icon'/>
            <span>Profiles</span>
          </li>
          <li>
            <LogoutOutlinedIcon className='icon'/>
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  )
}

export default Sidebar

