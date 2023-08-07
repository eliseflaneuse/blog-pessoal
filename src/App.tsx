import "./App.css";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Cadastro from "./pages/Cadastro/Cadastro";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ListaTemas from "./components/Temas/listaTemas/ListaTemas";
import FormularioTema from "./components/Temas/formularioTema/FormularioTema";
import DeletarTema from "./components/Temas/deletarTema/DeletarTema";
import ListaPostagens from "./components/Postagens/listaPostagens/ListaPostagens";
import FormularioPostagem from "./components/Postagens/formularioPostagem/FormularioPostagem";
import DeletarPostagem from "./components/Postagens/deletarPostagem/DeletarPostagem";
import Perfil from "./pages/Perfil/Perfil";


function App() {
  return (
    <>
      <AuthProvider>
      <ToastContainer />
        <BrowserRouter>
          <Navbar />
          <div className="min-h-[80vh]">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/home" element={<Home />} />
              <Route path="/temas" element={<ListaTemas />} />
              <Route path="/cadastroTema" element={<FormularioTema />} />
              <Route path="/editarTema/:id" element={<FormularioTema />} />
              <Route path="/deletarTema/:id" element={<DeletarTema />} />
              <Route path="/postagens" element={<ListaPostagens />} />
              <Route path="/cadastroPostagem" element={<FormularioPostagem />} />
              <Route path="/editarPostagem/:id" element={<FormularioPostagem />} />
              <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />
              <Route path="/perfil" element={<Perfil />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}
export default App;
