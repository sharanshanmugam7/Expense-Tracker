import React, { useState, useEffect } from "react";
import axios from "axios";
import './store.css';
import mainlogo from "../src/expenses.png";

export default function Store() {
  const [expenses, setexpenses] = useState([]);
  const [selectedexpense, setSelectedexpense] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [editedexpense, setEditedexpense] = useState({
    userid: "",
    username: "",
    date: "",
    price: "",
    description:""
  });
  const [newexpense, setNewexpense] = useState({
    userid: "",
    username: "",
    date: "",
    price: "",
    description: ""
  });

  const loadexpenses = async () => {
    try {
      const response = await axios.get("http://localhost:8080/expense/get");
      setexpenses(response.data);
    } catch (error) {
      console.log("Error fetching expenses:", error);
    }
  };

  const handleCloseModal = () => {
    setSelectedexpense(null);
    setIsEditing(false);
    setIsAdding(false);
  };

  const handleEditexpense = (expense) => {
    setEditedexpense(expense);
    setIsEditing(true);
  };

  const handleAddexpense = () => {
    setIsAdding(true);
    setNewexpense({
      userid: "",
      username: "",
      date: "",
      price: "",
      description: ""
    });
  };

  const handleInputChange = (e) => {
    if (isEditing) {
      setEditedexpense({ ...editedexpense, [e.target.name]: e.target.value });
    } else if (isAdding) {
      setNewexpense({ ...newexpense, [e.target.name]: e.target.value });
    }
  };

  const handleSaveexpense = async () => {
    try {
      if (isEditing) {
        await axios.put(`http://localhost:8080/expense/put/${editedexpense.userid}`, editedexpense);
        console.log("expense updated:", editedexpense);
      } else if (isAdding) {
        await axios.post("http://localhost:8080/expense/post", newexpense);
        console.log("New expense saved:", newexpense);
      }
      // Handle successful response from the backend, e.g., show a success message
      loadexpenses(); // Reload expenses after saving or updating
      handleCloseModal(); // Close the modal
      setEditedexpense({
        userid: "",
        username: "",
        date: "",
        price: "",
        description: ""
      });
    } catch (error) {
      console.log("Error saving/updating expense:", error);
      // Handle error from the backend, e.g., show an error message
    }
  };

  

  const handleDeleteexpense = async (userid) => {
    try {
      await axios.delete(`http://localhost:8080/expense/delete/${userid}`);
      console.log("expense deleted:", userid);
      // Handle successful deletion, e.g., show a success message
      loadexpenses(); // Reload expenses after deleting
    } catch (error) {
      console.log("Error deleting expense:", error);
      // Handle error from the backend, e.g., show an error message
    }
  };
  
  useEffect(() => {
    loadexpenses();
  }, []);
 
  
  return (
    <div>
      <div classname="bgtag">
    <div>
      <br></br>
     <header>
      <nav>
        <ul>
          <div className="logo-container"><img class="mainl" src={mainlogo} alt="Frntgo"/></div>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
     </div>
    <div className="container">
      <div className="py-4">
        <div className="button-container">
          <button className="addb" onClick={handleAddexpense}>
            Add expense
          </button>
        </div>
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Date</th>
              <th scope="col">Amount</th>
              <th scope="col">Description </th>
              <th scope="col">Actions</th>

            </tr>
          </thead>
          <tbody>
            {expenses && expenses.map((expense, index) => (
              <tr key={index}>
                <th scope="row">{expense.userid}</th>
                <td>{expense.username}</td>
                <td>{expense.date}</td>
                <td>{expense.price}</td>
                <td>{expense.description}</td>
                <td>
                  <button className="btn btn-primary mx-2" onClick={() => setSelectedexpense(expense)}>
                    View
                  </button>
                  &nbsp;&nbsp;&nbsp;
                  <button className="btn btn-outline-primary mx-2" onClick={() => handleEditexpense(expense)}>
                    Edit
                  </button>
                  &nbsp;&nbsp;&nbsp;
                  <button className="btn btn-danger mx-2" onClick={() => handleDeleteexpense(expense.userid)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {selectedexpense && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={handleCloseModal}>
                &times;
              </span>
              {isEditing ? (
                <h2>Edit expense</h2>
              ) : (
                <h2>expense Details</h2>
              )}
              <p>expense ID: {selectedexpense?.userid}</p>
              <p>expense Name: {selectedexpense?.username}</p>
              <p>date: {selectedexpense?.date}</p>
              <p>price: {selectedexpense?.price}</p>
              <p>description: {selectedexpense?.description}</p>
            </div>
          </div>
        )}

        {isAdding && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={handleCloseModal}>
                &times;
              </span>
              <h2>Add Details</h2>
              <form>
                <div className="form-group">
                  <label>UserID</label>
                  <input
                    type="number"
                    className="in"
                    name="userid"
                    value={newexpense.userid}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label>UserName</label>
                  <input
                    type="text"
                    className="in"
                    name="username"
                    value={newexpense.username}
                    onChange={handleInputChange}
                    />
                </div>
                <div className="form-group1">
                  <label class="datelb">date</label>
                  <input
                    type="date"
                    className="in1"
                    name="date"
                    value={newexpense.date}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label>price</label>
                  <input
                    type="text"
                    className="in"
                    name="price"
                    value={newexpense.price}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label>description</label>
                  <input
                    type="text"
                    className="in"
                    name="description"
                    value={newexpense.description}
                    onChange={handleInputChange}
                    />
                </div>
                <button type="button" className="btn btn-primary" onClick={handleSaveexpense}>
                  Save
                </button>
              </form>
            </div>
          </div>
        )}

        {isEditing && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={handleCloseModal}>
                &times;
              </span>
              <h2>Edit Details</h2>
              <form>
                <div className="form-group">
                  <label>UserID</label>
                  <input
                    type="number"
                    className="in"
                    name="userid"
                    value={editedexpense.userid}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label>UserName</label>
                  <input
                    type="text"
                    className="in"
                    name="username"
                    value={editedexpense.username}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group1">
                  <label class="datelb">date</label>
                  <input
                    type="date"
                    className="in1"
                    name="date"
                    value={editedexpense.date}
                    onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                  <label>price</label>
                  <input
                    type="text"
                    className="in"
                    name="price"
                    value={editedexpense.price}
                    onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                  <label>description</label>
                  <input
                    type="text"
                    className="in"
                    name="description"
                    value={editedexpense.description}
                    onChange={handleInputChange}
                    />
                </div>
                <button type="button" className="btn btn-primary" onClick={handleSaveexpense}>
                  Save
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
    </div>
    </div>
  );
}