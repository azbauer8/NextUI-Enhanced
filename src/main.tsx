import "@/App.css"
import App from "@/App.tsx"
import Layout from "@/layout/index.tsx"
import React from "react"
import ReactDOM from "react-dom/client"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Layout>
      <App />
    </Layout>
  </React.StrictMode>,
)
