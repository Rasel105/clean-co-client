import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login";
import Services from "../Pages/Services";

export const publicRoute = [
    { path: "/", name: "Home", Components: Home },
    // { path: "/about", name: "About", Components: About },
    // { path: "/services", name: "Services", Components: Services },
    { path: "/login", name: "Login", Components: Login },
    { path: "/contact", name: "Contact", Components: Contact },
]