import { Navbar as NextUINavbar, NavbarContent } from "@nextui-org/react"

import { ThemeToggle } from "./theme-toggle"

export default function Navbar() {
  return (
    <NextUINavbar maxWidth="xl" position="static">
      <NavbarContent as="div" justify="end">
        <ThemeToggle />
      </NavbarContent>
    </NextUINavbar>
  )
}
