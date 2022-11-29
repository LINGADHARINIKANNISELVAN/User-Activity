import React, { useState, Fragment } from "react";
import data from "./Userdata.json";
import Editcard from "./Editcard";
import Readcard from "./Readcard";

import { Card, Container } from "react-bootstrap";
import { nanoid } from "nanoid";

export default function Newcard() {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    username: "",
    address: "",
    phone: "",
    email: "",
  });

  const [editFormData, setEditFormData] = useState({
    username: "",
    address: "",
    phone: "",
    email: "",
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      username: addFormData.username,
      address: addFormData.address,
      phone: addFormData.phone,
      email: addFormData.email,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      username: editFormData.username,
      address: editFormData.address,
      phone: editFormData.phone,
      email: editFormData.email,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      username: contact.username,
      address: contact.address,
      phone: contact.phone,
      email: contact.email,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

  return (
    <>
      <Container>
        <Card style={{ marginLeft: 150, width: 800, height: 1100, border: 0}}>
          <form onSubmit={handleEditFormSubmit}>
            {contacts.map((contact) => (
              <Fragment>
                {editContactId === contact.id ? (
                  <Editcard
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <Readcard
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </form>
        </Card>
      </Container>
    </>
  );
}
