import React, { Fragment, useState, useContext, useEffect } from "react";
import { Usercontext } from "../utils/Context";
import { useNavigate, useParams } from "react-router-dom";
import { details } from "../utils";
import axios from "axios";

const EditTeam = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { auth } = useContext(Usercontext);
  const [name, setName] = useState<any>("");
  const [role, setRole] = useState<any>("");
  const [industryexperience, setIndexp] = useState<any>(0);
  const [researchexperience, setResearchExp] = useState<any>(0);
  const [designskills, setDesign] = useState<any>(0);
  const [pm, setPM] = useState<any>(0);
  const [creativity, setCreativity] = useState<any>(0);
  const [ps, setPS] = useState<any>(0);
  const [indknow, setIndKnow] = useState<any>(0);
  const [manufact, setManu] = useState<any>(0);
  const [selfmotive, setMotive] = useState<any>(0);
  const [stamina, setSta] = useState<any>(0);
  const [reflex, setReflex] = useState<any>(0);
  const [intell, setIntell] = useState<any>(0);
  const [hf, setHF] = useState<any>(0);
  const [sarcasam, setSarcasm] = useState<any>(0);
  const [speed, setSpeed] = useState<any>(0);
  const [image, setImg] = useState<any>("");
  const [heroimg, setHeroImg] = useState<any>("");
  const [email, setEmail] = useState<any>("");
  const [linkedin, setLinkedin] = useState<any>("");
  const [number, setNumber] = useState<any>("");
  const [serialno, setSerial] = useState<any>("");
  useEffect(() => {
    // var axios = require("axios");

    var config = {
      method: "get",
      url: `${process.env.REACT_APP_BACKEND_URL}/teammember/${id}`,
      headers: {
        authorization: auth?.token,
      },
    };

    axios(config)
      .then(function (response: any) {
        let data: details = response.data;
        if (data) {
          setName(data.name);
          setRole(data.role);
          setIndexp(data.industryexperience);
          setResearchExp(data.researchexperience);
          setDesign(data.designskills);
          setPM(data.projectmanagement);
          setCreativity(data.creativity);
          setPS(data.programmingskills);
          setIndKnow(data.industryknowledge);
          setMotive(data.selfmotivation);
          setManu(data.manufacturing);
          setSta(data.stamina);
          setReflex(data.reflex);
          setIntell(data.intelligence);
          setHF(data.healingfactor);
          setSarcasm(data.sarcasm);
          setSpeed(data.speed);
          setEmail(data.email);
          setLinkedin(data.linkedin);
          setNumber(data.number);
          setSerial(data.serialno);
        }
      })
      .catch(function (error: any) {
        console.log(error);
      });
  }, []);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // var axios = require("axios");
    var qs = require("qs");
    var data = qs.stringify({
      id,
      name: name,
      role: role,
      industryexperience: industryexperience,
      researchexperience: researchexperience,
      designskills: designskills,
      projectmanagement: pm,
      creativity: creativity,
      programmingskills: ps,
      industryknowledge: indknow,
      manufacturing: manufact,
      selfmotivation: selfmotive,
      stamina: stamina,
      reflex: reflex,
      intelligence: intell,
      healingfactor: hf,
      sarcasm: sarcasam,
      speed: speed,
      email: email,
      linkedin: linkedin,
      number: number,
      serialno: serialno,
    });

    var config = {
      method: "put",
      url: process.env.REACT_APP_BACKEND_URL + "/member",
      data: data,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        authorization: auth?.token,
      },
    };

    axios(config)
      .then(function (response: any) {
        alert("Team Member Updated");
        navigate("/admin");
      })
      .catch(function (error: any) {
        console.log(error);
      });
  };
  return (
    <Fragment>
      <div className="container">
        <h2 className="txt m-3 text-center">Edit Team Member</h2>
        <form
          className="mt-3"
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          method="POST"
        >
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-12 col-md-12 col-12">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control-requirement"
                id="exampleInputEmail1"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className="col-xl-6 col-lg-12 col-md-12 col-12">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Role
              </label>
              <input
                type="text"
                className="form-control-requirement"
                id="exampleInputPassword1"
                value={role}
                onChange={(e) => {
                  setRole(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6 col-lg-12 col-md-12 col-12">
              <label htmlFor="exampleInputEmail1" className="form-label-admin">
                <h5 className="my-2">Industry Skills</h5>
              </label>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-4 col-lg-12 col-md-12 col-12 my-2">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Industry Experience
              </label>
              <input
                type="number"
                className="form-control-requirement"
                id="industryexperience"
                value={industryexperience}
                onChange={(e) => {
                  setIndexp(e.target.value);
                }}
              />
            </div>
            <div className="col-xl-4 col-lg-12 col-md-12 col-12 my-2">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Research Experience
              </label>
              <input
                type="number"
                className="form-control-requirement"
                id="researchexperience"
                value={researchexperience}
                onChange={(e) => {
                  setResearchExp(e.target.value);
                }}
              />
            </div>
            <div className="col-xl-4 col-lg-12 col-md-12 col-12 my-2">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Design Skills
              </label>
              <input
                type="number"
                className="form-control-requirement"
                id="Design"
                value={designskills}
                onChange={(e) => {
                  setDesign(e.target.value);
                }}
              />
            </div>
            <div className="col-xl-4 col-lg-12 col-md-12 col-12 my-2">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Project Management
              </label>
              <input
                type="number"
                className="form-control-requirement"
                id="PM"
                value={pm}
                onChange={(e) => {
                  setPM(e.target.value);
                }}
              />
            </div>
            <div className="col-xl-4 col-lg-12 col-md-12 col-12 my-2">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Creativity
              </label>
              <input
                type="number"
                className="form-control-requirement"
                id="Creativity"
                value={creativity}
                onChange={(e) => {
                  setCreativity(e.target.value);
                }}
              />
            </div>
            <div className="col-xl-4 col-lg-12 col-md-12 col-12 my-2">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Programming Skills
              </label>
              <input
                type="number"
                className="form-control-requirement"
                id="PS"
                value={ps}
                onChange={(e) => {
                  setPS(e.target.value);
                }}
              />
            </div>
            <div className="col-xl-4 col-lg-12 col-md-12 col-12 my-2">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Industry Knowledge
              </label>
              <input
                type="number"
                className="form-control-requirement"
                id="IndKnow"
                value={indknow}
                onChange={(e) => {
                  setIndKnow(e.target.value);
                }}
              />
            </div>
            <div className="col-xl-4 col-lg-12 col-md-12 col-12 my-2">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Manufacturing
              </label>
              <input
                type="number"
                className="form-control-requirement"
                id="Manufact"
                value={manufact}
                onChange={(e) => {
                  setManu(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6 col-lg-12 col-md-12 col-12">
              <label htmlFor="exampleInputEmail1" className="form-label-admin">
                <h5 className="my-2">Superpowers</h5>
              </label>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-4 col-lg-12 col-md-12 col-12 my-2">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Self Motivation
              </label>
              <input
                type="number"
                className="form-control-requirement"
                id="selfmotive"
                value={selfmotive}
                onChange={(e) => {
                  setMotive(e.target.value);
                }}
              />
            </div>
            <div className="col-xl-4 col-lg-12 col-md-12 col-12 my-2">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Stamina
              </label>
              <input
                type="number"
                className="form-control-requirement"
                id="stamina"
                value={stamina}
                onChange={(e) => {
                  setSta(e.target.value);
                }}
              />
            </div>
            <div className="col-xl-4 col-lg-12 col-md-12 col-12 my-2">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Reflex
              </label>
              <input
                type="number"
                className="form-control-requirement"
                id="Reflex"
                value={reflex}
                onChange={(e) => {
                  setReflex(e.target.value);
                }}
              />
            </div>
            <div className="col-xl-4 col-lg-12 col-md-12 col-12 my-2">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Intelligence
              </label>
              <input
                type="number"
                className="form-control-requirement"
                id="Intelli"
                value={intell}
                onChange={(e) => {
                  setIntell(e.target.value);
                }}
              />
            </div>
            <div className="col-xl-4 col-lg-12 col-md-12 col-12 my-2">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Healing Factor
              </label>
              <input
                type="number"
                className="form-control-requirement"
                id="HF"
                value={hf}
                onChange={(e) => {
                  setHF(e.target.value);
                }}
              />
            </div>
            <div className="col-xl-4 col-lg-12 col-md-12 col-12 my-2">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Sarcasam
              </label>
              <input
                type="number"
                className="form-control-requirement"
                id="sarcasam"
                value={sarcasam}
                onChange={(e) => {
                  setSarcasm(e.target.value);
                }}
              />
            </div>
            <div className="col-xl-4 col-lg-12 col-md-12 col-12 my-2">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Speed
              </label>
              <input
                type="number"
                className="form-control-requirement"
                id="speed"
                value={speed}
                onChange={(e) => {
                  setSpeed(e.target.value);
                }}
              />
            </div>
            <div className="col-xl-4 col-lg-12 col-md-12 col-12 my-2">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control-requirement"
                id="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="col-xl-4 col-lg-12 col-md-12 col-12 my-2">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Linkedin profile
              </label>
              <input
                type="text"
                className="form-control-requirement"
                id="linkedin"
                value={linkedin}
                onChange={(e) => {
                  setLinkedin(e.target.value);
                }}
              />
            </div>
            <div className="col-xl-4 col-lg-12 col-md-12 col-12 my-2">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Number
              </label>
              <input
                type="text"
                className="form-control-requirement"
                id="number"
                value={number}
                onChange={(e) => {
                  setNumber(e.target.value);
                }}
              />
            </div>
            <div className="col-xl-6 col-lg-12 col-md-12 col-12">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Serial No
              </label>
              <input
                type="number"
                className="form-control-requirement"
                id="exampleInputPassword1"
                value={serialno}
                onChange={(e) => {
                  setSerial(e.target.value);
                }}
              />
            </div>
          </div>
          
          <div style={{display:'flex',justifyContent:'center'}}>
            <button type="submit" className="btn btn-success mt-4 mb-3" style={{width:'150px'}}>
              Update
            </button>

          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default EditTeam;
