import { ReactNode } from "react";

interface HighlightsCardGameRootProps {
  children: ReactNode,
}

export function HighlightsCardGameRoot({ children }: HighlightsCardGameRootProps) {
  return (
    <section className="w-[1216px] flex flex-col items-start justify-center gap-8 bg-zinc-200 shadow p-8 transition-all hover:scale-[1.01] hover:shadow-xl">
      {children}
    </section>
  )
}