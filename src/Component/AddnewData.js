import React, { useContext, useEffect, useState } from "react";
import { ContextProvider } from "./Context";
import { Button, Form, Input } from "antd";
import { useNavigate, useParams } from "react-router-dom";

const defaultValues = {
  name: "",
  email: "",
  body: "",
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

    e.preventDefault();
    if (value === undefined) {
      if (name === "") {
        alert("please fill name");
      } else if (email === "") {
        alert("please fill email");
      } else if (body === "") {
        alert("please fill body");
      } else {
        if (data.push(item)) {
          alert("your data successfully insert");
          navigate("/dashbord");
        } else {
          alert("Sorry your data not insert");
        }
      }
    }
    // Edit  data
    if (value !== undefined) {
      if (name === "" || email === "" || body === "") {
        alert("please fill data");
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
        alert("your data successfully updated");
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
                },
              ]}
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
                  pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                  message: "Enter a valid email address!",
                },
              ]}
            >
              <Input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
            >
              <Input
                type="text"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                placeholder="Enter Title"
              />
              <Button className="primary" onClick={Addalldata}>
                Add
              </Button>
            </Form.Item>
          </Form>
        </>
      ) : value !== undefined ? (
        <Form form={form}>
          <Form.Item
            label="name"
            name="name"
            rules={[
              {
                required: true,
              },
            ]}
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
