import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FlightBooking from "./component/FlightBooking";
import FlightList from "./component/FlightList";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Homepage from "./component/Homepage";
import Hotelpage from "./component/HotelPage";
import Buspage from "./component/Buspage";
import Login from "./component/Login";
import Register from "./component/Register";
import useAuthStore from "./component/store/authstore";
import ProtectedRoute from "./component/utility/Protected";
import SearchF from "./component/SearchF";
import SearchB from "./component/SearchB";
import SearchH from "./component/SearchH";

function App() {
  const authuser = useAuthStore((state) => state.user);

  return (
    <BrowserRouter>
      {authuser ? <Header /> : null}
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/flightbooking" element={<FlightBooking />} />
          <Route path="/flights" element={<FlightList />} />
          <Route path="/hotelpage" element={<Hotelpage />} />
          <Route path="/buspage" element={<Buspage />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/searchf/:key" element={<SearchF />} />
        <Route path="/searchh/:key" element={<SearchH />} />
        <Route path="/searchb/:key" element={<SearchB />} />
        {/* <Route path='/:username' element={<ProfilePage />} /> */}
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
      {authuser ? <Footer /> : null}
    </BrowserRouter>
  );
}

export default App;
