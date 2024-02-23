import {
  LandingDescription,
  LandingHeader,
  LandingTitle,
} from "@/components/LandingHeader"
import { useState } from "react"

import { Select, SelectItem } from "@nextui-org/react"
import DemoLayout from "./demos/DemoLayout"

const components = [
  {
    label: "Sheet",
    value: "sheet",
    source:
      "https://github.com/azbauer8/NextUI-Enhanced/blob/main/src/components/Sheet.tsx",
  },
  {
    label: "Drawer",
    value: "drawer",
    source:
      "https://github.com/azbauer8/NextUI-Enhanced/blob/main/src/components/Drawer.tsx",
  },
  {
    label: "Command Menu",
    value: "cmdk",
    source:
      "https://github.com/azbauer8/NextUI-Enhanced/blob/main/src/components/Cmdk.tsx",
  },
  {
    label: "Toast",
    value: "toast",
    source:
      "https://github.com/azbauer8/NextUI-Enhanced/blob/main/src/components/Toast.tsx",
  },
  {
    label: "Carousel",
    value: "carousel",
    source:
      "https://github.com/azbauer8/NextUI-Enhanced/blob/main/src/components/Carousel.tsx",
  },
  {
    label: "Resizeable",
    value: "resizeable",
    source:
      "https://github.com/azbauer8/NextUI-Enhanced/blob/main/src/components/Resizeable.tsx",
  },
  {
    label: "Landing Header",
    value: "landing-header",
    source:
      "https://github.com/azbauer8/NextUI-Enhanced/blob/main/src/components/LandingHeader.tsx",
  },
  {
    label: "Page Header",
    value: "page-header",
    source:
      "https://github.com/azbauer8/NextUI-Enhanced/blob/main/src/components/PageHeader.tsx",
  },
  {
    label: "Typography",
    value: "typography",
    source:
      "https://github.com/azbauer8/NextUI-Enhanced/blob/main/src/components/Typography.tsx",
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
