import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/Drawer"
import { Button } from "@nextui-org/react"
export default function DemoDrawer() {
  return (
    <div className="w-full flex justify-center">
      <Drawer>
        <DrawerTrigger asChild>
          <Button size="lg">Open Drawer</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Title</DrawerTitle>
            <DrawerDescription>Description</DrawerDescription>
          </DrawerHeader>
          <div className="mx-auto w-3/4">
            Imagine this is a fancy chart or something.
            <div className="h-40 w-full rounded-md bg-default-300" />
          </div>
          <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose asChild>
              <Button>Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  )
}
