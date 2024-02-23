import { NextUIProvider } from "@nextui-org/react"
import { ThemeProvider } from "./theme-provider"

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NextUIProvider>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          {children}
        </ThemeProvider>
      </NextUIProvider>
    </>
  )
}
