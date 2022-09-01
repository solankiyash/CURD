import React, { useContext, useEffect, useState } from "react";
import { ContextProvider } from "./Context";
import { Button, Form, Input } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const defaultValues = {
  name: "",
  email: "",
  body: "",
};
const onFinish = (values) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

function AddnewData({ value }) {
  const [form] = Form.useForm();
  let { alldata } = useContext(ContextProvider);

  let [data, setData] = useState(alldata);

  const handelBack = () => {
    navigate("/dashbord");
  };

  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");

  const [updata, setUpdata] = useState(Boolean);
  const Addalldata = (e) => {
    // add data

    let item = {
      name: name,
      email: email,
      body: body,
      id: alldata[alldata.length - 1].id + 1,
    };
    console.log(item, "item");
    e.preventDefault();

    if (value === undefined) {
      if (data.push(item)) {
        toast.success("your data successdully insert");
        navigate("/dashbord");
      } else {
        alert("Sorry your data not insert");
      }
    }
    // Edit  data
    if (value !== undefined) {
      if (name === "" || email === "" || body === "") {
        toast.error("please fill data");
      } else {
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
    }
    // console.log(value,"value")
  };

  useEffect(() => {
    if (value && alldata && alldata.length > 0) {
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
      {value === undefined ? (
        <>
          <Form form={form} initialValues={defaultValues}>
            <Form.Item
              label="Name"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Name Required",
                },
                { whitespace: true },
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
              label="email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Enter a valid email address!",
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
                  message: "Enter a valid email address!",
                  pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
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
              <br />
              <br />
              <Button
                disabled={
                  name !== "" && email !== "" && body !== "" ? false : true
                }
                className="primary"
                onClick={Addalldata}
              >
                Add
              </Button>
            </Form.Item>
          </Form>
        </>
      ) : value !== undefined ? (
        <Form
          form={form}
          // name="basic"
          // labelCol={{
          //   span: 9,
          // }}
          // wrapperCol={{
          //   span: 10,
          // }}
          // onFinish={onFinish}
          // onFinishFailed={onFinishFailed}
          // autoComplete="off"
        >
          <Form.Item
            label="name"
            name="name"
            rules={[
              {
                required: true,
              },
            ]}
            hasFeedback
          >
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              // defaultValue={alldata[id - 1].name}
              placeholder="Enter Title"
            />
          </Form.Item>
          <Form.Item
            label="email"
            name="email"
            rules={[
              {
                required: true,
                pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: "Enter a valid email address!",
              },
            ]}
            hasFeedback
          >
            <Input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              // defaultValue={alldata[id - 1].email}
              placeholder="Enter Title"
            />
          </Form.Item>
          <Form.Item
            label="body"
            name="body"
            rules={[
              {
                required: true,
              },
            ]}
            hasFeedback
          >
            <Input
              type="text"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              // defaultValue={alldata[id - 1].body}
              placeholder="Enter Title"
            />
          </Form.Item>
          <Button className="primary" onClick={Addalldata}>
            Edit
          </Button>
        </Form>
      ) : (
        ""
      )}
    </div>
  );
}

export default AddnewData;
