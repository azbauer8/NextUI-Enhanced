import "@/App.css"
import App from "@/App.tsx"
import Layout from "@/layout/index.tsx"
import React from "react"
import ReactDOM from "react-dom/client"
import Providers from "./providers"

// biome-ignore lint/style/noNonNullAssertion: this is fine :)
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Providers>
      <Layout>
        <App />
      </Layout>
    </Providers>
  </React.StrictMode>,
)
