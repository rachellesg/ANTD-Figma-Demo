import {
  BarChartOutlined,
  FileDoneOutlined,
  FileTextOutlined,
  HomeOutlined,
  MenuFoldOutlined,
  MonitorOutlined,
  ToolOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React from "react";

const { Sider } = Layout;

const Sidebar = () => {
  return (
      <Sider width={300} theme="dark">
        <div style={{ padding: "16px", textAlign: "center" }}>
          <img
            src="https://via.placeholder.com/54"
            alt="Logo"
            style={{ width: 54, height: 50 }}
          />
          <div
            style={{ color: "#f6f6f6", fontWeight: "bold", fontSize: "20px" }}
          >
            ISMP
          </div>
          <div style={{ color: "#f6f6f6", fontSize: "15px" }}>
            Access Control System
          </div>
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<HomeOutlined />}>
            Home
          </Menu.Item>
          <Menu.Item key="2" icon={<FileTextOutlined />}>
            Whitelist Management
          </Menu.Item>
          <Menu.SubMenu
            key="sub1"
            icon={<UserOutlined />}
            title="Blacklist Management"
          >
            <Menu.Item key="3">Option 1</Menu.Item>
            <Menu.Item key="4">Option 2</Menu.Item>
          </Menu.SubMenu>
          <Menu.SubMenu
            key="sub2"
            icon={<UserOutlined />}
            title="Physical User Management"
          >
            <Menu.Item key="5">Option 1</Menu.Item>
            <Menu.Item key="6">Option 2</Menu.Item>
          </Menu.SubMenu>
          <Menu.SubMenu
            key="sub3"
            icon={<BarChartOutlined />}
            title="Analytics Management"
          >
            <Menu.Item key="7">Option 1</Menu.Item>
            <Menu.Item key="8">Option 2</Menu.Item>
          </Menu.SubMenu>
          <Menu.SubMenu
            key="sub4"
            icon={<FileDoneOutlined />}
            title="Report Management"
          >
            <Menu.Item key="9">Option 1</Menu.Item>
            <Menu.Item key="10">Option 2</Menu.Item>
          </Menu.SubMenu>
          <Menu.SubMenu
            key="sub5"
            icon={<ToolOutlined />}
            title="Device Management"
          >
            <Menu.Item key="11">Option 1</Menu.Item>
            <Menu.Item key="12">Option 2</Menu.Item>
          </Menu.SubMenu>
          <Menu.SubMenu
            key="sub6"
            icon={<MonitorOutlined />}
            title="Monitoring Tools"
          >
            <Menu.Item key="13">Option 1</Menu.Item>
            <Menu.Item key="14">Option 2</Menu.Item>
          </Menu.SubMenu>
        </Menu>
        <div style={{ padding: "16px", textAlign: "center" }}>
          <MenuFoldOutlined style={{ fontSize: "24px", color: "#f6f6f6" }} />
        </div>
      </Sider>
  );
};

export default Sidebar;