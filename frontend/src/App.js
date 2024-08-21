import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FlightList from './component/FlightList';
import FlightBooking from './component/FlightBooking';

function App() {
  return (
    
      <BrowserRouter> 
        <Routes>
          <Route path="/" element={<FlightBooking />} />
        </Routes>
      </BrowserRouter>
      
    
  );
}

export default App;