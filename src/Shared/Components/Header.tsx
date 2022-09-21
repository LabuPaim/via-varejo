import { Box } from '@mui/material';
import { FiMenu, FiTriangle } from 'react-icons/fi';
import { FaRegCircle } from 'react-icons/fa';
import { GrCheckbox } from 'react-icons/gr';
import { IoPersonOutline } from 'react-icons/io5';


import '../Sass/Components/header.scss';

function Header() {
  return (
  <Box className='Header'>
    <Box className='iconGroup'>
      <FaRegCircle/>
      <FiTriangle/>
      <GrCheckbox/>
      <IoPersonOutline/>
    </Box>
    <h1>Controle financeiro</h1>
    <FiMenu/>
  </Box>
  )
}

export default Header;
