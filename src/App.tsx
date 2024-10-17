import React from 'react';
import AdminDashBoard from './Pages/AdminDashBoard';
import Header from './components/Header';
const App: React.FC = () => {
  return (
    <div>
    <Header/>
   <AdminDashBoard/>
   </div>
  );
};

export default App;
