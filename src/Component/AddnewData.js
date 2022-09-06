import React, { useContext, useEffect, useState } from "react";
import { ContextProvider } from "./Context";
import { Button, Form, Input, message } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import DisabledContext from "antd/lib/config-provider/DisabledContext";

const defaultValues = {
  name: "",
  email: "",
  body: "",
};
// const onFinish = (values) => {
//   console.log("Success:", values);
// };

// const onFinishFailed = (errorInfo) => {
//   console.log("Failed:", errorInfo);
// };

function AddnewData({ value }) {
  const [form] = Form.useForm();
  let { alldata } = useContext(ContextProvider);
  const [edit, setEdit] = useState(false);
  let [data, setData] = useState(alldata);

  const onFinish = (values) => {
    if (!edit) {
      let item = {
        name: name,
        email: email,
        body: body,
        id: alldata[alldata.length - 1].id + 1,
      };
      console.log(item, "item");

      if (data.push(item)) {
        toast.success("your data successdully insert");
        navigate("/dashbord");
      }
    }
    // Edit  data
    if (edit) {
      let tmp = alldata;
      tmp[id - 1] = {
        id: id,
        userId: tmp[id - 1].userId,
        name,
        email,
        body,
      };
      setData(tmp);
      toast.success("Your data Update");
      navigate("/dashbord");
    }
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handelBack = () => {
    navigate("/dashbord");
  };

  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    if (value && alldata && alldata.length > 0) {
      setEdit(true);
      form.setFieldsValue({
        name: alldata[id - 1].name,
        email: alldata[id - 1].email,
        body: alldata[id - 1].body,
      });
      setName(alldata[id - 1].name);
      setEmail(alldata[id - 1].email);
      setBody(alldata[id - 1].body);
    }
  }, [form, alldata]);

  return (
    <div>
      <Button onClick={handelBack} className="primary">
        Dashboard
      </Button>
      <br />
      <br />
      <>
        <Form
          style={{
            position: "relative",
            right: "145px",
          }}
          form={form}
          initialValues={defaultValues}
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="NAME"
            name="name"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
              {
                whitespace: true,
              },
            ]}
            hasFeedback
          >
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Title"
            />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
                pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
              },
              {
                whitespace: true,
              },
            ]}
            hasFeedback
          >
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
            />
          </Form.Item>

          <Form.Item
            label="Body"
            name="body"
            rules={[
              {
                required: true,
                message: "Please input your body!",
              },
              {
                whitespace: true,
              },
            ]}
            hasFeedback
          >
            <Input
              type="text"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              placeholder="Enter Body"
            />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button
              type="primary"
              htmlType="submit"
              style={{ position: "relative", right: "30px" }}
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </>
    </div>
  );
}

export default AddnewData;
