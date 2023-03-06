import React, { useState } from "react";
import axios from "axios";
import { Modal, Button, Container } from "react-bootstrap";

const PopupModal = (props) => {
  const [employee, setEmployee] = useState({});

  const addEmployee = async (employee) => {
    const response = await axios.post(
      `http://localhost:5000/employees`,
      employee
    );
    if (response.status === 201) {
      alert("Added Employee");
    } else {
      alert("Could not add Employee");
    }
  };

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
              <div className="form-group mb-3">
                <label className="text-primary" htmlFor="fullName">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="fullName"
                  placeholder="Full Name"
                  required
                  onChange={(e) =>
                    setEmployee({ ...employee, fullName: e.target.value })
                  }
                />
              </div>
              <div className="form-group mb-3">
                <div className="row">
                  <div className="col">
                    <label className="text-primary" htmlFor="nameWithInitials">
                      Name with Initials
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="nameWithInitials"
                      placeholder="Name with Initials"
                      required
                      onChange={(e) =>
                        setEmployee({
                          ...employee,
                          nameWithInitials: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="col">
                    <label className="text-primary" htmlFor="displayName">
                      Prefered / Display Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="displayName"
                      placeholder="Display Name"
                      onChange={(e) =>
                        setEmployee({
                          ...employee,
                          displayName: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="form-group mb-3">
                <div className="row">
                  <div className="col">
                    <label className="text-primary" htmlFor="gender">
                      Gender
                    </label>
                    <select
                      className="form-control form-select"
                      id="gender"
                      onChange={(e) =>
                        setEmployee({ ...employee, gender: e.target.value })
                      }
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                  <div className="col">
                    <label className="text-primary" htmlFor="dateOfBirth">
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="dateOfBirth"
                      placeholder="Date of Birth"
                      onChange={(e) =>
                        setEmployee({
                          ...employee,
                          dateOfBirth: new Date(e.target.value).toISOString(),
                        })
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="form-group mb-3">
                <div className="row">
                  <div className="col">
                    <label className="text-primary" htmlFor="email">
                      Email
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="email"
                      placeholder="Email"
                      onChange={(e) =>
                        setEmployee({ ...employee, email: e.target.value })
                      }
                    />
                  </div>
                  <div className="col">
                    <label className="text-primary" htmlFor="mobile">
                      Mobile Number
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="mobile"
                      placeholder="Mobile"
                      onChange={(e) =>
                        setEmployee({ ...employee, mobile: e.target.value })
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="form-group mb-3">
                <div className="row">
                  <div className="col">
                    <label className="text-primary" htmlFor="designation">
                      Designation
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="designation"
                      placeholder="Designation"
                      onChange={(e) =>
                        setEmployee({
                          ...employee,
                          designation: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="col">
                    <label className="text-primary" htmlFor="employeeType">
                      Employee Type
                    </label>
                    <select
                      className="form-control form-select"
                      id="employeeType"
                      onChange={(e) =>
                        setEmployee({
                          ...employee,
                          employeeType: e.target.value,
                        })
                      }
                    >
                      <option value="Full Time">Full Time</option>
                      <option value="Part Time">Part Time</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="form-group mb-3">
                <div className="row">
                  <div className="col">
                    <label className="text-primary" htmlFor="joinedDate">
                      Joined Date
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="joinedDate"
                      placeholder="Joined Date"
                      onChange={(e) =>
                        setEmployee({
                          ...employee,
                          joinedDate: new Date(e.target.value).toISOString(),
                        })
                      }
                    />
                  </div>
                  <div className="col">
                    <label className="text-primary" htmlFor="experience">
                      Experience
                    </label>
                    <select
                      className="form-control form-select"
                      id="experience"
                      onChange={(e) =>
                        setEmployee({
                          ...employee,
                          experience: parseInt(e.target.value),
                        })
                      }
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
              <div className="form-group mb-3">
                <div className="row">
                  <div className="col-6">
                    <label className="text-primary" htmlFor="salary">
                      Salary
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="salary"
                      placeholder="Salary"
                      onChange={(e) =>
                        setEmployee({
                          ...employee,
                          salary: parseFloat(e.target.value),
                        })
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="form-group mb-3">
                <div className="row">
                  <div className="col">
                    <label className="text-primary" htmlFor="personalNotes">
                      Personal Notes
                    </label>
                    <textarea
                      type="text"
                      className="form-control"
                      id="personalNotes"
                      placeholder="Personal Notes"
                      onChange={(e) =>
                        setEmployee({
                          ...employee,
                          personalNotes: e.target.value,
                        })
                      }
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
              addEmployee(employee);
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
