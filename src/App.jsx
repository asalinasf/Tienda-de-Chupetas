import "./App.css";
import { MyRoutes } from "./routes/router.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div>
      <Header />
      <MyRoutes />
      <Footer />
    </div>
  );
}

export default App;
