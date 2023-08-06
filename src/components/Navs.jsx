import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { Stack , Button} from "@mui/material";
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link, useNavigate } from 'react-router-dom';
import Cart from './Rozet';
import Rozet from './Rozet';
const settings = ['Profile', 'Register', 'Login', 'Logout'];


function Navs() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleClick = () => {
    navigate("/basket")
  }
  const navigate = useNavigate()
  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
          
      <div className="flex flex-wrap justify-evenly gap-3 items-center">

        <div>
        {/* <img src="https://www.logo.wine/a/logo/O_Shopping/O_Shopping-Logo.wine.svg" className=" h-24 mr-3" alt="Flowbite Logo" /> */}
        <img src="https://img.ws.mms.shopee.com.my/c08f6bd387562ff7dcbb2ec5ce1a8c4b" className=" h-20 mr-3" alt="" />
        </div>  
        

          
      </div>

      </nav>
      <nav className="bg-gray-50 dark:bg-gray-700">
          <div className="max-w-screen-xl px-4 py-3 mx-auto">

              <div className="flex justify-between items-center">

                  <ul className="flex flex-wrap justify-center items-center gap-2">
                      <li>
                          <Link to="/" className='text-md hover:bg-slate-200 hover:rounded-sm p-3'>Home</Link>
                      </li>
                      <li>
                      <Link className='text-md hover:bg-slate-200 hover:rounded-sm p-3' to='/login'>Login</Link>
                      </li>
                      <li>
                      <Link className='text-md hover:bg-slate-200 hover:rounded-sm p-3' to="/register">Register</Link>
                      </li>
                  </ul>

                  <ul className='flex justify-center items-end'>
                    <li>
                      <Link to="/basket"><Rozet/></Link>
                    </li>
                  
                  </ul>
              </div>
          </div>
      </nav>


     </>
  );
}
export default Navs;