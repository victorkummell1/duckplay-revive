import Link from "next/link"
import { ReactNode } from "react"

interface FreeCardGameRootProps {
  children: ReactNode
  link: string,
}
export default function FreeCardGameRoot({ children, link }: FreeCardGameRootProps) {
  return (
    <Link href={link} className="w-[400px] h-[466px] flex flex-col items-start justify-between rounded bg-zinc-200 shadow transition-all hover:scale-105 hover:shadow-xl">
      {children}
    </Link>
  )
}