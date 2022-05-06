// import './App.css';
import React from "react";
import Home from "./Pages/Home";
// import PageNotFound from "./Pages/PageNotFound";
import Login from "./Pages/Login";
import PageNotFound from "./Pages/PageNotFound";

import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom";
function App() {
  return (
    <div className="App">

        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<Home/>}></Route>
                <Route path="/Login" element={<Login/>}></Route>
                <Route path="" element={<Navigate replace to="/home"/>} />
                <Route path="/PageNotFound" element={<PageNotFound/>}></Route>
            </Routes>


        </BrowserRouter>
    </div>
  );
}

export default App;



/* 
    app => navbar main 


    main => genre Movies 

    Movies => InputBox MoviesTable Pagenation

    // TODO: MOVIES

*/