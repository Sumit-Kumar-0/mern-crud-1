import React from "react";
import "./style/AllUsers.css";
import { Trash2, Pencil } from "lucide-react";
import Layout from "./Layout/Layout";

export default function AllUsers() {
  return (
    <Layout>
      <div className="container">
        <div className="content">
          <table className="users-table">
            <thead>
              <tr>
                <th>S.NO</th>
                <th>User Name</th>
                <th>User Email</th>
                <th>User Password</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Data 1</td>
                <td>Data 2</td>
                <td>Data 3</td>
                <td className="table-btn">
                  <Pencil className="edit" />
                  <Trash2 className="delete" />
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Data 1</td>
                <td>Data 2</td>
                <td>Data 3</td>
                <td className="table-btn">
                  <Pencil className="edit" />
                  <Trash2 className="delete" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}
