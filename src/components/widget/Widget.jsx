import './widget.scss'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

const Widget = ({ type }) => {

  let data
  const amount = 100
  const per = 20

  switch (type) {
    case "user":
      data = {
        title: "Users",
        isMoney: false,
        link: "See all users",
        icon: (<PersonOutlineIcon 
          className="icon" 
          sx={{
          color: "crimson",
          backgroundColor: "rgb(255,0,0,0.2)",
        }} />)
      }
      break;
    case "order":
      data = {
        title: "Orders",
        isMoney: false,
        link: "See all orders",
        icon: <ShoppingCartIcon 
        className="icon" 
        sx={{
          color: "goldenrod",
          backgroundColor: "rgb(218,165,32,0.2)",
        }}
        />
      }
      break;
    case "earning":
      data = {
        title: "Earning",
        isMoney: true,
        link: "View net earning",
        icon: <MonetizationOnIcon 
        className="icon" 
        sx={{
          color: "green",
          backgroundColor: "rgb(0,128,0,0.2)",
        }}
        />
      }
      break;
    case "balance":
      data = {
        title: "Balance",
        isMoney: true,
        link: "See details",
        icon: <AccountBalanceIcon 
        className="icon" 
        sx={{
          color: "purple",
          backgroundColor: "rgb(128,0,128,0.2)",
        }}
        />
      }
      break;
    default:
      break;
  }
  return (
    <div className="widget">
      <div className="left">
        <span className='title'>{data.title}</span>
        <span className='counter'>{data.isMoney && "$"}{amount}</span>
        <span className='link'>{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {per}%
        </div>
        {data.icon}
      </div>
    </div>
  )
}

export default Widget
