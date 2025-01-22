import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import QuemSomos from './pages/QuemSomos';
import EdicoesAnteriores from './pages/EdicoesAnteriores';
import DataWashes from './pages/DataWashes';
import ScrollTop from './components/ScrollTop';
import {
  Washes2016,
  Washes2017,
  Washes2018,
  Washes2019,
  Washes2020,
  Washes2021,
  Washes2022,
  Washes2023,
  Washes2024,
  Washes2025,
  Washes2026
} from "../src/pages/WASHES/index";

function App() {
  return (
    <>
      <Navbar />
      <ScrollTop />
      <div className="pt-14">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/quem-somos" element={<QuemSomos />} />
          <Route path="/washes-2016" element={<Washes2016/>} />
          <Route path="/washes-2017" element={<Washes2017/>} />
          <Route path="/washes-2018" element={<Washes2018/>} />
          <Route path="/washes-2019" element={<Washes2019/>} />
          <Route path="/washes-2020" element={<Washes2020/>} />
          <Route path="/washes-2021" element={<Washes2021/>} />
          <Route path="/washes-2022" element={<Washes2022/>} />
          <Route path="/washes-2023" element={<Washes2023/>} />
          <Route path="/washes-2024" element={<Washes2024/>} />
          <Route path="/washes-2025" element={<Washes2025/>} />
          <Route path="/washes-2026" element={<Washes2026/>} />
          <Route path="/edicoes-anteriores" element={<EdicoesAnteriores />} />
          <Route path="/datawashes" element={<DataWashes />} />
          {/* <Route path="*" element={<NoMatch />} /> */}
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
