import logo from "./logo.svg";
import "./App.css";
import Layout from "./Components/Layout";
import { AuthProvider } from "./Auth";
function App() {
  return (
    <AuthProvider>
      <Layout />
    </AuthProvider>
  );
}

export default App;
