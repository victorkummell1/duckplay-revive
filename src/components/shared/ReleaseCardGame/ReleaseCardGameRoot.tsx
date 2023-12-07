import Link from "next/link"
import { ReactNode } from "react"

interface ReleaseCardGameRootProps {
  children: ReactNode,
  link: string
}

export function ReleaseCardGameRoot({ children, link }: ReleaseCardGameRootProps) {
  return (
    <Link href={link} className="w-[280px] flex flex-col items-start justify-between rounded bg-zinc-200 shadow transition-all hover:scale-105 hover:shadow-xl">
      {children}
    </Link>
  )
}