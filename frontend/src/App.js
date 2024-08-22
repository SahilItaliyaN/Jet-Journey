import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FlightBooking from './component/FlightBooking';
import FlightList from './component/FlightList';

function App() {
  return (
    
      <BrowserRouter> 
        <Routes>
          <Route path="/" element={<FlightBooking />} />
          <Route path="/flights" element={<FlightList />} />
        </Routes>
      </BrowserRouter>
      
    
  );
}

export default App;