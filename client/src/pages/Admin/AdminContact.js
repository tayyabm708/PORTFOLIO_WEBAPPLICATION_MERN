import React from "react";
import { Form, Input, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { ShowLoading, HideLoading } from "../../redux/rootSlice";
import axios from "axios";
// import { message } from "antd";

function AdminContact() {
  const { portfolioData } = useSelector((state) => state.root);
  const dispatch = useDispatch();
  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      const response = await axios.post("/api/portfolio/update-contact", {
        ...values,
        _id: portfolioData.contact._id,
      });
      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message);
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      message.error(error.message);
      dispatch(HideLoading());
    }
  };
  return (
    <Form
      onFinish={onFinish}
      layout="vertical"
      initialValues={portfolioData.contact}
    >
      <Form.Item name="name" label="Name">
        <input placeholder="Name" />
      </Form.Item>
      <Form.Item name="age" label="Age">
        <input placeholder="Age" />
      </Form.Item>
      <Form.Item name="email" label="Email">
        <input placeholder="Email" />
      </Form.Item>
      <Form.Item name="mobile" label="Contact Number">
        <input placeholder="Contact Number" />
      </Form.Item>
      <Form.Item name="country" label="Country Name">
        <input placeholder="Country Name" />
      </Form.Item>
      <Form.Item name="url" label="Lottie URL">
        <input placeholder="Lottie URL" />
      </Form.Item>
      <div className="flex justify-end ">
        <button
          className="px-10  py-2 mx-5 bg-primary text-white rounded"
          type="submit"
        >
          SAVE
        </button>
      </div>
    </Form>
  );
}

export default AdminContact;
