import { ReactNode } from "react"

interface HeaderRootProps {
  children: ReactNode
}

export function HeaderRoot({children}: HeaderRootProps) {
  return (
    <header className="w-full max-w-[1440px] flex items-center justify-between">
      {children}
    </header>
  )
}