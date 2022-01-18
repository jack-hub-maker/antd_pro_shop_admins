/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: 
 * @Date: 2021-11-13 15:44:10
 * @LastEditors: YingJie Xing
 * @LastEditTime: 2021-11-13 17:13:04
 * @FilePath: /11.4react/antd_pro_shop_admins/ant-design-pro/src/pages/ceshi2.tsx
 * Copyright 2021 YingJie Xing, All Rights Reserved. 
 */
import React, { useContext, useState, useEffect } from "react";
const ThemeContext = React.createContext(null);
const Button = () => {
  const { color, setColor } = useContext(ThemeContext);
  useEffect(() => {
    console.info("Context changed:", color);
  }, [color]);
  const handleClick = () => {
    console.info("handleClick");
    setColor(color === "blue" ? "red" : "blue");
  };
  return (
    <button
      type="button"
      onClick={handleClick}
      style={{ backgroundColor: color, color: "white" }}
    >
      toggle color in Child
    </button>
  );
};
// app.js
const Ceshi2 = () => {
  const [color, setColor] = useState("blue");

  return (
    <ThemeContext.Provider value={{ color, setColor }}>
      <h3>
        Color in Parent: <span style={{ color: color }}>{color}</span>
      </h3>
      <Button />
    </ThemeContext.Provider>
  );
};

export default Ceshi2
