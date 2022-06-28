import { Routes, Route } from "react-router-dom";
import routes from "./Routes/routes";
import "./App.css";

function App() {
  return (
    <Routes>
      {routes.map((route) => (
        <Route {...route} key={route.id} />
      ))}
    </Routes>
  );
}

export default App;
