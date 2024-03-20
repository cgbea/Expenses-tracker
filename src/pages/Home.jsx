import React from 'react';
import Table from "./Table";
import { getBalance } from '../Lib/LocalStorageHelper'
function Home() {
  // Assuming you have a balance data, for demonstration, let's use a static value
  //const [transaction, setTransaction] = useState([{ page: "Home" }]);
const transaction =[{page:"Home"}]
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: "column" }}>
      <section style={{ padding: '16px', borderRadius: "16px", backgroundColor: "orange", margin: "2rem", width: '100%', display: 'flex', justifyContent: 'center' }}>
        <div style={{ fontSize: '24px', color: 'white' }}>
          Balance: £{getBalance()}
        </div>
      </section>
      <div className="row">
        <div className="col-md-12 form">
          <Table data={transaction} />
        </div>
        <div style={{ display: "flex", gap: "2rem", justifyContent: "center", margin: "2rem" }}>
          <button style={{ backgroundColor: 'green', color: 'white' }}>Income</button>
          <button style={{ backgroundColor: 'red', color: 'white' }}>Expense</button>
        </div>
      </div>
    </div>
  )
}

export default Home;
