import React from "react";
import Moment from "react-moment";
import "./style.css";

function Table({ users }) {
  return (
    <table className="datatable">
      <thead>
        <tr>
          <th scope="col">Images</th>
          <th scope="col">
            <button className="nameBtn" onClick={props.sortEmployeeCallback}>
              Name
            </button>
          </th>
          <th scope="col">Phone</th>
          <th scope="col">Email</th>
          <th scope="col">DOB</th>
        </tr>
      </thead>
      <tbody>
        {props.employees &&
          props.employees.length &&
          props.employees.map((employee, i) => (
            <Employee key={`employee-${i}`} employee={employee} />
          ))}
      </tbody>
    </table>
  );
}

const Employee = ({ employee }) => {
  return (
    <tr>
      <th scope="row">
        <img
          src={employee.picture.large}
          alt={`${employee.name.first} ${employee.name.last}`}
        ></img>
      </th>
      <td>{`${employee.name.first} ${employee.name.last}`}</td>
      <td className="text-justify">{employee.phone}</td>
      <td>
        <a href="mailto: johnsmith@gmail.com">{employee.email}</a>
      </td>
      <td>
        <Moment format="MMM Do, YYYY" withTitle>
          {employee.dob.date}
        </Moment>
      </td>
    </tr>
  );
};

export default Table;
