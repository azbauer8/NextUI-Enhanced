import { Link } from "@nextui-org/react"

export default function Footer() {
  return (
    <footer className="border-t-[1px] border-divider py-6 md:px-8 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-balance text-center text-sm leading-loose text-default-500 md:text-left">
          Created by Zach Bauer. The source code is available on{" "}
          <Link
            title="Source code on GitHub"
            href="https://github.com/azbauer8/nextui-enhanced"
            isExternal
          >
            GitHub
          </Link>
          .
        </p>
      </div>
    </footer>
  )
}
