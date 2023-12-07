import Link from "next/link";
import { ArrowLeftIcon } from '@radix-ui/react-icons'

export default function NotFound() {
  return (
    <main className="h-[calc(100vh-160px)] flex flex-col items-center justify-center gap-8">
      <section className="flex flex-col items-center justify-center">
        <span className="font-extrabold text-8xl text-violet-500">404 ERRO</span>
        <h1 className="font-medium text-xl text-zinc-800 tracking-widest">Ops! Página não encontrada 🥺</h1>
      </section>
      <Link href={'/'} className="flex items-center gap-2 text-zinc-800 hover:text-zinc-950">
        <ArrowLeftIcon />
        Voltar ao Inicio
      </Link>
    </main>
  )
}