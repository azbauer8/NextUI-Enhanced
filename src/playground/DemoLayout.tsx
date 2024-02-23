import { Component } from "@/App"
import { Button, Link } from "@nextui-org/react"
import DemoCarousel from "./DemoCarousel"
import { DemoCmdk } from "./DemoCmdk"
import DemoDrawer from "./DemoDrawer"
import { DemoResizeable } from "./DemoResizeable"
import { DemoSheet } from "./DemoSheet"
import DemoToast from "./DemoToast"
import DemoTypography from "./DemoTypography"

export default function DemoLayout({ selected }: { selected: Component }) {
  return (
    <div className="space-y-4 w-11/12 mx-auto border-divider border p-5 rounded-lg">
      <div className="w-full flex justify-end">
        <Button
          as={Link}
          href={selected.source}
          variant="ghost"
          className="font-medium"
          isExternal
        >
          Code
        </Button>
      </div>
      {selected.value === "sheet" && <DemoSheet />}
      {selected.value === "drawer" && <DemoDrawer />}
      {selected.value === "cmdk" && <DemoCmdk />}
      {selected.value === "toast" && <DemoToast />}
      {selected.value === "carousel" && <DemoCarousel />}
      {selected.value === "resizeable" && <DemoResizeable />}
      {selected.value === "typography" && <DemoTypography />}
    </div>
  )
}
