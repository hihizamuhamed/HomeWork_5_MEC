import React from 'react';
import { BrowserRouter,Routes, Route,} from 'react-router-dom';
import Home from './components/Home';
import PhotoList from './components/PhotoList';
import PhotoDetail from './components/PhotoDetail';
import Photo from './components/Photo';
import NavBar from './components/NavBar/NavBar';


function app(){
  return(
    <BrowserRouter>
    <NavBar/>
    <Routes>
      
    <Route index element={<Home/>}/>
          <Route path="/photos"element={<PhotoList/>}/>
          <Route path="*"/>
          <Route path="/photos/:id" element={<PhotoDetail/>}/>
          <Route path="/photos/:id" element={<Photo/>}/>
          <Route path="*" element={() => <h1>404 Not Found</h1>} />
    </Routes>
    </BrowserRouter>
  )
}
export default app

