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

        <section id="projects" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-ink">Projects</h2>
          <p className="mt-2 max-w-2xl text-ink-soft">
            Sample projects built with community stacks are coming soon. Check back after you've
            put together your own stack above.
          </p>
        </section>

        <section id="about" className="border-t border-hairline bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-ink">About Dev Stack</h2>
            <p className="mt-2 max-w-2xl text-ink-soft">
              Dev Stack helps developers explore modern tools across the frontend, backend,
              database, and DevOps landscape, and assemble a shortlist for their next project.
            </p>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-ink">Contact</h2>
          <p className="mt-2 max-w-2xl text-ink-soft">
            Have feedback or a technology suggestion? Reach out at{" "}
            <a href="mailto:hello@devstack.dev" className="font-medium text-pink-600">
              hello@devstack.dev
            </a>
            .
          </p>
        </section>
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