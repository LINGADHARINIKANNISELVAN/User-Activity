import React, { useState, Fragment } from "react";
import { Card, Container } from "react-bootstrap";
import { nanoid } from "nanoid";

import data from "./Userdata.json";
import ReadOnlyRow from "./ReadonlyRow";
import EditableRow from "./EditableRow";

export default function Tabledata() {
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

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

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
      email: addFormData.email
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
    <div>
      <Container>
        <Card style={{ marginLeft: 150, width: 800, height: 1100, border: 0 }}>
          <form onSubmit={handleEditFormSubmit}>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Address</th>
                  <th>Phone Number</th>
                  <th>Email</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((contact) => (
                  <Fragment>
                    {editContactId === contact.id ? (
                      <EditableRow
                        editFormData={editFormData}
                        handleEditFormChange={handleEditFormChange}
                        handleCancelClick={handleCancelClick}
                      />
                    ) : (
                      <ReadOnlyRow
                        contact={contact}
                        handleEditClick={handleEditClick}
                        handleDeleteClick={handleDeleteClick}
                      />
                    )}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </form>

          <h2>Add a Contact</h2>
          <form onSubmit={handleAddFormSubmit}>
            <input
              type="text"
              name="username"
              required="required"
              placeholder="Enter a name..."
              onChange={handleAddFormChange}
            />
            <input
              type="text"
              name="address"
              required="required"
              placeholder="Enter an address..."
              onChange={handleAddFormChange}
            />
            <input
              type="text"
              name="phone"
              required="required"
              placeholder="Enter a phone number..."
              onChange={handleAddFormChange}
            />
            <input
              type="email"
              name="email"
              required="required"
              placeholder="Enter an email..."
              onChange={handleAddFormChange}
            />
            <button type="submit">Add</button>
          </form>
        </Card>
      </Container>
    </div>
  );
}
