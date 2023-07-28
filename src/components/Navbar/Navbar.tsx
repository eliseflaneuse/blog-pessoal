import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

const Navbar = () => {
  let navigate = useNavigate()

  const { usuario, handleLogout } = useContext(AuthContext)

  function logout() {
    handleLogout()
    alert('Usuário deslogado com sucesso')
    navigate('/login')
}

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <header className="ml-8 mr-8 mb-8 flex items-center justify-between border-b py-4 md:mb-12 md:py-8 xl:mb-16">
      {/* logo - start */}
      <a href="/home" className="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl" aria-label="logo">
        <svg width="95" height="94" viewBox="0 0 95 94" className="h-auto w-6 text-indigo-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M96 0V47L48 94H0V47L48 0H96Z" />
        </svg>
        Blog Pessoal
      </a>
      {/* logo - end */}

      {/* nav - start */}
      <nav className={`gap-12 lg:flex ${isDropdownOpen ? 'hidden' : 'lg:block'} lg:items-center lg:w-auto md:hidden sm:hidden `}>
        
        <Link to="#" className="text-lg font-semibold text-indigo-500" onClick={closeDropdown}>
          Postagens
        </Link>
        <Link to="/temas" className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700" onClick={closeDropdown}>
          Temas
        </Link>
        <Link to="/cadastroTema" className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700" onClick={closeDropdown}>
          Cadastrar Temas
        </Link>
        <Link to="#" className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700" onClick={closeDropdown}>
          Perfil
        </Link>
      </nav>
      {/* nav - end */}

      {/* buttons - start */}
      <a onClick={logout} href="#" className="hidden rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:inline-block">Sair</a>

      {/* Dropdown menu for smaller screens */}
      <div className="relative lg:hidden">
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-gray-500 ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden"
          onClick={toggleDropdown}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
          </svg>
          Menu
        </button>

        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-40 rounded-lg bg-white shadow-lg">
            <Link to="#" className="block px-4 py-2 text-sm text-gray-600 font-semibold hover:bg-indigo-100" onClick={closeDropdown}>
              Postagens
            </Link>
            <Link to="/temas" className="block px-4 py-2 text-sm text-gray-600 font-semibold hover:bg-indigo-100" onClick={closeDropdown}>
              Temas
            </Link>
            <Link to="/cadastroTema" className="block px-4 py-2 text-sm text-gray-600 font-semibold hover:bg-indigo-100" onClick={closeDropdown}>
              Cadastrar Temas
            </Link>
            <Link to="#" className="block px-4 py-2 text-sm text-gray-600 font-semibold hover:bg-indigo-100" onClick={closeDropdown}>
              Perfil
            </Link>
          </div>
        )}
      </div>
      {/* Dropdown menu for smaller screens - end */}
      {/* buttons - end */}
    </header>
  );
};

export default Navbar;


