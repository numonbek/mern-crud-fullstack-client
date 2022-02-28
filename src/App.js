import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from 'react-router-dom';
import { AddEditPage, Home, View } from './components';
import './App.css';

function App() {
  return (
    <div className="App App-header">
      <ToastContainer position="top-center" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addContact" element={<AddEditPage />} />
        <Route path="/update/:id" element={<AddEditPage />} />
        <Route path="/view/:id" element={<View />} />
      </Routes>
    </div>
  );
}

export default App;
