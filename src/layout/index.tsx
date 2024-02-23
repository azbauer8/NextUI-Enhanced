import { Toaster } from "@/components/Toast"
import { useTheme } from "@/providers/theme-provider"
import Footer from "./footer"
import Navbar from "./nav"

export default function Layout({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme()
  return (
    <div className="relative flex min-h-screen flex-col">
      <Navbar />
      <main className="container mx-auto max-w-7xl flex-1 px-5 py-10">
        {children}
      </main>
      <Footer />
      <Toaster closeButton theme={theme} />
    </div>
  )
}
