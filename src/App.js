import React, { useState } from "react";
import Router from "./Router/Router";
import { JsonFile } from "./Router/JsonFile";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const [employees, setEmployees] = useState(JsonFile());

  const addEmployee = (emp) => {
    setEmployees(prev => [
      ...prev,
      { id: prev.length + 1, ...emp }
    ]);
    toast.success("Employee added ✅");
  };

    const editEmployee = (id, updatedEmp) => {
    setEmployees(
      employees.map(emp =>
        emp.id === id ? { ...emp, ...updatedEmp } : emp
      )
    );
  toast.info("Employee updated ✏️");
  };

  const deleteEmployee = (id) => {
    setEmployees(prev => prev.filter(emp => emp.id !== id));
    toast.error("Employee deleted ❌");
  };

  return (
    <>
      <ToastContainer />
      <Router
        employees={employees}
        addEmployee={addEmployee}
          editEmployee={editEmployee}
        deleteEmployee={deleteEmployee}
      />
    </>
  );
}

export default App;
