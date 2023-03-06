import React, { useState } from "react";
import axios from "axios";
import { Modal, Button, Container } from "react-bootstrap";

const PopupModal = (props) => {
  const [employee, setEmployee] = useState(props.employee);

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

  const editEmployee = async (employee) => {
    const response = await axios.put(
      `http://localhost:5000/employees/${employee.id}`,
      employee
    );
    if (response.status === 200) {
      alert("Updated Employee");
    } else {
      alert("Could not updated Employee");
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
                  value={props.employee.fullName}
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
                      value={props.employee.nameWithInitials}
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
                      value={props.employee.displayName}
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
                      value={props.employee.gender}
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
                      value={props.employee.dateOfBirth}
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
                      value={props.employee.email}
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
                      value={props.employee.mobile}
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
                      value={props.employee.designation}
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
                      value={props.employee.employeeType}
                      onChange={(e) =>
                        setEmployee({
                          ...employee,
                          employeeType: e.target.value,
                        })
                      }
                    >
                      <option value="Full Time">Full Time</option>
                      <option value="Part Time">Part Time</option>
                      <option value="Contract Basis">Contract Basis</option>
                      <option value="Other">Other</option>
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
                      value={props.employee.joinedDate}
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
                      value={props.employee.experience}
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
                      value={props.employee.salary}
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
                      value={props.employee.personalNotes}
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
              if (props.type) {
                addEmployee(employee);
              } else {
                editEmployee(employee);
              }
              props.onHide();
            }}
          >
            {props.type === "ADD" ? "Add People" : "Update People"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PopupModal;
