import React, { useEffect, useState } from "react";
import axios from "axios";
import { List, Card } from "antd";

const gridStyle = {
  width: "25%",
  textAlign: "center"
};
const url = "http://localhost:5000/api/restricted/data";
const Recipes = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const request = () => {
      axios
        .get(url)
        .then(res => {
          setData(res.data);
          console.log(res);
        })
        .catch(err => {
          // actions.setErrors(err.message);
          console.log(err.message);
        });
    };
    request();
  }, []);
  const request = () => {
    axios
      .get(url)
      .then(res => {
        setData(res.data);
        console.log(res);
      })
      .catch(err => {
        // actions.setErrors(err.message);
        console.log(err.message);
      });
  };

  return (
    <List
      grid={{
        gutter: 16,
        xs: 1,
        sm: 2,
        md: 4,
        lg: 4,
        xl: 6,
        xxl: 3
      }}
      dataSource={data}
      renderItem={item => (
        <List.Item>
          <Card title={item.name} description={item.course} extra={item.course}>
            {item.ingredients.map(ingredient => (
              <Card.Grid gutter={16} span={4} style={gridStyle}>
                {ingredient}
              </Card.Grid>
            ))}
          </Card>
        </List.Item>
      )}
    />
  );
};

export default Recipes;
