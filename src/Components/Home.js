import React from "react";

const Homesection = () => {
  return (
    <header id="home-section">
      <div className="dark-overlay">
        <div className="home-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 d-none d-lg-block">
                <h1 className="display-4">
                  Build a<strong> social profile</strong> and gain{" "}
                  <strong> revenue</strong> and profits
                </h1>
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
              <div className="col-lg-4">
                <div className="card bg-primary text-center card-form">
                  <div className="card-body">
                    <h3>Sign up today</h3>
                    <p>Please fill out this form to register</p>
                    <form>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          placeholder="Username"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control form-control-lg"
                          placeholder="Email"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="password"
                          className="form-control form-control-lg"
                          placeholder="Password"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="password"
                          className="form-control form-control-lg"
                          placeholder="confirm password"
                        />
                      </div>
                      <input
                        type="submit"
                        className="btn btn-outline-light btn-block"
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Homesection;
