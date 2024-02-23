import {
  Cmdk,
  CmdkEmpty,
  CmdkGroup,
  CmdkInput,
  CmdkItem,
  CmdkItemContent,
  CmdkItemHeader,
  CmdkList,
  CmdkModal,
  CmdkSeparator,
  CmdkShortcut,
} from "@/components/Cmdk"
import { Button } from "@nextui-org/react"
import { Calculator, Calendar, Settings, User } from "lucide-react"
import { useState } from "react"

export function DemoCmdk() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <div className="w-full flex justify-center">
        <Button size="lg" onClick={() => setOpen(true)}>
          Open Command
        </Button>
      </div>
      <CmdkModal isOpen={open} onOpenChange={setOpen}>
        <Cmdk className="rounded-lg border shadow-md">
          <CmdkInput placeholder="Search for something..." />
          <CmdkList>
            <CmdkEmpty>No results found.</CmdkEmpty>
            <CmdkGroup heading="Suggestions">
              <CmdkItem>
                <Calendar className="size-4" />
                <CmdkItemContent>
                  <CmdkItemHeader>Header</CmdkItemHeader>
                  Calendar
                </CmdkItemContent>
                <CmdkShortcut>⌘C</CmdkShortcut>
              </CmdkItem>
              <CmdkItem>
                <User className="size-4" />
                <CmdkItemContent>Profile</CmdkItemContent>
                <CmdkShortcut>⌘P</CmdkShortcut>
              </CmdkItem>
              <CmdkItem>
                <Calculator className="size-4" />
                <CmdkItemContent>Tasks</CmdkItemContent>
                <CmdkShortcut>⌘T</CmdkShortcut>
              </CmdkItem>
            </CmdkGroup>
            <CmdkSeparator />
            <CmdkGroup heading="Other">
              <CmdkItem>
                <Settings className="size-4" />
                <CmdkItemContent>Settings</CmdkItemContent>
                <CmdkShortcut>⌘S</CmdkShortcut>
              </CmdkItem>
            </CmdkGroup>
          </CmdkList>
        </Cmdk>
      </CmdkModal>
    </>
  )
}
