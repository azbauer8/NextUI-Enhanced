import { Sheet, SheetBody, SheetContent, SheetHeader } from "@/components/Sheet"
import { Button, ModalFooter } from "@nextui-org/react"
import { useState } from "react"

export function DemoSheet() {
  const [leftOpen, setLeftOpen] = useState(false)
  const [rightOpen, setRightOpen] = useState(false)

  return (
    <>
      <div className="flex gap-5 justify-center w-full">
        <Button size="lg" onPress={() => setLeftOpen(true)}>
          Open Sheet Left
        </Button>
        <Button size="lg" onPress={() => setRightOpen(true)}>
          Open Sheet Right
        </Button>
      </div>
      <Sheet side="left" isOpen={leftOpen} onOpenChange={setLeftOpen}>
        <SheetContent>
          <SheetHeader className="flex flex-col gap-1">Modal Title</SheetHeader>
          <SheetBody>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              pulvinar risus non risus hendrerit venenatis. Pellentesque sit
              amet hendrerit risus, sed porttitor quam.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              pulvinar risus non risus hendrerit venenatis. Pellentesque sit
              amet hendrerit risus, sed porttitor quam.
            </p>
            <p>
              Magna exercitation reprehenderit magna aute tempor cupidatat
              consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex
              incididunt cillum quis. Velit duis sit officia eiusmod Lorem
              aliqua enim laboris do dolor eiusmod. Et mollit incididunt nisi
              consectetur esse laborum eiusmod pariatur proident Lorem eiusmod
              et. Culpa deserunt nostrud ad veniam.
            </p>
          </SheetBody>
          <ModalFooter>Footer</ModalFooter>
        </SheetContent>
      </Sheet>
      <Sheet side="right" isOpen={rightOpen} onOpenChange={setRightOpen}>
        <SheetContent>
          <SheetHeader className="flex flex-col gap-1">Modal Title</SheetHeader>
          <SheetBody>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              pulvinar risus non risus hendrerit venenatis. Pellentesque sit
              amet hendrerit risus, sed porttitor quam.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              pulvinar risus non risus hendrerit venenatis. Pellentesque sit
              amet hendrerit risus, sed porttitor quam.
            </p>
            <p>
              Magna exercitation reprehenderit magna aute tempor cupidatat
              consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex
              incididunt cillum quis. Velit duis sit officia eiusmod Lorem
              aliqua enim laboris do dolor eiusmod. Et mollit incididunt nisi
              consectetur esse laborum eiusmod pariatur proident Lorem eiusmod
              et. Culpa deserunt nostrud ad veniam.
            </p>
          </SheetBody>
          <ModalFooter>Footer</ModalFooter>
        </SheetContent>
      </Sheet>
    </>
  )
}
