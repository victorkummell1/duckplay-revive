import { ReactNode } from "react"

interface FooterRootProps {
  children: ReactNode
}

export function FooterRoot({children}: FooterRootProps) {
  return (
    <footer className="w-full max-w-[1440px] flex items-center justify-between p-6">
      {children}
    </footer>
  )
}