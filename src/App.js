import { Route, Routes } from "react-router-dom";
import { publicRoute } from "./Routes/publicRoutes";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Navbar from '../src/components/Navbar'

function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (

    <Navbar>
      <Routes>
        {
          publicRoute.map(({ path, Components }) => <Route path={path}
            element={<Components />}></Route>)
        }
      </Routes>
    </Navbar>
  );
}

export default App;
