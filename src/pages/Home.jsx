import React from 'react';
import { Link } from 'react-router-dom';
import Table from "./Table";
import { getBalance } from '../Lib/LocalStorageHelper'
import { fillingLocalStorage } from "../Lib/LocalStorageHelper";
import dayjs from 'dayjs'; // Import Day.js

function Home() {
  // Assuming you have a balance data, for demonstration, let's use a static value
  //const [transaction, setTransaction] = useState([{ page: "Home" }]);
  const transaction = [{ page: "Home" }]

  //this function fills local storage with random transactions.
  //only for testing the application.
  //you can delete
  fillingLocalStorage()

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: "column" }}>
      <div className="row">
        <div className="col-md-12 form">
          {/* Display today's date */}
          <div style={{ fontSize: '18px', color: '#4c566a', marginBottom: '2rem', textAlign: 'center', fontWeight: 'bold' }}>
            Today's Date: {dayjs().format('dddd, MMMM D, YYYY')}
          </div>
          {/*This section shows the balance of the account depending on input data */}
          <section style={{ padding: '16px', borderRadius: "16px", backgroundColor: "orange", width: '100%', display: 'flex', justifyContent: 'center' }}>
            <div style={{ fontSize: '24px', color: 'white' }}>
              Balance: £{getBalance()}
            </div>
          </section>
          <Table data={transaction} />
        </div>
        <div style={{ display: "flex", gap: "2rem", justifyContent: "center", marginTop: "2rem" }}>
          {/*Button to show income data on the table */}
          <Link to="/income"><button style={{ backgroundColor: 'green', color: 'white' }}>Income</button></Link>
          {/*Button to show expense data on the table */}
          <Link to="/expenditure"><button style={{ backgroundColor: 'red', color: 'white' }}>Expense</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Home;
