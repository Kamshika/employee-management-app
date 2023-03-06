import React, { useState, useEffect } from "react";
import axios from "axios";
import PopupModal from "./PopupModal";

const Main = () => {
  const [modalShow, setModalShow] = useState(false);
  const [modalType, setModalType] = useState("ADD");
  const [employees, setEmployees] = useState([]);
  const [employee, setEmployee] = useState({});

  useEffect(() => {
    getEmployees();
  }, []);

  const getEmployees = async () => {
    const { data } = await axios.get(`http://localhost:5000/employees`);
    setEmployees(data.data);
  };

  const getEmployeesByField = async (field, value) => {
    const { data } = await axios.get(
      `http://localhost:5000/employees?field=${field}&value=${value}`
    );
    setEmployees(data.data);
  };

  const deleteEmployee = async (id) => {
    const response = await axios.delete(
      `http://localhost:5000/employees/${id}`
    );
    if (response.status === 200) {
      alert("Deleted Employee");
    } else {
      alert("Could not delete Employee");
    }
    getEmployees();
  };

  return (
    <main>
      <div className="container p-5">
        <h5>People</h5>
        <hr />
        <div className="d-flex align-items-end w-25 float-end">
          <select
            className="form-control form-select w-100 mx-3"
            id="selectEmployeeType"
            onChange={(e) => {
              e.target.value === "All"
                ? getEmployees()
                : getEmployeesByField("employeeType", e.target.value);
            }}
          >
            <option value="All">All</option>
            <option value="Full Time">Full Time</option>
            <option value="Part Time">Part Time</option>
            <option value="Contract Basis">Contract Basis</option>
            <option value="Other">Other</option>
          </select>
          <button
            type="button"
            className="btn btn-primary btn-sm w-100"
            onClick={() => setModalShow(true)}
          >
            Add People
          </button>
        </div>
        <PopupModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          type={modalType}
          employee={employee}
          size="lg"
        />
        <div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Display Name</th>
                <th scope="col">Emp ID</th>
                <th scope="col">Designation</th>
                <th scope="col">Emp Type</th>
                <th scope="col">Experience</th>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {employees.map((e) => (
                <tr key={e.id}>
                  <td>{e.displayName}</td>
                  <td>{e.id}</td>
                  <td>{e.designation}</td>
                  <td>{e.employeeType}</td>
                  <td>0{e.experience} Years</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-outline-primary btn-sm px-3"
                      onClick={() => {
                        setModalType("EDIT");
                        setEmployee(e);
                        setModalShow(true);
                      }}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-outline-danger btn-sm"
                      onClick={() => {
                        deleteEmployee(e.id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default Main;
