import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Footer from "./Footer";
import "./index.css";

const App = () => (
  <div className="mx-auto mt-10 max-w-6xl text-3xl">
    <Header/>
        <div className="my-10">Home page content</div>
    <Footer/>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);
root.render(<App />);
