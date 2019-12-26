import React from "react";

const Footer = () => {
  return (
    <div>
      <div>
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
    </div>
  );
};

export default Footer;
