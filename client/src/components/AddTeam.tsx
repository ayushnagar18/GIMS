import React, { Fragment, useState, useContext } from "react";
import { Usercontext } from "../utils/Context";
import axios from "axios";
import "../styles/AdminForms.css";

const AddTeam = () => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [industryexperience, setIndexp] = useState("");
  const [researchexperience, setResearchExp] = useState("");
  const [designskills, setDesign] = useState("");
  const [pm, setPM] = useState("");
  const [creativity, setCreativity] = useState("");
  const [ps, setPS] = useState("");
  const [indknow, setIndKnow] = useState("");
  const [manufact, setManu] = useState("");
  const [selfmotive, setMotive] = useState("");
  const [stamina, setSta] = useState("");
  const [reflex, setReflex] = useState("");
  const [intell, setIntell] = useState("");
  const [hf, setHF] = useState("");
  const [sarcasam, setSarcasm] = useState("");
  const [speed, setSpeed] = useState("");
  const [image, setImg] = useState("");
  const [heroimg, setHeroImg] = useState("");
  const [email, setEmail] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [number, setNumber] = useState("");
  const [serialno,setSerial] = useState(0);
  const { auth } = useContext(Usercontext);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // var axios = require("axios");
    var FormData = require("form-data");
    var data = new FormData();
    data.append("name", name);
    data.append("role", role);
    data.append("uploadedImages", image);
    data.append("uploadedImages", heroimg);
    data.append("industryexperience", industryexperience);
    data.append("researchexperience", researchexperience);
    data.append("designskills", designskills);
    data.append("projectmanagement", pm);
    data.append("creativity", creativity);
    data.append("programmingskills", ps);
    data.append("industryknowledge", indknow);
    data.append("manufacturing", manufact);
    data.append("selfmotivation", selfmotive);
    data.append("stamina", stamina);
    data.append("reflex", reflex);
    data.append("intelligence", intell);
    data.append("healingfactor", hf);
    data.append("sarcasm", sarcasam);
    data.append("speed", speed);
    data.append("email", email);
    data.append("linkedin", linkedin);
    data.append("number", number);
    data.append("serialno",serialno)

    console.log(image);
    var config = {
      method: "post",
      url: process.env.REACT_APP_BACKEND_URL + "/addmember",
      data: data,
      headers: {
        "Content-Type": "multipart/form-data; ",
        authorization: auth?.token,
      },
    };

    axios(config)
      .then(function (response: any) {
        const styledAlert = document.createElement('div');
        styledAlert.textContent = "Team Member Added Successfully ...."; 
        styledAlert.style.padding = '20px'; 
        styledAlert.style.backgroundColor = 'rgba(0, 0, 0, 0)'; 
        styledAlert.style.color = '#000'; 
        styledAlert.style.border = '2px solid black';
        styledAlert.style.borderRadius = '5px';
        styledAlert.style.fontSize = '18px'; 
        styledAlert.style.position = 'fixed';
        styledAlert.style.top = '60px'; 
        styledAlert.style.right = '10px';
        document.body.appendChild(styledAlert);
        // alert("Team Member Added Successfully ....");
        setTimeout(() => {
          styledAlert.remove();
          window.location.reload();
        },2000);
      })
      .catch(function (error: any) {
        console.log(error);
      });
  };
  return (
    <Fragment>
      <form
        className="mt-3"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        method="POST"
      >
        <div className="row justify-content-center" style={{marginBottom:'1.5rem', marginTop:'3rem'}}>
          <div className="col-xl-6 col-lg-12 col-md-12 col-12">
            <label htmlFor="exampleInputEmail1" className="form-label-admin">
              Name
            </label>
            <input
              type="text"
              className="form-control-admin"

              id="exampleInputEmail1"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="col-xl-6 col-lg-12 col-md-12 col-12">
            <label htmlFor="exampleInputPassword1" className="form-label-admin">
              Role
            </label>
            <input
              type="text"
              className="form-control-admin"
              id="exampleInputPassword1"
              value={role}
              onChange={(e) => {
                setRole(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="row">
          <div className=" col-12" style={{textAlign:'center'}}>
            <label htmlFor="exampleInputEmail1" className="form-label-admin">
              <h5 className="my-2" style={{ fontSize:'23px'}}>Industry Skills</h5>
            </label>
          </div>
        </div>
        <div className="row justify-content-center" style={{marginBottom:'1.5rem'}}>
          <div className="col-xl-4 col-lg-12 col-md-12 col-12 my-2">
            <label htmlFor="exampleInputEmail1" className="form-label-admin">
              Industry Experience
            </label>
            <input
              type="number"
              className="form-control-admin"
              id="industryexperience"
              value={industryexperience}
              onChange={(e) => {
                setIndexp(e.target.value);
              }}
            />
          </div>
          <div className="col-xl-4 col-lg-12 col-md-12 col-12 my-2">
            <label htmlFor="exampleInputEmail1" className="form-label-admin">
              Research Experience
            </label>
            <input
              type="number"
              className="form-control-admin"
              id="researchexperience"
              value={researchexperience}
              onChange={(e) => {
                setResearchExp(e.target.value);
              }}
            />
          </div>
          <div className="col-xl-4 col-lg-12 col-md-12 col-12 my-2">
            <label htmlFor="exampleInputEmail1" className="form-label-admin">
              Design Skills
            </label>
            <input
              type="number"
              className="form-control-admin"
              id="Design"
              value={designskills}
              onChange={(e) => {
                setDesign(e.target.value);
              }}
            />
          </div>
          <div className="col-xl-4 col-lg-12 col-md-12 col-12 my-2">
            <label htmlFor="exampleInputEmail1" className="form-label-admin">
              Project Management
            </label>
            <input
              type="number"
              className="form-control-admin"
              id="PM"
              value={pm}
              onChange={(e) => {
                setPM(e.target.value);
              }}
            />
          </div>
          <div className="col-xl-4 col-lg-12 col-md-12 col-12 my-2">
            <label htmlFor="exampleInputEmail1" className="form-label-admin">
              Creativity
            </label>
            <input
              type="number"
              className="form-control-admin"
              id="Creativity"
              value={creativity}
              onChange={(e) => {
                setCreativity(e.target.value);
              }}
            />
          </div>
          <div className="col-xl-4 col-lg-12 col-md-12 col-12 my-2">
            <label htmlFor="exampleInputEmail1" className="form-label-admin">
              Programming Skills
            </label>
            <input
              type="number"
              className="form-control-admin"
              id="PS"
              value={ps}
              onChange={(e) => {
                setPS(e.target.value);
              }}
            />
          </div>
          <div className="col-xl-4 col-lg-12 col-md-12 col-12 my-2">
            <label htmlFor="exampleInputEmail1" className="form-label-admin">
              Industry Knowledge
            </label>
            <input
              type="number"
              className="form-control-admin"
              id="IndKnow"
              value={indknow}
              onChange={(e) => {
                setIndKnow(e.target.value);
              }}
            />
          </div>
          <div className="col-xl-4 col-lg-12 col-md-12 col-12 my-2">
            <label htmlFor="exampleInputEmail1" className="form-label-admin">
              Manufacturing
            </label>
            <input
              type="number"
              className="form-control-admin"
              id="Manufact"
              value={manufact}
              onChange={(e) => {
                setManu(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="row">
          <div className=" col-12" style={{textAlign:'center'}}>
            <label htmlFor="exampleInputEmail1" className="form-label-admin">
              <h5 className="my-2" style={{fontSize:'23px'}}>Superpowers</h5>
            </label>
          </div>
        </div>
        <div className="row justify-content-center" style={{marginBottom:'1.5rem'}}>
          <div className="col-xl-4 col-lg-12 col-md-12 col-12 my-2">
            <label htmlFor="exampleInputEmail1" className="form-label-admin">
              Self Motivation
            </label>
            <input
              type="number"
              className="form-control-admin"
              id="selfmotive"
              value={selfmotive}
              onChange={(e) => {
                setMotive(e.target.value);
              }}
            />
          </div>
          <div className="col-xl-4 col-lg-12 col-md-12 col-12 my-2">
            <label htmlFor="exampleInputEmail1" className="form-label-admin">
              Stamina
            </label>
            <input
              type="number"
              className="form-control-admin"
              id="stamina"
              value={stamina}
              onChange={(e) => {
                setSta(e.target.value);
              }}
            />
          </div>
          <div className="col-xl-4 col-lg-12 col-md-12 col-12 my-2">
            <label htmlFor="exampleInputEmail1" className="form-label-admin">
              Reflex
            </label>
            <input
              type="number"
              className="form-control-admin"
              id="Reflex"
              value={reflex}
              onChange={(e) => {
                setReflex(e.target.value);
              }}
            />
          </div>
          <div className="col-xl-4 col-lg-12 col-md-12 col-12 my-2">
            <label htmlFor="exampleInputEmail1" className="form-label-admin">
              Intelligence
            </label>
            <input
              type="number"
              className="form-control-admin"
              id="Intelli"
              value={intell}
              onChange={(e) => {
                setIntell(e.target.value);
              }}
            />
          </div>
          <div className="col-xl-4 col-lg-12 col-md-12 col-12 my-2">
            <label htmlFor="exampleInputEmail1" className="form-label-admin">
              Healing Factor
            </label>
            <input
              type="number"
              className="form-control-admin"
              id="HF"
              value={hf}
              onChange={(e) => {
                setHF(e.target.value);
              }}
            />
          </div>
          <div className="col-xl-4 col-lg-12 col-md-12 col-12 my-2">
            <label htmlFor="exampleInputEmail1" className="form-label-admin">
              Sarcasam
            </label>
            <input
              type="number"
              className="form-control-admin"
              id="sarcasam"
              value={sarcasam}
              onChange={(e) => {
                setSarcasm(e.target.value);
              }}
            />
          </div>
          <div className="col-xl-4 col-lg-12 col-md-12 col-12 my-2">
            <label htmlFor="exampleInputEmail1" className="form-label-admin">
              Speed
            </label>
            <input
              type="number"
              className="form-control-admin"
              id="speed"
              value={speed}
              onChange={(e) => {
                setSpeed(e.target.value);
              }}
            />
          </div>
          <div className="col-xl-4 col-lg-12 col-md-12 col-12 my-2">
            <label htmlFor="exampleInputEmail1" className="form-label-admin">
              Email
            </label>
            <input
              type="email"
              className="form-control-admin"
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="col-xl-4 col-lg-12 col-md-12 col-12 my-2">
            <label htmlFor="exampleInputEmail1" className="form-label-admin">
              Linkedin profile
            </label>
            <input
              type="text"
              className="form-control-admin"
              id="linkedin"
              value={linkedin}
              onChange={(e) => {
                setLinkedin(e.target.value);
              }}
            />
          </div>
          <div className="col-xl-4 col-lg-12 col-md-12 col-12 my-2">
            <label htmlFor="exampleInputEmail1" className="form-label-admin">
              Number
            </label>
            <input
              type="text"
              className="form-control-admin"
              id="number"
              value={number}
              onChange={(e) => {
                setNumber(e.target.value);
              }}
            />
          </div>
          <div className="col-xl-6 col-lg-12 col-md-12 col-12 my-2">
            <label htmlFor="exampleInputPassword1" className="form-label-admin">
              Serial No
            </label>
            <input
              type="number"
              className="form-control-admin"
              id="exampleInputPassword1"
              value={serialno}
              onChange={(e) => {
                setSerial(parseInt(e.target.value));
              }}
            />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-4 col-lg-12 col-md-12 col-12 my-2">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Image
            </label>
            <input
              type="file"
              accept="image/*"
              className="form-control-admin"
              name="uploadedImages"
              onChange={(e: any) => {
                setImg(e.target.files[0]);
              }}
              required
            />
          </div>
          <div className="col-xl-4 col-lg-12 col-md-12 col-12 my-2">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Hero Image
            </label>
            <input
              type="file"
              accept="image/*"
              className="form-control-admin"
              name="uploadedImages"
              onChange={(e: any) => {
                setHeroImg(e.target.files[0]);
              }}
              required
            />
          </div>
        </div>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'20px'}}>
          <button type="submit" className="btn btn-primary" style={{width:'150px',borderRadius:'3rem',backgroundColor:'#ff7321',border:'none'}}
           >
            Submit
          </button>

        </div>
      </form>
    </Fragment>
  );
};

export default AddTeam;
