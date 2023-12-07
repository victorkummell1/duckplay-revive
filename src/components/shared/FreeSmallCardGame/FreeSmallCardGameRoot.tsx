import Link from "next/link"
import { ReactNode } from "react"

interface FreeSmallCardGameRootProps {
  children: ReactNode,
  link: string
}

export function FreeSmallCardGameRoot({ children, link }: FreeSmallCardGameRootProps) {
  return (
    <Link href={link} className="w-[352px] h-[217px] flex flex-col items-start justify-between rounded bg-zinc-200 shadow transition-all hover:scale-105 hover:shadow-xl">
      {children}
    </Link>
  )
}