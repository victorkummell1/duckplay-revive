import Link from "next/link";

export function FooterCopyright() {
  return (
    <section className="flex items-center gap-1">
      <Link href={'https://www.victorkummell.com/'} target="_blank" className="font-medium text-sm text-zinc-800 hover:text-zinc-950">© 2023 Duckplay Entertainment. Todos os Direitos Reservados.</Link>
    </section>
  )
}