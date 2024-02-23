import React, { useState } from "react";
import Layout from "./Layout/Layout";
import InputField from "./InputField";
import "./style/CreateUser.css";
import Button from "./buttons/Button";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";
import MyToaster from "./MyToaster";

export default function CreateUser() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [res, setRes] = useState("1");
  const navigate = useNavigate();
  const changeHandler = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setRes("1")
    await postData(formData);
  };

  const postData = async (data) => {
    try {
      const response = await fetch("http://localhost:8080/user/create/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log(result.message);
      if (result.success) {
        setRes("2");
      }
      if (!result.success) {
        setRes("3");
      }

      if (result.success === true) {
        setTimeout(() => {
          navigate("/");
        }, 1000);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Layout>
      <div className="container creat-user-container">
        <div className="content">
          <h1 className="heading">Create a new user</h1>
          <form className="creat-user-form" onSubmit={submitHandler}>
            <InputField
              label="name"
              htmlFor="name"
              type="text"
              id="name"
              placeholder="enter your name"
              required="required"
              autoComplete="name"
              value={formData.name}
              onChange={changeHandler}
            />
            <InputField
              label="email"
              htmlFor="email"
              type="email"
              id="email"
              placeholder="enter your email"
              required="required"
              autoComplete="email"
              value={formData.email}
              onChange={changeHandler}
            />
            <InputField
              label="password"
              htmlFor="password"
              type="password"
              id="password"
              placeholder="enter your password"
              required="required"
              autoComplete="current-password"
              value={formData.password}
              onChange={changeHandler}
            />
            <Button type="submit" text="submit" className="primary-btn" />
          </form>
          {res === "2" && <Loader />}
          {res === "2" && <MyToaster text="user created successfully!!" />}
          {res === "3" && <MyToaster className="error" text="user already exist!!" />}
        </div>
      </div>
    </Layout>
  );
}
