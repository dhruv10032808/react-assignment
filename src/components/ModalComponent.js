import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const ModalComponent = ({
  show,
  onClose,
  title,
  content,
  onSave,
  isActionModal,
}) => {
  const [editedAction, setEditedAction] = useState({});

  useEffect(() => {
    if (content) {
      setEditedAction(content);
    }
  }, [content]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedAction((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSave = () => {
    onSave(editedAction);
    onClose();
  };

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {content ? (
          isActionModal ? (
            <Form>
              <Form.Group controlId="status">
                <Form.Label>Status</Form.Label>
                <Form.Control
                  type="text"
                  name="status"
                  value={editedAction?.status || ""}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group controlId="date">
                <Form.Label>Due Date</Form.Label>
                <Form.Control
                  type="date"
                  name="date"
                  value={editedAction?.date || ""}
                  onChange={handleChange}
                />
              </Form.Group>
            </Form>
          ) : (
            <div>
              <p>
                <strong>Patient Name:</strong> {content.patientName}
              </p>
              <p>
                <strong>Contact:</strong> {content.contact}
              </p>
              <p>
                <strong>Parent:</strong> {content.parent}
              </p>
              <p>
                <strong>Immediate Actions:</strong>
              </p>
              {content.immediateActions.map((action, index) => (
                <div key={index}>
                  {action.action} - {action.status} - {action.date}
                </div>
              ))}
            </div>
          )
        ) : (
          "No details available"
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        {isActionModal && (
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
};

export default ModalComponent;
