import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function List({ employees, deleteEmployee }) {
  const navigate = useNavigate();

  const viewEmployee = (id) => {
    navigate(`/list/${id}`);
  };

  const editEmployee = (id) => {
    navigate(`/edit/${id}`);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure?")) {
      deleteEmployee(id);
      toast.error("Employee deleted successfully ✅");
    }
  };



  return (
    <div className="container">
      <div className="d-flex justify-content-end my-3">
        <Link to="/form">
          <button className="btn btn-success">Add Employee</button>
        </Link>
      </div>

      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Position</th>
            <th>Salary</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {employees.length > 0 ? (
            employees.map((emp) => (
              <tr key={emp.id}>
                <td>{emp.id}</td>
                <td>{emp.name}</td>
                <td>{emp.position}</td>
                <td>{emp.salary}</td>
                <td>
                  <button
                    className="btn btn-success btn-sm me-2"
                    onClick={() => viewEmployee(emp.id)}
                  >
                    View
                  </button>

                  <button
                    className="btn btn-primary btn-sm me-2"
                    onClick={() => editEmployee(emp.id)}
                  >
                    Edit
                  </button>

                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(emp.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center">
                No employees found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
