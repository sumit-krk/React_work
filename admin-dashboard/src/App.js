import React from 'react';
import Maindashboard from './component/Maindashboard';
import TableRowComponent from './component/TableRowComponent';
function App() {
  return (
    <div className="App">
      <div style={{display:'flex',justifyContent:'center',fontWeight:'bold',color:'blue'}}>Admin UI</div>
      <Maindashboard />
    </div>
  );
}

export default App;
