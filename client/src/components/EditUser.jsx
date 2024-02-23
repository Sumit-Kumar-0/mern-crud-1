import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Layout from "./Layout/Layout";
import InputField from "./InputField";
import Button from "./buttons/Button";
import MyToaster from "./MyToaster";

export default function EditUser() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [res, setRes] = useState(false);

  const navigate = useNavigate();
  const { userId } = useParams();

  const changeHandler = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const getUserData = async () => {
    try {
      const response = await fetch(`http://localhost:8080/user/${userId}`);

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const result = await response.json();
      const { name, email, password } = result.singleUser;
      setFormData({
        name,
        email,
        password,
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    await updateUserData(formData);
  };

  const updateUserData = async (data) => {
    try {
      const response = await fetch(`http://localhost:8080/user/${userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to update data");
      }
      const result = await response.json();
      console.log(result.message);
      setRes(true);
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      setRes(false);
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    getUserData();
  }, [setFormData]);
  console.log(res);
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
          {res && <MyToaster text="successfully updated" />}
        </div>
      </div>
    </Layout>
  );
}
