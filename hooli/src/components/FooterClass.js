import React from "react";
import { Layout } from "antd";

export default class FooterClass extends React.Component {
  render() {
    const { Footer } = Layout;
    return (
      <Footer style={{ textAlign: "center" }}>Created by Bryant Patton</Footer>
    );
  }
}
