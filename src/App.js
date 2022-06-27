import { Routes, Route } from "react-router-dom";
import routes from "./Routes/routes";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        {routes.map((route) => (
          <Route {...route} key={route.id} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
