import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { JsonFile } from "./JsonFile";


export default function Details() {
  const { id } = useParams();
  const navigate = useNavigate();

  const employees = JsonFile();
  const employee = employees.find(emp => emp.id === Number(id));

  if (!employee) {
    return <h3>Employee not found</h3>;
  }

  return (
    <div className="container">
      <h2>Employee Details</h2>

      <div className="card">
        <div className="card-body">
          <h3>{employee.name}</h3>
          <p><strong>Position:</strong> {employee.position}</p>
          <p><strong>Salary:</strong> {employee.salary}</p>
        </div>
      </div>

      <div className="buttons mt-3">
        <button
          className="btn btn-primary me-2"
          onClick={() => navigate("/form")}
        >
          Edit
        </button>

        <button
          className="btn btn-secondary"
          onClick={() => navigate(-1)}
        >
          Back
        </button>
      </div>
    </div>
  );
}
