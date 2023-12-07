import Link from "next/link";
import { ReactNode } from "react";

interface HighlightsCardGameRootProps {
  children: ReactNode,
  link: string
}

export function HighlightsCardGameRoot({ children, link }: HighlightsCardGameRootProps) {
  return (
    <Link href={link} className="w-[1216px] flex flex-col items-start justify-center gap-8 bg-zinc-200 shadow p-8 transition-all hover:scale-[1.01] hover:shadow-xl">
      {children}
    </Link>
  )
}