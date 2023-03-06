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

  return (
    <main>
      <div className="container p-5">
        <h5>People</h5>
        <hr />
        <button
          type="button"
          className="btn btn-primary btn-sm float-end"
          onClick={() => setModalShow(true)}
        >
          Add People
        </button>
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
