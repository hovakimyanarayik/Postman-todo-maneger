import React from 'react';
import { Menu } from 'antd';
import { HomeOutlined, ReadOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';

function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
  }
  const items = [
      getItem(<NavLink to={'/'}>Home</NavLink>, '1', <HomeOutlined />),
      getItem( <NavLink to={'/todos'}>Todos</NavLink>, '2', <ReadOutlined /> )
    ];

const Navbar = () => {
    return ( 
        <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={'1'}
            items={items}
        />
     );
}
 
export default Navbar;