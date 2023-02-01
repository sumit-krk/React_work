import React from 'react';
import Maindashboard from './component/Maindashboard';
import TableRowComponent from './component/TableRowComponent';
function App() {
  return (
    <div className="App">
      <div>Admin dashboard</div>
      <TableRowComponent />
      <Maindashboard />
    </div>
  );
}

export default App;
