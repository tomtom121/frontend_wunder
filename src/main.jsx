import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex flex-col items-center justify-center p-4">
      <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-xl">
        <h1 className="text-4xl font-bold text-center text-purple-700 mb-4">
          Willkommen bei Wunderland 🌈
        </h1>
        <p className="text-center text-gray-700 text-lg mb-6">
          Die Kita-App für Eltern und Pfleger
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-xl">
            Für Eltern
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-xl">
            Für Pfleger
          </button>
        </div>
      </div>
    </main>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
