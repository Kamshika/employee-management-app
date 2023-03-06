import React from "react";
import { Modal, Button, Container } from "react-bootstrap";

const PopupModal = (props) => {
  return (
    <>
      <Modal {...props}>
        <Modal.Header closeButton>
          <Modal.Title>
            {props.type === "ADD" ? "Add People" : "Edit People"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <form>
              <div class="form-group mb-3">
                <label className="text-primary" for="fullName">
                  Full Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="fullName"
                  placeholder="Full Name"
                  required
                />
              </div>
              <div class="form-group mb-3">
                <div class="row">
                  <div class="col">
                    <label className="text-primary" for="nameWithInitials">
                      Name with Initials
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="nameWithInitials"
                      placeholder="Name with Initials"
                      required
                    />
                  </div>
                  <div class="col">
                    <label className="text-primary" for="displayName">
                      Prefered / Display Name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="displayName"
                      placeholder="Display Name"
                    />
                  </div>
                </div>
              </div>
              <div class="form-group mb-3">
                <div class="row">
                  <div class="col">
                    <label className="text-primary" for="gender">
                      Gender
                    </label>
                    <select className="form-control form-select" id="gender">
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                  <div class="col">
                    <label className="text-primary" for="dateOfBirth">
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      class="form-control"
                      id="dateOfBirth"
                      placeholder="Date of Birth"
                    />
                  </div>
                </div>
              </div>
              <div class="form-group mb-3">
                <div class="row">
                  <div class="col">
                    <label className="text-primary" for="email">
                      Email
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                  <div class="col">
                    <label className="text-primary" for="mobile">
                      Mobile Number
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="mobile"
                      placeholder="Mobile"
                    />
                  </div>
                </div>
              </div>
              <div class="form-group mb-3">
                <div class="row">
                  <div class="col">
                    <label className="text-primary" for="designation">
                      Designation
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="designation"
                      placeholder="Designation"
                    />
                  </div>
                  <div class="col">
                    <label className="text-primary" for="empType">
                      Employee Type
                    </label>
                    <select className="form-control form-select" id="empType">
                      <option value="fulltime">Full Time</option>
                      <option value="parttime">Part Time</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="form-group mb-3">
                <div class="row">
                  <div class="col">
                    <label className="text-primary" for="joinedDate">
                      Joined Date
                    </label>
                    <input
                      type="date"
                      class="form-control"
                      id="joinedDate"
                      placeholder="Joined Date"
                    />
                  </div>
                  <div class="col">
                    <label className="text-primary" for="experience">
                      Experience
                    </label>
                    <select
                      className="form-control form-select"
                      id="experience"
                    >
                      <option value="1">01 Years</option>
                      <option value="2">02 Years</option>
                      <option value="3">03 Years</option>
                      <option value="4">04 Years</option>
                      <option value="5">05 Years</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="form-group mb-3">
                <div class="row">
                  <div class="col-6">
                    <label className="text-primary" for="salary">
                      Salary
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="salary"
                      placeholder="Salary"
                    />
                  </div>
                </div>
              </div>
              <div class="form-group mb-3">
                <div class="row">
                  <div class="col">
                    <label className="text-primary" for="personalNotes">
                      Personal Notes
                    </label>
                    <textarea
                      type="text"
                      class="form-control"
                      id="personalNotes"
                      placeholder="Personal Notes"
                    />
                  </div>
                </div>
              </div>
            </form>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              props.onHide();
            }}
          >
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              props.onHide();
            }}
          >
            Add People
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PopupModal;
