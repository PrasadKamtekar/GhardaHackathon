import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { BrowserRouter } from "react-router-dom"
import "./index.css"
import { VisitorProvider } from "./context/VisitorContext.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <VisitorProvider>
      <App />
    </VisitorProvider>
  </BrowserRouter>
)