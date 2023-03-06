import React from "react";

const Main = () => {
  return (
    <main>
      <div className="container p-5">
        <h5>People</h5>
        <hr />
        <button type="button" className="btn btn-primary btn-sm float-end">
          Add People
        </button>
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
              <tr>
                <td>Kamshika</td>
                <td>001</td>
                <td>Software Engineer</td>
                <td>Full Time</td>
                <td>02 Years</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-outline-primary btn-sm px-3"
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
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default Main;
