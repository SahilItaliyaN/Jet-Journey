import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FlightBooking from './component/FlightBooking';
import FlightList from './component/FlightList';
import Header from './component/Header';
import Footer from './component/Footer';

function App() {
  return (
    
      <BrowserRouter> 
        <Header />
        <Routes>
          <Route path="/" element={<FlightBooking />} />
          <Route path="/flights" element={<FlightList />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      
    
  );
}

export default App;