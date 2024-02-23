"use client"

import { Kbd, Modal, ModalContent } from "@nextui-org/react"
import clsx from "clsx"
import { Command } from "cmdk"
import { SearchIcon } from "lucide-react"
import React, { useMemo } from "react"
import { tv } from "tailwind-variants"

const cmdkVariants = tv({
  slots: {
    base: "max-h-full overflow-y-auto border-divider/10",
    header: [
      "flex",
      "items-center",
      "w-full",
      "px-4",
      "border-b",
      "border-default-400/50",
      "dark:border-default-100",
    ],
    searchIcon: "text-default-400 text-lg",
    input: [
      "w-full",
      "px-2",
      "h-14",
      "font-sans",
      "text-lg",
      "outline-none",
      "rounded-none",
      "bg-transparent",
      "text-default-700",
      "placeholder-default-500",
      "dark:text-default-500",
      "dark:placeholder:text-default-300",
    ],
    list: ["px-4", "mt-2", "pb-4", "overflow-y-auto", "max-h-[50vh]"],
    itemWrapper: [
      "px-4",
      "mt-2",
      "group",
      "flex",
      "h-16",
      "justify-between",
      "items-center",
      "rounded-lg",
      "shadow",
      "bg-content2/50",
      "active:opacity-70",
      "cursor-pointer",
      "transition-opacity",
      "aria-selected:bg-default-50",
      "dark:aria-selected:bg-default",
      "select-none",
      "w-full",
      "max-w-full",
    ],
    leftWrapper: ["flex", "gap-3", "items-center", "w-full", "max-w-full"],
    itemContent: [
      "flex-1",
      "flex",
      "flex-col",
      "gap-0",
      "ml-1",
      "justify-center",
      // "max-w-[80%]",
      "truncate",
    ],
    itemHeader: ["text-default-500", "text-xs"],
    emptyWrapper: [
      "flex",
      "flex-col",
      "text-center",
      "items-center",
      "justify-center",
      "h-32",
    ],
  },
})

const CmdkModal = React.forwardRef<
  React.ElementRef<typeof Modal>,
  React.ComponentPropsWithoutRef<typeof Modal>
>(({ className, children, ...props }, ref) => (
  <Modal
    className={className}
    {...props}
    ref={ref}
    hideCloseButton
    scrollBehavior="inside"
    size="xl"
    classNames={{
      base: [
        "mt-[20vh]",
        "border-small",
        "dark:border-default-100",
        "supports-[backdrop-filter]:bg-background/80",
        "dark:supports-[backdrop-filter]:bg-background/30",
        "supports-[backdrop-filter]:backdrop-blur-md",
        "supports-[backdrop-filter]:backdrop-saturate-150",
      ],
      backdrop: ["bg-black/80"],
    }}
  >
    <ModalContent>{children}</ModalContent>
  </Modal>
))

const Cmdk = React.forwardRef<
  React.ElementRef<typeof Command>,
  React.ComponentPropsWithoutRef<typeof Command>
>(({ className, ...props }, ref) => {
  const styles = React.useMemo(() => cmdkVariants(), [])
  return (
    <Command ref={ref} className={clsx(styles.base(), className)} {...props} />
  )
})
Cmdk.displayName = Command.displayName

const CmdkInput = React.forwardRef<
  React.ElementRef<typeof Command.Input>,
  React.ComponentPropsWithoutRef<typeof Command.Input>
>(({ className, ...props }, ref) => {
  const styles = React.useMemo(() => cmdkVariants(), [])
  return (
    <div className={styles.header()} cmdk-input-wrapper="">
      <SearchIcon className={styles.searchIcon()} strokeWidth={2} />
      <Command.Input
        ref={ref}
        autoFocus
        className={clsx(styles.input(), className)}
        {...props}
      />
    </div>
  )
})

CmdkInput.displayName = Command.Input.displayName

const CmdkList = React.forwardRef<
  React.ElementRef<typeof Command.List>,
  React.ComponentPropsWithoutRef<typeof Command.List>
>(({ className, ...props }, ref) => {
  const styles = React.useMemo(() => cmdkVariants(), [])
  return (
    <Command.List
      ref={ref}
      className={clsx(styles.list(), className)}
      {...props}
    />
  )
})

CmdkList.displayName = Command.List.displayName

const CmdkEmpty = React.forwardRef<
  React.ElementRef<typeof Command.Empty>,
  React.ComponentPropsWithoutRef<typeof Command.Empty>
>((props, ref) => {
  const styles = React.useMemo(() => cmdkVariants(), [])
  return (
    <Command.Empty ref={ref} className={styles.emptyWrapper()} {...props} />
  )
})

CmdkEmpty.displayName = Command.Empty.displayName

const CmdkGroup = React.forwardRef<
  React.ElementRef<typeof Command.Group>,
  React.ComponentPropsWithoutRef<typeof Command.Group>
>(({ heading, ...props }, ref) => (
  <Command.Group
    ref={ref}
    heading={
      <div className="flex items-center justify-between pt-1">{heading}</div>
    }
    {...props}
  />
))

CmdkGroup.displayName = Command.Group.displayName

const CmdkSeparator = React.forwardRef<
  React.ElementRef<typeof Command.Separator>,
  React.ComponentPropsWithoutRef<typeof Command.Separator>
>(({ className, ...props }, ref) => (
  <Command.Separator
    ref={ref}
    className={clsx("-mx-1 my-4 h-px bg-divider", className)}
    {...props}
  />
))
CmdkSeparator.displayName = Command.Separator.displayName

const CmdkItem = React.forwardRef<
  React.ElementRef<typeof Command.Item>,
  React.ComponentPropsWithoutRef<typeof Command.Item>
>(({ children, className, ...props }, ref) => {
  const styles = React.useMemo(() => cmdkVariants(), [])
  return (
    <Command.Item
      ref={ref}
      className={clsx(styles.itemWrapper(), className)}
      {...props}
    >
      <div className={styles.leftWrapper()}>{children}</div>
    </Command.Item>
  )
})

CmdkItem.displayName = Command.Item.displayName

const CmdkItemContent = ({
  children,
  className,
}: { children: React.ReactNode; className?: string }) => {
  const styles = useMemo(() => cmdkVariants(), [])
  return <div className={clsx(styles.itemContent(), className)}>{children}</div>
}

const CmdkItemHeader = ({
  children,
  className,
}: { children: React.ReactNode; className?: string }) => {
  const styles = useMemo(() => cmdkVariants(), [])
  return <div className={clsx(styles.itemHeader(), className)}>{children}</div>
}

const CmdkShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <Kbd
      className={clsx(
        "ml-auto text-xs tracking-widest text-default-600",
        className,
      )}
      {...props}
    />
  )
}
CmdkShortcut.displayName = "CommandShortcut"

export {
  cmdkVariants,
  CmdkModal,
  Cmdk,
  CmdkInput,
  CmdkList,
  CmdkEmpty,
  CmdkGroup,
  CmdkSeparator,
  CmdkItem,
  CmdkItemContent,
  CmdkItemHeader,
  CmdkShortcut,
}
