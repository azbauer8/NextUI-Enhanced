import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/Resizeable"

export function DemoResizeable() {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="min-h-[200px] rounded-lg border border-divider max-w-3xl mx-auto"
    >
      <ResizablePanel defaultSize={25} minSize={5}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Sidebar</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={75} minSize={75}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Content</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
