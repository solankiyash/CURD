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

function AddnewData({ value }) {
  const [form] = Form.useForm();
  let { alldata } = useContext(ContextProvider);
  const [edit, setEdit] = useState(false);
  let [data, setData] = useState(alldata);

  const handelBack = () => {
    navigate("/dashbord");
  };

  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");

  const Addalldata = (e) => {
    // add data
    e.preventDefault();
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
  };

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
            label="body"
            name="body"
            rules={[
              {
                required: true,
                message: "Enter body",
              },
              { whitespace: true },
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
              type="submit"
              disabled={
                name !== "" && email !== "" && body !== "" ? false : true
              }
              className="primary"
              onClick={Addalldata}
            >
              {edit ? "update" : "add"}
            </Button>
          </Form.Item>
        </Form>
      </>
    </div>
  );
}

export default AddnewData;
