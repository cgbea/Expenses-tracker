import React from 'react';

function Balance() {
 // Dummy dynamic data
 const balance = 2000; // This should be your actual balance data
 const transactions = [
    { name: 'Transaction 1', date: '2023-04-01', change: '+5%' },
    { name: 'Transaction 2', date: '2023-04-02', change: '-3%' },
    { name: 'Transaction 3', date: '2023-04-03', change: '+2%' },
    // Add more transactions as needed
 ];

 return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: "column" }}>
      <section style={{ padding: '16px', borderRadius: "16px", backgroundColor: "rgba(0,0,0,0.5)", margin: "2rem" }}>
        <div style={{ fontSize: '24px', color: 'white' }}>
          Balance: ${balance.toFixed(2)}
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
            {transactions.map((transaction, index) => (
              <tr key={index}>
                <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center' }}>{transaction.name}</td>
                <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center' }}>{transaction.date}</td>
                <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center' }}>{transaction.change}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
 );
}

export default Balance;