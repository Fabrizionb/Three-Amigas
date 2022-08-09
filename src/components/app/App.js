// Imports Css

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

// Imports Components

import Home from "../Views/Home";
import Store from "../Views/Store";

function App() {
  return (
    <div className='App'>
      <Home />
      <p className='text-center mt-5 mb-5'>Fin de Home View</p>
      <hr></hr>

      <Store />
      <p className='text-center mt-5 mb-5'>Fin de Store View</p>
      <hr></hr>
    </div>
  );
}

export default App;
{
  /* <ItemDetailContainer /> */
}
