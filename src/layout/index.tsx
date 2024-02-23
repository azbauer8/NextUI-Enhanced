import { Toaster } from "@/components/Toast"
import Footer from "./footer"
import Navbar from "./nav"
import Providers from "./providers"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      <div className="relative flex min-h-screen flex-col">
        <Navbar />
        <main className="container mx-auto max-w-7xl flex-1 px-5 py-10">
          {children}
        </main>
        <Footer />
      </div>
      <Toaster closeButton />
    </Providers>
  )
}
