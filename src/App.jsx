import "./App.css";
import NavigationBar from "./components/NavigationBar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen min-h-screen flex flex-col bg-slate-900 overflow-x-hidden">
      <NavigationBar />
      <div className="bg-gray-100 flex-grow scroll-smooth relative">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
