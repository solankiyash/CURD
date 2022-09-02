import React, { useContext, useEffect, useState } from "react";
import { ContextProvider } from "./Context";
import { useNavigate } from "react-router-dom";
import { Table } from "antd";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import moment from "moment";
import { message, Popconfirm } from "antd";

function Dashbord(props) {
  const { email } = useContext(ContextProvider);
  const { alldata, insert, dataupdate } = useContext(ContextProvider);
  const [data1, setData1] = useState(insert);
  const [data2, setData2] = useState(dataupdate);
  const [users, setUsers] = useState([]);
  const [logindata, setlogindata] = useState([]);
  const [state, setState] = useState(false);
  const [show, setShow] = useState(false);

  // delete data

  const confirm = (id) => {
    handelDelete(id);
    message.success("Succesfully deleted");
  };

  const cancel = (e) => {
    message.error("Delete cancelled");
  };

  const [loginUser, setLoginUser] = useState("");

  const [newData, setNewData] = useState(
    localStorage.setItem("user", JSON.stringify(logindata))
  );

  const handleClose = () => {
    const a = localStorage.getItem("data");
    const user = JSON.parse(a);
    setLoginUser(user.name);

    localStorage.setItem(user.name, "close");
    setShow(false);
  };
  const handleShow = () => setShow(true);

  var today = moment().format("MMM Do");

  console.log(today, "today");

  const Birthday = () => {
    const a = localStorage.getItem("data");
    const user = JSON.parse(a);
    setLoginUser(user.name);

    const getuser = localStorage.getItem("data");

    if (localStorage.getItem(user.name) === null) {
      if (getuser && getuser.length) {
        const user = JSON.parse(getuser);
        setlogindata(user);
        const userbirth = logindata.map((el) => {
          console.log(el.date, el.date === today, "alldate");
          return el.date === today;
        });
        if (userbirth) {
          setTimeout(() => {
            console.log("ok");
            handleShow();
          }, 3000);
        }
      }
    }
  };
  useEffect(() => {
    Birthday();
  }, []);

  const handelDelete = (id) => {
    let tmp = users;
    tmp = tmp.filter((el) => el.id !== id);
    setUsers([...tmp]);
  };
  const handelchange = (id) => {
    navigate(`/edit/${id}`);
    props.onSubmit(data1);
    setData2();
  };

  const logout = () => {
    navigate("/");
  };
  const AddNew = () => {
    navigate("/Addnew");
    props.onSubmit(data1);
    // console.log(data1,"soolanki")
  };
  const navigate = useNavigate();

  const data = localStorage.getItem(email);
  const a = JSON.parse(data);

  useEffect(() => {
    setUsers(alldata);
  }, [alldata]);

  const close = () => {
    setState(true);
  };

  // table data
  const columns = [
    {
      title: "id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "body",
      dataIndex: "body",
      key: "body",
    },
    {
      title: "Action",
      render: (recored) => {
        return (
          <>
            <Button id={recored.id} onClick={() => handelchange(recored.id)}>
              Edit
            </Button>
            <Popconfirm
              title="Are you sure to delete this task ?"
              onConfirm={() => confirm(recored.id)}
              onCancel={cancel}
              okText="Yes"
              cancelText="No"
            >
              <Button id={recored.id}>Delete</Button>
            </Popconfirm>
          </>
        );
      },
    },
  ];
  return (
    <>
      {logindata.length === 0 ? (
        ""
      ) : (
        <>
          {logindata.date === today && state == false && newData !== "" ? (
            <Modal show={show}>
              <Modal.Header closeButton onClick={close}>
                <Modal.Title>{logindata.name}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Wish you many many happy return of the day
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Ok
                </Button>
              </Modal.Footer>
            </Modal>
          ) : (
            ""
          )}
        </>
      )}
      <div className="constructor">
        <div className="addbutton">
          <Button className="btn btn-secondary" onClick={AddNew}>
            Add New
          </Button>
          <Button className="btn btn-secondary" onClick={logout}>
            Logout
          </Button>
        </div>

        <h4>User Table</h4>
        <Table
          style={{ width: "80%", margin: "30px 100px" }}
          columns={columns}
          dataSource={users}
          size="middle"
        />
      </div>
    </>
  );
}

export default Dashbord;
