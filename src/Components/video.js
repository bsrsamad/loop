import React from "react";

const Video = () => {
  return (
    <div>
      <div class="modal fade text-dark" id="contactModal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="contactModalTitle">
                Contact us
              </h5>
              <button class="close " data-dismiss="modal">
                <span>&times;</span>{" "}
              </button>
            </div>
            <div class="modal-body">
              <htmlForm>
                <div class="htmlForm-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" class="htmlForm-control" />
                </div>
                <div class="htmlForm-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" class="htmlForm-control" />
                </div>
                <div class="htmlForm-group">
                  <label htmlFor="msg">message</label>
                  <textarea class="htmlForm-control"></textarea>
                </div>
              </htmlForm>
            </div>
            <div class="modal-footer">
              <button class="btn btn-primary btn-block">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
