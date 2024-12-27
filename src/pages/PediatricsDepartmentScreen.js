import React, { useState } from "react";
import Header from "../components/Header";
import TableComponent from "../components/TableComponent";
import ModalComponent from "../components/ModalComponent";
import sampleData from "../data/sampleData";

const PediatricsDepartmentScreen = () => {
  const [data, setData] = useState(sampleData);
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [modalTitle, setModalTitle] = useState("");
  const [isActionModal, setIsActionModal] = useState(false);

  const handlePatientClick = (patient) => {
    setModalTitle("Patient Details");
    setModalData(patient);
    setShowModal(true);
    setIsActionModal(false);
  };

  const handleActionClick = (action, patientId) => {
    setModalTitle(action.action);
    setModalData({ ...action, patientId });
    setShowModal(true);
    setIsActionModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setModalData(null);
  };

  const handleSaveAction = (updatedAction) => {
    const updatedData = data.map((patient) => {
      if (patient.id === updatedAction.patientId) {
        const updatedActions = patient.immediateActions.map((action) =>
          action.action === updatedAction.action ? updatedAction : action
        );
        return { ...patient, immediateActions: updatedActions };
      }
      return patient;
    });
    setData(updatedData);
    setModalData(null);
    setShowModal(false);
  };

  return (
    <div className="pediatrics-screen">
      <Header title="Pediatrics Department Screen" />
      <TableComponent
        data={data}
        onPatientClick={handlePatientClick}
        onActionClick={handleActionClick}
      />
      <ModalComponent
        show={showModal}
        onClose={handleCloseModal}
        title={modalTitle}
        content={modalData}
        onSave={handleSaveAction}
        isActionModal={isActionModal}
      />
    </div>
  );
};

export default PediatricsDepartmentScreen;
