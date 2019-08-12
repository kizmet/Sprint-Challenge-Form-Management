import React, { useState, useEffect } from "react";
import axios from "axios";
import { Field, withFormik, Formik } from "formik";
import * as Yup from "yup";
import {
  Form,
  List,
  Input,
  Icon,
  Layout,
  Select,
  Checkbox,
  Button,
  Card,
  Alert
} from "antd";

const url = "http://localhost:5000/api/login";

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 }
  }
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0
    },
    sm: {
      span: 16,
      offset: 8
    }
  }
};
export const LoginForm = ({
  errors,
  touched,
  values,
  handleSubmit,
  handleChange,
  handleBlur,
  status,
  setFieldValue,
  setFieldTouched,
  name
}) => {
  const [user, setUser] = useState([]);
  var data = ["data-test-id"];
  // useEffect(() => {
  //   if (status) {
  //     setUser([...user, status]);
  //   }
  // }, [status]);

  return (
    <div>
      <h2 data-testid="login-screen">Login</h2>
      <Card
        title="Enter Login Credentials"
        data-testid={`error-card`}
        style={{
          maxWidth: 400,
          minWidth: 400,
          marginLeft: "auto",
          marginRight: "auto"
        }}
      >
        {errors.name &&
          touched.name &&
          errors.map(error => {
            return (
              <Alert
                description={error.name}
                htmlFor={`error-${error.name}`}
                type="error"
                style={{ marginBottom: 2 }}
                closable
              />
            );
          })}

        <Form {...formItemLayout} onSubmit={handleSubmit}>
          <Form.Item
            label="username"
            htmlFor="username"
            {...(errors.username && touched.username
              ? {
                  validateStatus: "error",
                  help: errors.username
                }
              : {})}
          >
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.username}
              placeholder="username"
              label="username"
              name="username"
              id="username"
              type="username"
            />
          </Form.Item>
          <Form.Item
            label="Password"
            {...(errors.password && touched.password
              ? {
                  validateStatus: "error",
                  help: errors.password
                }
              : {})}
          >
            <Input
              prefix={<Icon type="bank" style={{ color: "rgba(0,0,0,.25)" }} />}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              placeholder="password"
              label="password"
              name="password"
              id="password"
              type="password"
            />
          </Form.Item>

          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit" name="submit">
              Login
            </Button>
          </Form.Item>
        </Form>
      </Card>

      {(status && console.log(status)) || <div>API Error: {status}</div>}
    </div>
  );
};

const Login = withFormik({
  mapPropsToValues({ password, username }) {
    return {
      password: password || "",
      username: username || ""
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string().required("Required"),
    password: Yup.string().required("Required")
  }),

  handleSubmit(values, actions) {
    axios
      .post(url, values)
      .then(res => {
        res.err ? console.log(res) : actions.setStatus(res.data.message);
        console.log(res.data.message);
        // actions.setStatus(res.data.message);
        // console.log(res);
        // actions.setSubmitting(false);
      })
      .catch(err => {
        // actions.setErrors(err.message);
        console.log(err);
        actions.setErrors(err);
      });
  }
})(LoginForm); // currying functions in Javascript

export default Login;
