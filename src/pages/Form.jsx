import React, { useState } from "react";
import { Button } from "primereact/button";
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "primeicons/primeicons.css";
import { readLocalStorage, writeLocalStorage } from "../Lib/LocalStorageHelper";

const Form = (props) => {
  const { transaction, setTransaction } = props;
  const [inputData, setInputData] = useState({ expense: "", date: "", price: "" });
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const page = props.transaction[0].page;

  //When save button is clicked input data is added to the table.
  const saveInput = (event) => {
    event.preventDefault();
    if (inputData.expense === "" || inputData.price === "") {
      return;
    } else {
      if (page === "Income" && inputData.price < 0) {
        setErrorMessage("Income values must be positive");
        setShowErrorModal(true);
        return;
      }
      if (page === "Expenditure" && inputData.price > 0) {
        setErrorMessage("Expenditure values must be negative");
        setShowErrorModal(true);
        return;
      }
      let price = parseInt(inputData.price);
      inputData.date = new Date().toLocaleDateString();
      inputData.price = price;

      let transactionArr = readLocalStorage();

      transactionArr.push(inputData);

      writeLocalStorage(transactionArr);

      setTransaction([...transaction, inputData]);
      clearInput();
    }
  };

  //When clear button is clicked both input fields are cleared
  const clearInput = () => {
    setInputData({ expense: "", price: "" });
  };

  const handleInputChange = (event) => {
    let name = event.target.name;
    let newValue = event.target.value;
    if (name === "expense") {
      setInputData({ ...inputData, expense: newValue });
    } else {
      setInputData({ ...inputData, price: newValue });
    }
  };

  //Users can only use positive values for income and negative values for expenditure. 
  //There is a Bootstrap modal to dipslay an error message when incorrect values are used
  return (
    <div>
      <section>
        <input
          className="form-control form-control-lg"
          type="text"
          name="expense"
          onChange={handleInputChange}
          value={inputData.expense}
          placeholder="Name of Transaction"
          aria-label=".form-control-lg example"
          style={{ padding: "15px", marginBottom: "10px", marginTop: "30px" }}
        />
        <input
          className="form-control form-control-lg"
          type="number"
          min={page === "Income" ? 1 : ""}
          max={page === "Expenditure" ? -1 : ""}
          name="price"
          onChange={handleInputChange}
          value={inputData.price}
          placeholder="Transaction Amount"
          aria-label=".form-control-lg example"
          style={{ padding: "15px", marginBottom: "10px" }}
        />
        <div style={{ float: "left" }}>
          <Button
            label="Save"
            onClick={saveInput}
            style={{ backgroundColor: "green", marginRight: "10px" }}
            icon="pi pi-check"
          />
          <Button
            label="Cancel"
            onClick={clearInput}
            style={{ backgroundColor: "red" }}
            icon="pi pi-times"
          />
        </div>
      </section>
      

      
      <Modal show={showErrorModal} onHide={() => setShowErrorModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Error</Modal.Title>
        </Modal.Header>
        <Modal.Body>{errorMessage}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowErrorModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};



export default Form;
