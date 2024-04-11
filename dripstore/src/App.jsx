import Home from "./Components/Pages/Home";
import Produtos from "./Components/Pages/produtos";
import Detalhes from "./Components/Pages/detalhes";
import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="produtos" element={<Produtos />} />
          <Route path="detalhes" element={<Detalhes />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}
