import React, { useState } from "react";
import { Input } from "antd";
import "./App.css";

import Header from "./Header";
import Footer from "./Footer";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
import Item from "./Item";

function App() {
  const [count, setCount] = useState(5);

  const [isShowLeftSidebar, setIsShowLeftSidebar] = useState(false);
  const [isShowRightSidebar, setIsShowRightSidebar] = useState(false);

  const [registerForm, setRegisterForm] = useState({
    name: "",
    address: "",
    phone: "",
    note: "",
    gender: "male",
    options: [],
    agree: false,
  });

  const [registerError, setRegisterError] = useState({
    name: "",
    address: "",
  });

  const fullName = "Thanh Tuấn";

  const productList = [
    {
      name: "iPhone 12",
      price: 15000000,
      isNew: true,
    },
    {
      name: "iPhone 12 Mini",
      price: 12000000,
      isNew: false,
    },
    {
      name: "iPhone 12 Pro",
      price: 20000000,
      isNew: true,
    },
    {
      name: "iPhone 12 Pro Max",
      price: 22000000,
      isNew: false,
    },
    {
      name: "iPhone 13",
      price: 25000000,
      isNew: false,
    },
    {
      name: "iPhone 13 Mini",
      price: 20000000,
      isNew: false,
    },
    {
      name: "Galaxy S21",
      price: 15000000,
      isNew: false,
    },
    {
      name: "Galaxy Note 20",
      price: 20000000,
      isNew: false,
    },
    {
      name: "Xiaomi M11",
      price: 15000000,
      isNew: false,
    },
    {
      name: "Oppo Reno 5",
      price: 18000000,
      isNew: false,
    },
  ];

  const handleRegister = () => {
    let isValid = true;
    let error = {};
    if (!registerForm.name) {
      error.name = "Name is required";
      isValid = false;
    } else {
      error.name = "";
    }

    if (!registerForm.address) {
      error.address = "Address is required";
      isValid = false;
    } else {
      error.address = "";
    }

    if (isValid) {
      console.log(registerForm);
    } else {
      setRegisterError(error);
    }
  };

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    setRegisterForm({
      ...registerForm,
      [name]: name === "agree" ? checked : value,
    });
  };

  const handleOptionChange = (e) => {
    const { value, checked } = e.target;
    setRegisterForm({
      ...registerForm,
      options: checked
        ? [...registerForm.options, value]
        : registerForm.options.filter((item) => item !== value),
    });
  };

  const renderProductList = () => {
    return productList.map((item, index) => {
      return (
        <Item
          key={index}
          name={item.name}
          price={item.price}
          isNew={item.isNew}
        />
      );
    });
  };

  return (
    <div className="app">
      <LeftSidebar
        isShowLeftSidebar={isShowLeftSidebar}
        setIsShowLeftSidebar={setIsShowLeftSidebar}
      />
      <Header
        setIsShowLeftSidebar={setIsShowLeftSidebar}
        name={fullName}
        address="iViettech"
      />
      <div className="main-container">
        <div
          className={
            isShowRightSidebar
              ? "main-content main-show-sidebar"
              : "main-content"
          }
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <div>{count}</div>
              <button onClick={() => setCount(count + 1)}>+ Count</button>
              <button onClick={() => setCount(count - 1)}>- Count</button>
            </div>
            <button onClick={() => setIsShowRightSidebar(!isShowRightSidebar)}>
              Toggle Right Sidebar
            </button>
          </div>
          <h2>Danh sách sản phẩm</h2>
          <div className="list">{renderProductList()}</div>

          <h2>Form đăng ký</h2>
          <form>
            <div>
              <label htmlFor="name">Name: </label>
              <Input
                id="name"
                name="name"
                placeholder="Họ và tên"
                onChange={(e) => handleChange(e)}
              />
              <div>{registerError.name}</div>
            </div>
            <div>
              <label htmlFor="address">Địa chỉ: </label>
              <input
                id="address"
                name="address"
                placeholder="Địa chỉ"
                onChange={(e) => handleChange(e)}
              />
              <div>{registerError.address}</div>
            </div>
            <div>
              <label htmlFor="phone">Số điện thoại: </label>
              <input
                id="phone"
                name="phone"
                placeholder="Số điện thoại"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div>
              <label htmlFor="note">Ghi chú: </label>
              <textarea
                id="note"
                name="note"
                placeholder="Ghi chú"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={registerForm.gender === "male"}
                onChange={(e) => handleChange(e)}
              />
              Male
              <input
                type="radio"
                name="gender"
                value="female"
                checked={registerForm.gender === "female"}
                onChange={(e) => handleChange(e)}
              />
              Female
            </div>
            <div>
              <input
                type="checkbox"
                name="options"
                value="option 1"
                onChange={(e) => handleOptionChange(e)}
              />
              Option 1
              <input
                type="checkbox"
                name="options"
                value="option 2"
                onChange={(e) => handleOptionChange(e)}
              />
              Option 2
              <input
                type="checkbox"
                name="options"
                value="option 3"
                onChange={(e) => handleOptionChange(e)}
              />
              Option 3
            </div>
            <div>
              <input
                type="checkbox"
                name="agree"
                onChange={(e) => handleChange(e)}
              />
              Đồng ý điều khoản
            </div>

            <button type="button" onClick={() => handleRegister()}>
              Đăng ký
            </button>
          </form>
        </div>
        <RightSidebar isShowRightSidebar={isShowRightSidebar} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
