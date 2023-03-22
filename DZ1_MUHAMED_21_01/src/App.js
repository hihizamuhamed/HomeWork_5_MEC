import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import { BrowserRouter,Routes,Route }  from "react-router-dom";
import NavBar from "./NavBar/NavBar/Navbar";
import Contact from "./Components/Contact/Contact";
import Users from "./Components/Users/Users";
import NotFound from "./Components/NotFound/NotFound";


function App(){
  return(
    <BrowserRouter>
    <NavBar/>

      <Routes>
        <Route index element={<Home/>}/>
        <Route path='about'element={<About/>}/>
        <Route path='Contact'element={<Contact/>}/>
        <Route path='Users'element={<Users/>}/>
        <Route path='NotFound'element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;