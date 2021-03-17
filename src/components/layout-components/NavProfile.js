import React from "react";
import { Menu, Dropdown, Avatar } from "antd";
import { connect } from 'react-redux'
import {
  EditOutlined,
  SettingOutlined,
  ShopOutlined,
  QuestionCircleOutlined,
  LogoutOutlined
} from '@ant-design/icons';
import Icon from 'components/util-components/Icon';
import { signOut } from 'redux/actions/Auth';
import { onMobileNavToggle } from "redux/actions/Theme";
import MENU_IMG from 'assets/icons/menu.png';
import './style.css';
import useWindowDimensions from "utils/dimensions";

const menuItem = [
	{
		title: "Edit Profile",
		icon: EditOutlined ,
		path: "/"
    },

    {
		title: "Account Setting",
		icon: SettingOutlined,
		path: "/"
    },
    {
		title: "Billing",
		icon: ShopOutlined ,
		path: "/"
	},
    {
		title: "Help Center",
		icon: QuestionCircleOutlined,
		path: "/"
	}
]

export const NavProfile = ({signOut, onMobileNavToggle, mobileNav}) => {
  const dimensions = useWindowDimensions()

  const profileImg = "/img/avatars/thumb-1.jpg";
  const profileMenu = (
    <div className="nav-profile nav-dropdown">
      <div className="nav-profile-header">
        <div className="d-flex">
          <Avatar size={45} src={profileImg} />
          <div className="pl-3">
            <h4 className="mb-0">Charlie Howard</h4>
            <span className="text-muted">Frontend Developer</span>
          </div>
        </div>
      </div>
      <div className="nav-profile-body">
        <Menu>
          {menuItem.map((el, i) => {
            return (
              <Menu.Item key={i}>
                <a href={el.path}>
                  <Icon className="mr-3" type={el.icon} />
                  <span className="font-weight-normal">{el.title}</span>
                </a>
              </Menu.Item>
            );
          })}
          <Menu.Item key={menuItem.legth + 1} onClick={e => signOut()}>
            <span>
              <LogoutOutlined className="mr-3"/>
              <span className="font-weight-normal">Sign Out</span>
            </span>
          </Menu.Item>
        </Menu>
      </div>
    </div>
  );
  return (
    <div style={{ display: 'flex', alignItems: 'center', marginLeft: 15 }}>
      {
        dimensions.width <= 990 ?
          <img src={MENU_IMG} className="menu-icon" onClick={()=>onMobileNavToggle(!mobileNav)} />
        :
          <Dropdown placement="bottomRight" overlay={profileMenu} trigger={["click"]}>
            <Menu className="d-flex align-item-center" mode="horizontal">
              <Menu.Item>
                <Avatar src={profileImg} />
              </Menu.Item>
            </Menu>
          </Dropdown>
      }

    </div>
  );
}

const mapStateToProps = ({ theme }) => {
  const { navCollapsed, sideNavTheme, mobileNav } = theme;
  return { navCollapsed, sideNavTheme, mobileNav };
};

export default connect(mapStateToProps, {onMobileNavToggle, signOut})(NavProfile)
