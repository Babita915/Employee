import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Form({
  addEmployee,
  editEmployee,
  employees,
  isEdit
}) {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [salary, setSalary] = useState("");
  const [error, setError] = useState({});

  const navigate = useNavigate();
  const { id } = useParams();               // ✅ URL se id
  const editId = isEdit ? Number(id) : null;

  // ✅ Edit mode me data fill
  useEffect(() => {
    if (isEdit && editId && employees?.length) {
      const emp = employees.find(e => e.id === editId);
      if (emp) {
        setName(emp.name);
        setPosition(emp.position);
        setSalary(emp.salary);
      }
    }
  }, [isEdit, editId, employees]);

  const validate = () => {
    let err = {};
    if (!name.trim()) err.name = true;
    if (!position.trim()) err.position = true;
    if (!salary) err.salary = true;
    setError(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    if (isEdit) {
      editEmployee(editId, {
        name,
        position,
        salary
      });
    } else {
      addEmployee({
        name,
        position,
        salary
      });
    }

    navigate("/list");
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card p-4 shadow">
            <h3 className="text-center mb-4">
              {isEdit ? "Edit Employee" : "Add Employee"}
            </h3>

            <form onSubmit={handleSubmit}>
              <input
                className="form-control mb-2"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {error.name && <small className="text-danger">Name required</small>}

              <input
                className="form-control mt-3 mb-2"
                placeholder="Position"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
              />
              {error.position && <small className="text-danger">Position required</small>}

              <input
                type="number"
                className="form-control mt-3 mb-2"
                placeholder="Salary"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
              />
              {error.salary && <small className="text-danger">Salary required</small>}

              <button className="btn btn-success w-100 mt-4">
                {isEdit ? "Update" : "Submit"}
              </button>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
}
