import { Button } from "@nextui-org/react"
import { toast } from "sonner"

export default function DemoToast() {
  return (
    <div className="w-full flex justify-center">
      <Button
        size="lg"
        onClick={() =>
          toast.success("Event has been created.", {
            duration: 10000,
            description: "Event has been created.",
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
            cancel: {
              label: "Cancel",
              onClick: () => console.log("Cancel!"),
            },
          })
        }
      >
        Send Toast
      </Button>
    </div>
  )
}
