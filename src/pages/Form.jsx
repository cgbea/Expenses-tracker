import React, { useState } from "react";
import { Button } from "primereact/button";
import "primeicons/primeicons.css";
<<<<<<< HEAD
import { readLocalStorage, writeLocalStorage } from "../Lib/LocalStorageHelper"

const Form = (props) => {
  const { transaction, setTransaction } = props;
  const [inputData, setInputData] = useState({ expense: "", date: "", price: "" });

  const page = props.transaction[0].page
=======

const Form = (props) => {
  const { transaction, setTransaction } = props;
  const [inputData, setInputData] = useState({ expense: "", price: "" });
>>>>>>> 04801db (moved formed,table and root to pages)

  //When save button is clicked input data is added to the table.
  const saveInput = (event) => {
    event.preventDefault();
<<<<<<< HEAD
    if (inputData.expense === "" || inputData.price === "") {
      return
    } else {

      if (page == "Income" && inputData.price < 0) {
        return
      }
      if (page == "Expenditure" && inputData.price > 0) {
        return
      }
      let price = parseInt(inputData.price)
      inputData.date = new Date().toLocaleDateString()
      inputData.price = price

      let transactionArr = readLocalStorage()

      transactionArr.push(inputData)

      writeLocalStorage(transactionArr)

      setTransaction([...transaction, inputData]);
      clearInput()
    }
=======
    setTransaction([...transaction, inputData]);
>>>>>>> 04801db (moved formed,table and root to pages)
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

  return (
    <div>
<<<<<<< HEAD
      <section>
=======
      <section style={{ float: "left", display: "grid", marginLeft: "50px" }}>
>>>>>>> 04801db (moved formed,table and root to pages)
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
<<<<<<< HEAD
          min={page == "Income" ? 1 : ""}
          max={page == "Expenditure" ? -1 : ""}
=======
>>>>>>> 04801db (moved formed,table and root to pages)
          name="price"
          onChange={handleInputChange}
          value={inputData.price}
          placeholder="Transaction Amount"
          aria-label=".form-control-lg example"
          style={{ padding: "15px", marginBottom: "10px" }}
        />
        <span className="p-buttonset" style={{ float: "left" }}>
          <Button
            label="Save"
            onClick={saveInput}
            style={{ backgroundColor: "lightGreen" }}
            icon="pi pi-check"
          />
          <Button
            label="Cancel"
            onClick={clearInput}
            style={{ backgroundColor: "tomato" }}
            icon="pi pi-times"
          />
        </span>
      </section>
    </div>
  );
};

export default Form;
