import { AuthProvider } from './Context/authContext'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./Pages/Home/home"
import Login from "./Pages/Login/login";
import PrivateRoute from "./Ultils/PrivateRoute"
import SearchMedical from "./Pages/SearchMedical/searchMedical"
import SearchMedicine from "./Pages/SearchMedicine/searchMedicine";
import ScanPrescription from "./Pages/ScanPrescription/scanPrescription";
import Navbar from "./Components/Navbar/navbar";
import Medical from './Pages/Medical/medical';
import AddMedicines from './Pages/AddMedicines/addMedicines';
import AvailableMedicines from './Pages/AvailableMedicines/availableMedicines';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
        <Navbar />
          <Routes>
            <Route exact path='/' element={<PrivateRoute />}>
              <Route exact path='/' element={<Home />} />
            </Route>
            <Route path="/search-medical" element={<PrivateRoute url='/search-medical' ele={<SearchMedical />} />} />
            <Route path="/search-medicine" element={<SearchMedicine />} />
            <Route path="/search-medicine-online" element={<SearchMedicine />} />
            <Route path="/scan-prescription" element={<ScanPrescription />} />
            <Route path="/search-medicine-use" element={<SearchMedicine />} />
            <Route path="/login" element={<Login />} />
            <Route path="/medical" element={<Medical />} />
            <Route path="/medical/available-medicines" element={<AvailableMedicines />} />
            <Route path="/medical/add-medicines" element={<AddMedicines />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>

    </div>
  );
}

export default App;
