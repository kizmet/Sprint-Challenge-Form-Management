import React from "react";
import Login from "./components/forms/Login";
import Register from "./components/forms/Register";
import Recipes from "./components/Recipes";
import "./App.css";
import { Layout, Menu } from "antd";
import { useRoutes, A } from "hookrouter";
import Home from "./Home";
import FooterClass from "./components/FooterClass";

import "antd/dist/antd.css";

const routes = {
  "/": () => <Home />,
  "/register": () => <Register />,
  "/login": () => <Login />,
  "/recipes": () => <Recipes />
};

function App() {
  const routeResult = useRoutes(routes);
  const { Header, Footer, Sider, Content } = Layout;
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          style={{ lineHeight: "64px" }}
        >
          <Menu.Item key="1">
            <A href="/">Home Page</A>
          </Menu.Item>
          <Menu.Item key="2">
            <A href="/login">Login Page</A>
          </Menu.Item>
          <Menu.Item key="3">
            <A href="/register">Register Page</A>
          </Menu.Item>
          <Menu.Item key="4">
            <A href="/recipes">Recipies Page</A>
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: "0 50px" }}>{routeResult}</Content>
      <FooterClass />
    </Layout>
  );
}

export default App;
