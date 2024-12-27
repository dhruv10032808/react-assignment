import React from "react";
import { Button, Table } from "react-bootstrap";

const TableComponent = ({ data, onPatientClick, onActionClick }) => {
  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th className="table-header">Patient Name</th>
          <th className="table-header">Contact</th>
          <th className="table-header">Parent</th>
          <th className="table-header">Immediate Actions</th>
          <th className="table-header">Due Date</th>
          <th className="table-header">Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((patient) => (
          <tr key={patient.id}>
            <td>
              <button
                className="patient-link"
                onClick={() => onPatientClick(patient)}
              >
                {patient.patientName}
              </button>
            </td>
            <td>{patient.contact}</td>
            <td>{patient.parent}</td>
            <td>
              {patient.immediateActions.map((action, index) => (
                <div key={index}>
                  {action.action} {action.status}
                </div>
              ))}
            </td>
            <td>
              {patient.immediateActions.map((action, index) => (
                <div key={index}>{action.date}</div>
              ))}
            </td>
            <td>
              <div className="d-flex flex-wrap gap-2">
                {patient.immediateActions.map((action, index) => (
                  <Button
                    key={index}
                    onClick={() => onActionClick(action, patient.id)}
                  >
                    {action.action}
                  </Button>
                ))}
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TableComponent;
