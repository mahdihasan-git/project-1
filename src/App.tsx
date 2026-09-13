import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologySection from "./components/TechnologySection";
import Footer from "./components/Footer";
import { useStack } from "./hooks/useStack";

export default function App() {
  const stackApi = useStack();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <TechnologySection stackApi={stackApi} />

        

      
      </main>
      <Footer />

      <ToastContainer
        position="bottom-right"
        autoClose={2800}
        newestOnTop
        pauseOnHover
        theme="light"
      />
    </div>
  );
}
