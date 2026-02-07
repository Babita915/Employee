import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "./Employee-details";
import Form from "./Employee-form";
import List from "./Employee-list";
import Header from "../Header";

export default function Router({
  employees,
  addEmployee,
  deleteEmployee,
  editEmployee
}) {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route
          path="/list"
          element={
            <List
              employees={employees}
              deleteEmployee={deleteEmployee}
            />
          }
        />

        <Route
          path="/form"
          element={
            <Form
              addEmployee={addEmployee}
              employees={employees}
              isEdit={false}
            />
          }
        />

        <Route
          path="/edit/:id"
          element={
            <Form
              employees={employees}
              editEmployee={editEmployee}
              isEdit={true}
            />
          }
        />

        <Route
          path="/list/:id"
          element={<Detail employees={employees} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
