import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<ProtectedRoute role="user" />}>
            <Route index element={<Dashboard />} />
          </Route>
          <Route path="/admin" element={<ProtectedRoute role="admin" />}>
            <Route index element={<Dashboard />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
