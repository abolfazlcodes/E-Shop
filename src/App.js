import { Routes, Route } from "react-router-dom";
import routes from "./Routes/routes";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import AuthProvider from "./Context/useAuthContext/AuthProvider";

function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <Routes>
          {routes.map((route) => (
            <Route {...route} key={route.id} />
          ))}
        </Routes>
      </AuthProvider>
    </Provider>
  );
}

export default App;
