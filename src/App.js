import { Route, Routes } from "react-router-dom";
import { publicRoute } from "./Routes/publicRoutes";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Navbar from '../src/components/Navbar'
import PrivateRoute from "./authentication/PrivateRoute";
import { privateRoutes } from "./Routes/privateRoutes";
import AdminRoute from './authentication/AdminRoute'
import Dashboard from "./Pages/Dashboard/Dashboard";
import AddAdmin from "./Pages/Dashboard/AddAdmin";
import AddService from "./Pages/Dashboard/AddService";

function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (

    <Navbar>
      <Routes>
        {
          publicRoute.map(({ path, Components }, index) => <Route
            key={index}
            path={path}
            element={<Components />}></Route>)
        }

        <Route element={<PrivateRoute />}>
          {
            privateRoutes.map(({ path, Components }, index) => <Route
              key={index}
              path={path}
              element={<Components />}></Route>)
          }
        </Route>
        <Route element={<AdminRoute />}>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path='add-admin' element={<AddAdmin />}></Route>
            <Route path='add-service' element={<AddService />}></Route>
          </Route>
        </Route>
      </Routes>
    </Navbar>
  );
}

export default App;
