import React, { useState } from "react";
import { Button, Modal, NavLink } from "react-bootstrap";
import axios from "axios";
import { BsChevronLeft, BsCheckCircle } from "react-icons/bs";

import { AiOutlineMinus } from "react-icons/ai";

import "./styles.css";
// https://webhook.site/b6d35dca-7788-4157-8523-1aa9ffa64004
const AddSegment = (props) => {
  const [show, setShow] = useState(false);

  const [ModalMsg, setmodalMsg] = useState(false);
  const [ModalAlerShow, setModalAlerShow] = useState(false);

  const [fname, setfname] = useState(false);
  const [lname, setlname] = useState(false);
  const [gender, setgender] = useState(false);
  const [age, setage] = useState(false);
  const [city, setcity] = useState(false);
  const [state, setstate] = useState(false);
  const [aname, setaname] = useState(false);

  const [errSegname, setErrSegname] = useState(false);

  const [add, setAdd] = useState("");

  const [segName, setSegName] = useState("");
  const [fnamedata, setFnamedata] = useState("");
  const [lnamedata, setLnamedata] = useState("");
  const [anamedata, setAnamedata] = useState("");
  const [agedata, setAgedata] = useState("");
  const [genderdata, setGenderdata] = useState("");
  const [citydata, setCitydata] = useState("");
  const [statedata, setStatedata] = useState("");

  const handleClose = () => {
    setShow(false);
    setSegName("");
    setFnamedata("");
    setLnamedata("");
    setAnamedata("");
    setAgedata("");
    setGenderdata("");
    setCitydata("");
    setStatedata("");
    setErrSegname(false);
    setfname(false);
    setlname(false);
    setgender(false);
    setage(false);
    setcity(false);
    setstate(false);
    setaname(false);
  };

  const AddInput = () => {
    if (add === "first_name") {
      setfname(true);
      setAdd("");
    } else if (add === "last_name") {
      setlname(true);
      setAdd("");
    } else if (add === "gender") {
      setgender(true);
      setAdd("");
    } else if (add === "account_name") {
      setaname(true);
      setAdd("");
    } else if (add === "age") {
      setage(true);
      setAdd("");
    } else if (add === "city") {
      setcity(true);
      setAdd("");
    } else if (add === "state") {
      setstate(true);
      setAdd("");
    }
  };

  const OnSubmit = (e) => {
    e.preventDefault();
    var err = 0;
    if (segName === "") {
      err = 2;
      setErrSegname(true);
    }
    if (err > 1) {
      return false;
    }

    const data = {
      segment_name: segName,
      schema: [
        {
          first_name: fnamedata,
        },
        {
          last_name: lnamedata,
        },
        {
          account_name: anamedata,
        },
        {
          age: agedata,
        },
        {
          gender: genderdata,
        },
        {
          city: citydata,
        },
        {
          state: statedata,
        },
      ],
    };
    console.log(data);
    axios
      .post("https://webhook.site/b6d35dca-7788-4157-8523-1aa9ffa64004", data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    setModalAlerShow(true);
    setmodalMsg("Your Segment Saved Successfully");
    handleClose();
    setTimeout(() => setModalAlerShow(false), 1500);
  };

  return (
    <>
      <div style={{ margin: "20px" }}>
        <Button
          variant="light"
          className="add_popup"
          onClick={() => setShow(true)}
        >
          Save Segment
        </Button>
      </div>

      <Modal show={show} className="fade segment-popup modal show">
        <Modal.Header>
          <Modal.Title className="title-popup-template">
            <BsChevronLeft onClick={handleClose} />
            Saving Segment
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal_body">
            <label>Enter the name of the Segment</label>
            <input
              type="text"
              className="seg_name"
              placeholder="Name of the Segment"
              value={segName}
              onChange={(e) => {
                setSegName(e.target.value);
                setErrSegname(false);
              }}
            ></input>
            <p
              style={
                errSegname
                  ? { display: "block", color: "red" }
                  : { display: "none" }
              }
            >
              Please Enter Segment Name
            </p>
            <div style={{ marginTop: "20px" }}>
              <label>
                To save your segment, you need to add the schemas to build the
                query
              </label>
            </div>
            <div className="add-div">
              <div
                className="input_box_svg"
                style={
                  fname
                    ? { display: "flex", alignItems: "center" }
                    : { display: "none" }
                }
              >
                <input
                  type="text"
                  className="add_seg_name"
                  placeholder="First Name"
                  value={fnamedata}
                  onChange={(e) => setFnamedata(e.target.value)}
                ></input>
                <AiOutlineMinus
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setfname(false);
                    setFnamedata("");
                  }}
                />
              </div>
              <div
                className="input_box_svg"
                style={
                  lname
                    ? { display: "flex", alignItems: "center" }
                    : { display: "none" }
                }
              >
                <input
                  type="text"
                  className="add_seg_name"
                  placeholder="Last Name"
                  value={lnamedata}
                  onChange={(e) => setLnamedata(e.target.value)}
                ></input>
                <AiOutlineMinus
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setlname(false);
                    setLnamedata("");
                  }}
                />
              </div>
              <div
                className="input_box_svg"
                style={
                  gender
                    ? { display: "flex", alignItems: "center" }
                    : { display: "none" }
                }
              >
                <select
                  className="add_seg_name_drop"
                  value={genderdata}
                  onChange={(e) => setGenderdata(e.target.value)}
                >
                  <option value="" selected disabled>
                    Select Gender
                  </option>
                  <option value="1">Male</option>
                  <option value="2">Female</option>
                </select>
                <AiOutlineMinus
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setgender(false);
                    setGenderdata("");
                  }}
                />
              </div>
              <div
                className="input_box_svg"
                style={
                  age
                    ? { display: "flex", alignItems: "center" }
                    : { display: "none" }
                }
              >
                <input
                  type="text"
                  className="add_seg_name"
                  placeholder="Age"
                  value={agedata}
                  onChange={(e) => setAgedata(e.target.value)}
                ></input>
                <AiOutlineMinus
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setage(false);
                    setAgedata("");
                  }}
                />
              </div>
              <div
                className="input_box_svg"
                style={
                  aname
                    ? { display: "flex", alignItems: "center" }
                    : { display: "none" }
                }
              >
                <input
                  type="text"
                  className="add_seg_name"
                  placeholder="Account Name"
                  value={anamedata}
                  onChange={(e) => setAnamedata(e.target.value)}
                ></input>
                <AiOutlineMinus
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setaname(false);
                    setAnamedata("");
                  }}
                />
              </div>
              <div
                className="input_box_svg"
                style={
                  city
                    ? { display: "flex", alignItems: "center" }
                    : { display: "none" }
                }
              >
                <input
                  type="text"
                  className="add_seg_name"
                  placeholder="City"
                  value={citydata}
                  onChange={(e) => setCitydata(e.target.value)}
                ></input>
                <AiOutlineMinus
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setcity(false);
                    setCitydata("");
                  }}
                />
              </div>
              <div
                className="input_box_svg"
                style={
                  state
                    ? { display: "flex", alignItems: "center" }
                    : { display: "none" }
                }
              >
                <input
                  type="text"
                  className="add_seg_name"
                  placeholder="State"
                  value={statedata}
                  onChange={(e) => setStatedata(e.target.value)}
                ></input>
                <AiOutlineMinus
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setstate(false);
                    setStatedata("");
                  }}
                />
              </div>
            </div>

            <select
              className="add_seg_name_drop"
              value={add}
              onChange={(e) => setAdd(e.target.value)}
            >
              <option value="" selected disabled>
                Add Schema to Segment{" "}
              </option>
              <option hidden={fname} value="first_name">
                First Name{" "}
              </option>
              <option hidden={lname} value="last_name">
                Last Name{" "}
              </option>
              <option hidden={gender} value="gender">
                Gender
              </option>
              <option hidden={age} value="age">
                Age
              </option>
              <option hidden={aname} value="account_name">
                Account Name{" "}
              </option>
              <option hidden={city} value="city">
                City
              </option>
              <option hidden={state} value="state">
                State{" "}
              </option>
            </select>

            <div style={{ marginTop: "20px" }}>
              <NavLink style={{ color: "#19a8a4" }} onClick={AddInput}>
                + Add New Schema
              </NavLink>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={OnSubmit} className="save_btn">
            Save Segment
          </Button>
          <Button className="cancel_btn" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={ModalAlerShow}
        className="alert-popup-message"
        onHide={() => setModalAlerShow(false)}
      >
        <div>
          <BsCheckCircle style={{ marginRight: "20px" }} />
          {ModalMsg}
        </div>
      </Modal>
    </>
  );
};

export default AddSegment;
