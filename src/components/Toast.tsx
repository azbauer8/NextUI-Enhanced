"use client"

import { Toaster as Sonner } from "sonner"

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-divider group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-default-500",
          actionButton:
            "group-[.toast]:bg-foreground group-[.toast]:text-background group-[.toast]:ml-0",
          cancelButton:
            "group-[.toast]:bg-content3 group-[.toast]:text-content1-foreground",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
