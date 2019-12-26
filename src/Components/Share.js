import React from "react";
import sha from "../img/share-section1.jpg";
import { NavLink } from "react-router-dom";

const Share = () => {
  return (
    <div>
      {/* <!--Share section--> */}
      <section id="Share-section" className="bg-primary">
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <div className="py-5">
                <h1 className="display-4">Share</h1>
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

      <section id="Share-section" className=" py-5 bg-light text-muted">
        <div className=" container">
          <div className="row">
            <div className="col-md-6">
              <img src={sha} alt="" className="img-fluid mb-3 rounded-circle" />
            </div>
            <div className="col-md-6">
              <h3>Share</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro
                tenetur amet perferendis facere blanditiis cum veritatis dolorem
                laboriosam natus nisi et iure voluptate, modi est?
              </p>
              <div className="d-flex flex-row">
                <div className="p-4 align-self-start">
                  <i className="fa fa-check bg-dark text-primary"></i>
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
                  <i className="fa fa-check bg-dark text-primary"></i>
                </div>
                <div className="p-4 aligh-self-end">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laboriosam facere aperiam ut labore quidem. Maxime vitae,
                  assumenda eos earum saepe, doloribus vero, rem et optio
                  eveniet officia consequatur aspernatur.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer id="main-footer" className="bg-dark">
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <div className="py-4">
                <h1 className="he">Bsrsamad</h1>
                <p>Copyright &copy; 2019 </p>
                <button
                  className="btn btn-primary"
                  data-toggle="modal"
                  data-target="#contactModal"
                >
                  Contact us
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Share;
