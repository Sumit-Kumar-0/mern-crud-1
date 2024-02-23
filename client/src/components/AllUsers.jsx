import React, { useEffect, useState } from "react";
import "./style/AllUsers.css";
import { Trash2, Pencil } from "lucide-react";
import Layout from "./Layout/Layout";
import { Link } from "react-router-dom";
import { MyToaster } from "./MyToaster";

export default function AllUsers() {
  const [userData, setUserData] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch("http://localhost:8080/user/");
      const result = await response.json();
      setUserData(result.allUser);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const deleteHandler = async (userId) => {
    const response = await fetch(`http://localhost:8080/user/${userId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const deletedUser = await response.json();
    console.log(deletedUser.message);
    MyToaster(deletedUser.message);
    getData();
  };

  return (
    <Layout>
      <div className="container">
        <div className="content">
          <h1 className="heading">All user</h1>
          <table className="users-table">
            <thead>
              <tr>
                <th>S.NO</th>
                <th>User Name</th>
                <th>User Email</th>
                <th>User Password</th>
                <th>Action!</th>
              </tr>
            </thead>
            <tbody>
              {userData.length > 0 &&
                userData.map((user, i) => (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.password}</td>
                    <td className="table-btn">
                      <Link to={`/${user._id}`}>
                        <Pencil className="edit" />
                      </Link>
                      <Trash2
                        className="delete"
                        onClick={() => deleteHandler(user._id)}
                      />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          {userData.length === 0 && <h1>There is no user Available</h1>}
        </div>
      </div>
    </Layout>
  );
}
