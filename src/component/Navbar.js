import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import { Menu, Dropdown, Icon } from "antd";

const Input = (
    <Menu theme="dark" style={{backgroundColor:"black"}}>
        <Menu.Item>
            <a rel="noopener noreferrer">
                <Link to='/Input/Ekonomi'> Ekonomi </Link>
            </a>
        </Menu.Item>
        <Menu.Item>
            <a rel="noopener noreferrer">
                <Link to='/Input/Sosbud'> Sosial Budaya </Link>

            </a>
        </Menu.Item>
        <Menu.Item>
            <a rel="noopener noreferrer">
                <Link to='/Input/Publik'> Pelayanan Publik </Link>
            </a>
        </Menu.Item>
        <Menu.Item>
            <a rel="noopener noreferrer">
                <Link to='/Input/SDM'> Pengembangan SDM </Link>
            </a>
        </Menu.Item>
    </Menu>
);

const Hasil = (
    <Menu theme="dark" style={{backgroundColor:"black"}}>
        <Menu.Item>
            <a rel="noopener noreferrer">
                <Link to='/Hasil/Ekonomi'> Ekonomi </Link>
            </a>
        </Menu.Item>
        <Menu.Item>
            <a rel="noopener noreferrer">
                <Link to='/Hasil/Sosbud'> Sosial Budaya </Link>

            </a>
        </Menu.Item>
        <Menu.Item>
            <a rel="noopener noreferrer">
                <Link to='/Hasil/Publik'> Pelayanan Publik </Link>
            </a>
        </Menu.Item>
        <Menu.Item>
            <a rel="noopener noreferrer">
                <Link to='/Hasil/SDM'> Pengembangan SDM </Link>
            </a>
        </Menu.Item>
    </Menu>
);

export default function Navbar(){
    return(
        <div style={{display: "flex"}}>
            <ul style={{flex: 1}}>
                <li><Link to='/'> Home </Link></li>
                <li><Dropdown overlay={Input}>
                    <a className="ant-dropdown-link">
                        Input <Icon type="down" />
                    </a>
                </Dropdown></li>
                <li><Dropdown overlay={Hasil}>
                    <a className="ant-dropdown-link">
                        Hasil <Icon type="down" />
                    </a>
                </Dropdown></li>
                <li><Link to='/About'> About </Link></li>
            </ul>
        </div>
    )
}