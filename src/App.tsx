import {
  LandingDescription,
  LandingHeader,
  LandingTitle,
} from "@/components/LandingHeader"
import { useState } from "react"

import { Select, SelectItem } from "@nextui-org/react"
import DemoLayout from "./playground/DemoLayout"

const components = [
  {
    label: "Sheet",
    value: "sheet",
    source: "",
  },
  {
    label: "Drawer",
    value: "drawer",
    source: "",
  },
  {
    label: "Command Menu",
    value: "cmdk",
    source: "",
  },
  {
    label: "Toast",
    value: "toast",
    source: "",
  },
  {
    label: "Carousel",
    value: "carousel",
    source: "",
  },
  {
    label: "Resizeable",
    value: "resizeable",
    source: "",
  },
  {
    label: "Typography",
    value: "typography",
    source: "",
  },
]

export type Component = (typeof components)[number]

function App() {
  const [selectedKeys, setSelectedKeys] = useState(new Set(["sheet"]))
  const selected = components.find(
    (component) => component.value === selectedKeys.entries().next().value[0],
  )
  return (
    <div className="space-y-5">
      <LandingHeader>
        <LandingTitle>NextUI Enhanced</LandingTitle>
        <LandingDescription>
          A suite of components for NextUI ported from shadcn/ui.
        </LandingDescription>
      </LandingHeader>

      <div className="space-y-5">
        <Select
          aria-label="Component Picker"
          className="max-w-xs mx-auto flex"
          selectedKeys={selectedKeys}
          onSelectionChange={(keys) => {
            setSelectedKeys(new Set([new Set(keys).entries().next().value[0]]))
          }}
        >
          {components.map((component) => (
            <SelectItem key={component.value} value={component.value}>
              {component.label}
            </SelectItem>
          ))}
        </Select>

        {selected && <DemoLayout selected={selected} />}
      </div>
    </div>
  )
}

export default App
