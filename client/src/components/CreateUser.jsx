import React from "react";
import Layout from "./Layout/Layout";
import InputField from "./InputField";

export default function CreateUser() {
  return (
    <Layout>
      <div className="container">
        <div className="layout">
          <form className="creat-user-form">
            <InputField />
            <InputField />
            <InputField />
          </form>
        </div>
      </div>
    </Layout>
  );
}
