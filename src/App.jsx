import {Routes, Route} from 'react-router-dom';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import Registerpage from './pages/Registerpage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';

import NavbarComponent from './components/NavbarComponent';
import FooterComponent from './components/FooterComponent';




function App() {

  return (

    <div>

      <NavbarComponent />

      <Routes>

        <Route path= "/" Component={HomePage} />
        <Route path= "/Login" Component={LoginPage} />
        <Route path= "/Register" Component={Registerpage} />
        <Route path= "/About" Component={AboutPage} />
        <Route path= "/Services" Component={ServicesPage} />
        
      </Routes>

      {/* <FooterComponent /> */}

    </div>

  );
}

export default App
