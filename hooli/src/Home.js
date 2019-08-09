import React from "react";
import Login from "./components/forms/Login";
import Register from "./components/forms/Register";
import "./App.css";
import { Layout } from "antd";
import { useRoutes, A } from "hookrouter";
// const Home = () => {
//   const { Header, Footer, Sider, Content } = Layout;
//   return (
//     <div className="App">
//       <Layout>
//         <Content style={{ paddingTop: "80px" }}>
//           <Register Footer={Footer} />
//         </Content>
//         <Footer style={{ textAlign: "center" }}>©2019 Blobber</Footer>
//         <Content style={{ paddingTop: "80px" }} />
//       </Layout>
//     </div>
//   );
// };

const Home = () => {
  return (
    <div style={{ background: "#fff", padding: 24, minHeight: 280 }}>
      <h1>Welcome</h1>

      <Layout.Content style={{ paddingTop: "80px" }}>
        <p>Login or Register!</p>
      </Layout.Content>
    </div>
  );
};

export default Home;
