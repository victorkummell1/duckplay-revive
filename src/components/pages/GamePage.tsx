import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { DiLinux, DiWindows, DiApple } from "react-icons/di";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

export function GamePage() {
  return (
    <main className="min-h-[calc(100vh-160px)] py-24 flex flex-col items-center justify-center gap-[100px] scroll-smooth">
      <div className="w-[1216px] flex flex-col items-start justify-center gap-6">
        <section className="w-full flex items-center justify-between">
          <h1 className="font-light text-5xl">Equilinox</h1>
          <div className="flex items-center gap-3">
            <Tooltip>
              <TooltipTrigger>
                <DiWindows className="w-6 h-6"/>
              </TooltipTrigger>
              <TooltipContent>
                <p>Compativel com Windows</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>
                <DiLinux className="w-6 h-6"/>
              </TooltipTrigger>
              <TooltipContent>
                <p>Compativel com Linux</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
            <TooltipTrigger>
              <DiApple className="w-6 h-6"/>
            </TooltipTrigger>
            <TooltipContent>
              <p>Compativel com MacOs</p>
            </TooltipContent>
          </Tooltip>
          </div>
        </section>
        <section className="w-full flex flex-col items-start justify-start gap-4">
          <section className="w-full flex items-start justify-between">
            <section className="flex flex-col items-center justify-center gap-4">
              <div className="w-[800px] h-[450px] bg-violet-500"/>
              <section className="w-full flex items-center justify-between">
                <div className="w-[182px] h-[100px] bg-violet-500"/>
                <div className="w-[182px] h-[100px] bg-violet-500"/>
                <div className="w-[182px] h-[100px] bg-violet-500"/>
                <div className="w-[182px] h-[100px] bg-violet-500"/>
              </section>
            </section>
            <section className="w-[384px] h-[566px] flex flex-col items-center justify-between gap-4">
              <section className="w-full flex flex-col items-start justify-start gap-6">
                <div className="w-[384px] h-[216px] bg-violet-500"/>
                <p className="w-full text-zinc-700 font-normal text-lg">
                Equilinox é um relaxante jogo de simulação da natureza no qual você pode criar e nutrir seus próprios ecossistemas. Molde o mundo ao seu gosto, cultive e crie centenas de espécies diferentes e evolua sua vida selvagem para desbloquear plantas e animais mais exóticos.
                </p>
              </section>
              <section className="w-full flex flex-col items-start justify-center gap-2">
                <section className="w-full flex items-center justify-start gap-4">
                  <span className="font-semibold text-lg py-1 px-2 rounded bg-violet-500 text-white">-100%</span>
                  <div className="flex items-center gap-4">
                    <span className="font-semibold text-lg line-through text-zinc-700">R$ 20.69</span>
                    <span className="font-semibold text-lg">R$ 0.00</span>
                  </div>
                </section>
                <Button type="button" variant={"tertiary"} className="w-full uppercase">
                  Comprar Agora
                </Button>
              </section>
            </section>
          </section>
          <section className="w-full flex items-center justify-between">
            <section className="flex flex-col items-start justify-center">
              <span className="text-base font-normal">Marcadores populares para este produto:</span>
              <div className="flex items-center gap-1">
                <Badge variant={"tertiary"}>Simulação</Badge>
                <Badge variant={"tertiary"}>Indie</Badge>
                <Badge variant={"tertiary"}>Casual</Badge>
                <Badge variant={"tertiary"}>Faça o que Quiser</Badge>
                <Badge variant={"tertiary"}>+</Badge>
              </div>
            </section>
            <section className="flex flex-col items-start justify-center">
              <span className="text-base font-normal">Desenvolvedor:</span>
              <span className="text-violet-500 text-base font-semibold">ThinMatrix</span>
            </section>
            <section className="flex flex-col items-start justify-center">
              <span className="text-base font-normal">Distribuidora:</span>
              <span className="text-violet-500 text-base font-semibold">ThinMatrix</span>
            </section>
            <section className="flex flex-col items-start justify-center">
              <span className="text-base font-normal">Data de Lançamento:</span>
              <span className="text-violet-500 text-base font-semibold">23/Nov./2018</span>
            </section>
          </section>
        </section>
      </div>
    </main>
  )
}