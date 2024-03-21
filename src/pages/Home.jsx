import React from 'react';
import Table from "./Table";
import { getBalance } from '../Lib/LocalStorageHelper'
function Home() {
  // Assuming you have a balance data, for demonstration, let's use a static value
  //const [transaction, setTransaction] = useState([{ page: "Home" }]);
  const transaction = [{ page: "Home" }]
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: "column" }}>
      <div className="row">
        <div className="col-md-12 form">
  {/*This section shows the balance of the account depending on input data */}
          <section style={{ padding: '16px', borderRadius: "16px", backgroundColor: "orange", width: '100%', display: 'flex', justifyContent: 'center' }}>
            <div style={{ fontSize: '24px', color: 'white' }}>
              Balance: £{getBalance()}
            </div>
          </section>
          <Table data={transaction} />
        </div>
        <div style={{ display: "flex", gap: "2rem", justifyContent: "center", margin: "2rem" }}>
  {/*Button to show income data on the table */}
          <button style={{ backgroundColor: 'green', color: 'white' }}>Income</button>
  {/*Button to show expense data on the table */}
          <button style={{ backgroundColor: 'red', color: 'white' }}>Expense</button>
        </div>
      </div>
    </div>
  )
}

export default Home;