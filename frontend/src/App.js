import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FlightBooking from './component/FlightBooking';
import FlightList from './component/FlightList';
import Header from './component/Header';
import Footer from './component/Footer';
import Homepage from './component/Homepage';
import Hotelpage from './component/HotelPage';
import Buspage from './component/Buspage';
import Login from './component/Login';
import Register from './component/Register';

function App() {
  return (
    
      <BrowserRouter> 
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/flightbooking" element={<FlightBooking />} />
          <Route path="/flights" element={<FlightList />} />
          <Route path="/hotelpage" element={<Hotelpage />} />
          <Route path="/busepage" element={<Buspage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      
    
  );
}

export default App;