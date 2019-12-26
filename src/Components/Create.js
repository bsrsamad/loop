import React from "react";
import cre from "../img/create-section1.jpg";
import { NavLink } from "react-router-dom";

const Create = () => {
  return (
    <div>
      <section id="Create-section" className="bg-primary">
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <div className="py-5">
                <h1 className="display-4">create</h1>
                <p className="lead">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Vitae cum corporis, voluptatum dolore nemo repudiandae ut esse
                  placeat modi, nihil ex sit sed architecto vel aspernatur
                  aliquid, maxime voluptas ipsa.
                </p>
                <NavLink to="" className="btn btn-outline-light">
                  Find out nore
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="Create-section" className=" py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h3>Create</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro
                tenetur amet perferendis facere blanditiis cum veritatis dolorem
                laboriosam natus nisi et iure voluptate, modi est?
              </p>
              <div className="d-flex flex-row">
                <div className="p-4 align-self-start">
                  <i className="fa fa-check text-primary"></i>
                </div>
                <div className="p-4 aligh-self-end">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laboriosam facere aperiam ut labore quidem. Maxime vitae,
                  assumenda eos earum saepe, doloribus vero, rem et optio
                  eveniet officia consequatur aspernatur.
                </div>
              </div>
              <div className="d-flex flex-row">
                <div className="p-4 align-self-start">
                  <i className="fa fa-check text-primary"></i>
                </div>
                <div className="p-4 aligh-self-end">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laboriosam facere aperiam ut labore quidem. Maxime vitae,
                  assumenda eos earum saepe, doloribus vero, rem et optio
                  eveniet officia consequatur aspernatur.
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <img src={cre} alt="" className="img-fluid mb-3 rounded-circle" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Create;
