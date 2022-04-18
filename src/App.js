// import './App.css';
import NavBar from "./components/navBar";
import Main from "./components/main";
function App() {
  return (
    <div className="App">

      {/* main app for movies */}
      <NavBar></NavBar>

      <div> ============================ </div>
      <Main> </Main>
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