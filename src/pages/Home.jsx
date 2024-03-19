import React from 'react';
import { getBalance } from '../Lib/LocalStorageHelper'
function Home() {
  // Assuming you have a balance data, for demonstration, let's use a static value
  const balance = 1000; // This should be your actual balance data

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: "column" }}>
      <section style={{ padding: '16px', borderRadius: "16px", backgroundColor: "rgba(0,0,0,0.5)", margin: "2rem" }}>
        <div style={{ fontSize: '24px', color: 'white' }}>
          Balance: £{getBalance()}
        </div>
      </section>
      <section>
        <table style={{ margin: 'auto', borderCollapse: 'collapse', width: '100%', borderRadius: "16px" }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid black', padding: '10px', textAlign: 'center' }}>Transaction Name</th>
              <th style={{ border: '1px solid black', padding: '10px', textAlign: 'center' }}>Date</th>
              <th style={{ border: '1px solid black', padding: '10px', textAlign: 'center' }}>Increase/Decrease %</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center' }}>Transaction 1</td>
              <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center' }}>2023-04-01</td>
              <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center' }}>+5%</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center' }}>Transaction 2</td>
              <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center' }}>2023-04-02</td>
              <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center' }}>-3%</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center' }}>Transaction 3</td>
              <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center' }}>2023-04-03</td>
              <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center' }}>+2%</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
        <div style={{ display: "flex", gap: "2rem", justifyContent: "center", margin: "2rem" }}>
          <button style={{ backgroundColor: 'green', color: 'white' }}>Income</button>
          <button style={{ backgroundColor: 'red', color: 'white' }}>Expense</button>
        </div>
      </section>
    </div>
  )
}

export default Home;
