import Image from "next/image";
import { CardGame } from "../shared/CardGame";
import { FreeCardGame } from "../shared/FreeCardGame";
import { FreeSmallCardGame } from "../shared/FreeSmallCardGame";
import { ReleaseCardGame } from "../shared/ReleaseCardGame";
import { Button } from "../ui/button";
import { HighlightsCardGame } from "../shared/HighlightsCardGame";

export function HomePage() {
  return (
    <main className="min-h-[calc(100vh-160px)] py-24 flex flex-col items-center justify-center gap-[100px] scroll-smooth">
      <section className="w-[1216px] flex flex-col items-start justify-center gap-10">
        <h1 className="font-semibold text-2xl">Lançamentos</h1>
        <section className="w-full flex items-center justify-start flex-wrap gap-8">
          <ReleaseCardGame.Root link="/store/id/equilinox">
              <ReleaseCardGame.Image link="https://i.imgur.com/nlvlHET.png" alt="Equilinox Logo Image"/>
              <section className="w-full flex flex-col items-start gap-3 p-3">
                <ReleaseCardGame.Title text="Equilinox"/>
                <ReleaseCardGame.Description text="Equilinox é um relaxante jogo de simulação da natureza no qual você pode criar e nutrir seus próprios ecossistemas. Molde o mundo ao seu gosto, cultive e crie centenas de espécies diferentes e evolua sua vida selvagem para desbloquear plantas e animais mais exóticos." />
              </section>
          </ReleaseCardGame.Root>
          <ReleaseCardGame.Root link="/store/id/equilinox">
              <ReleaseCardGame.Image link="https://i.imgur.com/nlvlHET.png" alt="Equilinox Logo Image"/>
              <section className="w-full flex flex-col items-start gap-3 p-3">
                <ReleaseCardGame.Title text="Equilinox"/>
                <ReleaseCardGame.Description text="Equilinox é um relaxante jogo de simulação da natureza no qual você pode criar e nutrir seus próprios ecossistemas. Molde o mundo ao seu gosto, cultive e crie centenas de espécies diferentes e evolua sua vida selvagem para desbloquear plantas e animais mais exóticos." />
              </section>
          </ReleaseCardGame.Root>
          <ReleaseCardGame.Root link="/store/id/equilinox">
              <ReleaseCardGame.Image link="https://i.imgur.com/nlvlHET.png" alt="Equilinox Logo Image"/>
              <section className="w-full flex flex-col items-start gap-3 p-3">
                <ReleaseCardGame.Title text="Equilinox"/>
                <ReleaseCardGame.Description text="Equilinox é um relaxante jogo de simulação da natureza no qual você pode criar e nutrir seus próprios ecossistemas. Molde o mundo ao seu gosto, cultive e crie centenas de espécies diferentes e evolua sua vida selvagem para desbloquear plantas e animais mais exóticos." />
              </section>
          </ReleaseCardGame.Root>
          <ReleaseCardGame.Root link="/store/id/equilinox">
              <ReleaseCardGame.Image link="https://i.imgur.com/nlvlHET.png" alt="Equilinox Logo Image"/>
              <section className="w-full flex flex-col items-start gap-3 p-3">
                <ReleaseCardGame.Title text="Equilinox"/>
                <ReleaseCardGame.Description text="Equilinox é um relaxante jogo de simulação da natureza no qual você pode criar e nutrir seus próprios ecossistemas. Molde o mundo ao seu gosto, cultive e crie centenas de espécies diferentes e evolua sua vida selvagem para desbloquear plantas e animais mais exóticos." />
              </section>
          </ReleaseCardGame.Root>
        </section>
      </section>
      <section className="w-[1216px] flex flex-col items-start justify-center gap-10">
        <h1 className="font-semibold text-2xl">Jogos Gratuitos</h1>
        <section className="w-full flex items-center justify-start flex-wrap gap-8">
          <FreeCardGame.Root link="/store/id/equilinox">
            <FreeCardGame.Image link="https://i.imgur.com/Aadp15t.png" alt="Equilinox Logo Image"/>
            <section className="flex flex-col items-start gap-7 p-8">
              <section className="flex flex-col items-start">
                <FreeCardGame.Title text="Equilinox" />
                <FreeCardGame.Description text="Oferta válida até 19 de abr. de 2024 às 14h"/>
              </section>
              <FreeCardGame.Values discount={100} price={42.50}/>
            </section>
          </FreeCardGame.Root>
          <FreeCardGame.Root link="/store/id/equilinox">
            <FreeCardGame.Image link="https://i.imgur.com/Aadp15t.png" alt="Equilinox Logo Image"/>
            <section className="flex flex-col items-start gap-7 p-8">
              <section className="flex flex-col items-start">
                <FreeCardGame.Title text="Equilinox" />
                <FreeCardGame.Description text="Oferta válida até 19 de abr. de 2024 às 14h"/>
              </section>
              <FreeCardGame.Values discount={100} price={42.50}/>
            </section>
          </FreeCardGame.Root>
          <section className="flex flex-col items-start justify-start gap-8">
            <FreeSmallCardGame.Root link="/store/id/equilinox">
              <FreeSmallCardGame.Image link="https://i.imgur.com/nlvlHET.png" alt="Equilinox Logo Image"/>
              <section className="w-full flex items-center justify-between p-2">
                <FreeSmallCardGame.Title title="Oferta do Dia!"/>
                <FreeSmallCardGame.Value discount={100} price={20.69}/>
              </section>
            </FreeSmallCardGame.Root>
            <FreeSmallCardGame.Root link="/store/id/equilinox">
              <FreeSmallCardGame.Image link="https://i.imgur.com/nlvlHET.png" alt="Equilinox Logo Image"/>
              <section className="w-full flex items-center justify-between p-2">
                <FreeSmallCardGame.Title title="Oferta do Dia!"/>
                <FreeSmallCardGame.Value discount={100} price={20.69}/>
              </section>
            </FreeSmallCardGame.Root>
          </section>
        </section>
      </section>
      <section className="w-[1216px] flex flex-col items-start justify-center gap-10">
        <h1 className="font-semibold text-2xl">Destaques</h1>
        <section className="w-full flex flex-col items-start justify-center gap-10">
          <HighlightsCardGame.Root>
            <section className="w-full flex items-start justify-between">
              <div className="flex flex-col items-start justify-center gap-3">
                <HighlightsCardGame.Title text="Equilinox" />
                <HighlightsCardGame.Description text="Para aqueles que curtem" category="Gerenciamento" />
              </div>
              <HighlightsCardGame.Button />
            </section>
            <section className="w-full flex items-center justify-between">
              <HighlightsCardGame.Images />
            </section>
            <section className="w-full flex items-center justify-start gap-6">
              <HighlightsCardGame.Values discount={20} price={20.69}/>
            </section>
          </HighlightsCardGame.Root>
          <HighlightsCardGame.Root>
            <section className="w-full flex items-start justify-between">
              <div className="flex flex-col items-start justify-center gap-3">
                <HighlightsCardGame.Title text="Equilinox" />
                <HighlightsCardGame.Description text="Para aqueles que curtem" category="Gerenciamento" />
              </div>
              <HighlightsCardGame.Button />
            </section>
            <section className="w-full flex items-center justify-between">
              <HighlightsCardGame.Images />
            </section>
            <section className="w-full flex items-center justify-start gap-6">
              <HighlightsCardGame.Values discount={20} price={20.69}/>
            </section>
          </HighlightsCardGame.Root>
        </section>
      </section>
      <section className="w-[1216px] flex flex-col items-start justify-center gap-10">
        <h1 className="font-semibold text-2xl">Todos os Jogos</h1>
        <section className="w-full flex items-center justify-start flex-wrap gap-8">
          <CardGame.Root link="/store/id/equilinox">
            <CardGame.Image link="https://i.imgur.com/nKbgRmd.jpg" alt="Equilinox Game Logo"/>
            <section className="w-full flex flex-col items-start gap-4 p-3">
              <CardGame.Title text="Equilinox"/>
              <CardGame.Values discount={20} price={20.69} />
            </section>
          </CardGame.Root>
          <CardGame.Root link="/store/id/equilinox">
            <CardGame.Image link="https://i.imgur.com/nKbgRmd.jpg" alt="Equilinox Game Logo"/>
            <section className="w-full flex flex-col items-start gap-4 p-3">
              <CardGame.Title text="Equilinox"/>
              <CardGame.Values discount={20} price={20.69} />
            </section>
          </CardGame.Root>
          <CardGame.Root link="/store/id/equilinox">
            <CardGame.Image link="https://i.imgur.com/nKbgRmd.jpg" alt="Equilinox Game Logo"/>
            <section className="w-full flex flex-col items-start gap-4 p-3">
              <CardGame.Title text="Equilinox"/>
              <CardGame.Values discount={20} price={20.69} />
            </section>
          </CardGame.Root>
          <CardGame.Root link="/store/id/equilinox">
            <CardGame.Image link="https://i.imgur.com/nKbgRmd.jpg" alt="Equilinox Game Logo"/>
            <section className="w-full flex flex-col items-start gap-4 p-3">
              <CardGame.Title text="Equilinox"/>
              <CardGame.Values discount={20} price={20.69} />
            </section>
          </CardGame.Root>
          <CardGame.Root link="/store/id/equilinox">
            <CardGame.Image link="https://i.imgur.com/nKbgRmd.jpg" alt="Equilinox Game Logo"/>
            <section className="w-full flex flex-col items-start gap-4 p-3">
              <CardGame.Title text="Equilinox"/>
              <CardGame.Values discount={20} price={20.69} />
            </section>
          </CardGame.Root>
          <CardGame.Root link="/store/id/equilinox">
            <CardGame.Image link="https://i.imgur.com/nKbgRmd.jpg" alt="Equilinox Game Logo"/>
            <section className="w-full flex flex-col items-start gap-4 p-3">
              <CardGame.Title text="Equilinox"/>
              <CardGame.Values discount={20} price={20.69} />
            </section>
          </CardGame.Root>
          <CardGame.Root link="/store/id/equilinox">
            <CardGame.Image link="https://i.imgur.com/nKbgRmd.jpg" alt="Equilinox Game Logo"/>
            <section className="w-full flex flex-col items-start gap-4 p-3">
              <CardGame.Title text="Equilinox"/>
              <CardGame.Values discount={20} price={20.69} />
            </section>
          </CardGame.Root>
          <CardGame.Root link="/store/id/equilinox">
            <CardGame.Image link="https://i.imgur.com/nKbgRmd.jpg" alt="Equilinox Game Logo"/>
            <section className="w-full flex flex-col items-start gap-4 p-3">
              <CardGame.Title text="Equilinox"/>
              <CardGame.Values discount={20} price={20.69} />
            </section>
          </CardGame.Root>
          <CardGame.Root link="/store/id/equilinox">
            <CardGame.Image link="https://i.imgur.com/nKbgRmd.jpg" alt="Equilinox Game Logo"/>
            <section className="w-full flex flex-col items-start gap-4 p-3">
              <CardGame.Title text="Equilinox"/>
              <CardGame.Values discount={20} price={20.69} />
            </section>
          </CardGame.Root>
          <CardGame.Root link="/store/id/equilinox">
            <CardGame.Image link="https://i.imgur.com/nKbgRmd.jpg" alt="Equilinox Game Logo"/>
            <section className="w-full flex flex-col items-start gap-4 p-3">
              <CardGame.Title text="Equilinox"/>
              <CardGame.Values discount={20} price={20.69} />
            </section>
          </CardGame.Root>
          <CardGame.Root link="/store/id/equilinox">
            <CardGame.Image link="https://i.imgur.com/nKbgRmd.jpg" alt="Equilinox Game Logo"/>
            <section className="w-full flex flex-col items-start gap-4 p-3">
              <CardGame.Title text="Equilinox"/>
              <CardGame.Values discount={20} price={20.69} />
            </section>
          </CardGame.Root>
          <CardGame.Root link="/store/id/equilinox">
            <CardGame.Image link="https://i.imgur.com/nKbgRmd.jpg" alt="Equilinox Game Logo"/>
            <section className="w-full flex flex-col items-start gap-4 p-3">
              <CardGame.Title text="Equilinox"/>
              <CardGame.Values discount={20} price={20.69} />
            </section>
          </CardGame.Root>
          <CardGame.Root link="/store/id/equilinox">
            <CardGame.Image link="https://i.imgur.com/nKbgRmd.jpg" alt="Equilinox Game Logo"/>
            <section className="w-full flex flex-col items-start gap-4 p-3">
              <CardGame.Title text="Equilinox"/>
              <CardGame.Values discount={20} price={20.69} />
            </section>
          </CardGame.Root>
          <CardGame.Root link="/store/id/equilinox">
            <CardGame.Image link="https://i.imgur.com/nKbgRmd.jpg" alt="Equilinox Game Logo"/>
            <section className="w-full flex flex-col items-start gap-4 p-3">
              <CardGame.Title text="Equilinox"/>
              <CardGame.Values discount={20} price={20.69} />
            </section>
          </CardGame.Root>
          <CardGame.Root link="/store/id/equilinox">
            <CardGame.Image link="https://i.imgur.com/nKbgRmd.jpg" alt="Equilinox Game Logo"/>
            <section className="w-full flex flex-col items-start gap-4 p-3">
              <CardGame.Title text="Equilinox"/>
              <CardGame.Values discount={20} price={20.69} />
            </section>
          </CardGame.Root>
          <CardGame.Root link="/store/id/equilinox">
            <CardGame.Image link="https://i.imgur.com/nKbgRmd.jpg" alt="Equilinox Game Logo"/>
            <section className="w-full flex flex-col items-start gap-4 p-3">
              <CardGame.Title text="Equilinox"/>
              <CardGame.Values discount={20} price={20.69} />
            </section>
          </CardGame.Root>
          <CardGame.Root link="/store/id/equilinox">
            <CardGame.Image link="https://i.imgur.com/nKbgRmd.jpg" alt="Equilinox Game Logo"/>
            <section className="w-full flex flex-col items-start gap-4 p-3">
              <CardGame.Title text="Equilinox"/>
              <CardGame.Values discount={20} price={20.69} />
            </section>
          </CardGame.Root>
          <CardGame.Root link="/store/id/equilinox">
            <CardGame.Image link="https://i.imgur.com/nKbgRmd.jpg" alt="Equilinox Game Logo"/>
            <section className="w-full flex flex-col items-start gap-4 p-3">
              <CardGame.Title text="Equilinox"/>
              <CardGame.Values discount={20} price={20.69} />
            </section>
          </CardGame.Root>
          <CardGame.Root link="/store/id/equilinox">
            <CardGame.Image link="https://i.imgur.com/nKbgRmd.jpg" alt="Equilinox Game Logo"/>
            <section className="w-full flex flex-col items-start gap-4 p-3">
              <CardGame.Title text="Equilinox"/>
              <CardGame.Values discount={20} price={20.69} />
            </section>
          </CardGame.Root>
          <CardGame.Root link="/store/id/equilinox">
            <CardGame.Image link="https://i.imgur.com/nKbgRmd.jpg" alt="Equilinox Game Logo"/>
            <section className="w-full flex flex-col items-start gap-4 p-3">
              <CardGame.Title text="Equilinox"/>
              <CardGame.Values discount={20} price={20.69} />
            </section>
          </CardGame.Root>
          <CardGame.Root link="/store/id/equilinox">
            <CardGame.Image link="https://i.imgur.com/nKbgRmd.jpg" alt="Equilinox Game Logo"/>
            <section className="w-full flex flex-col items-start gap-4 p-3">
              <CardGame.Title text="Equilinox"/>
              <CardGame.Values discount={20} price={20.69} />
            </section>
          </CardGame.Root>
          <CardGame.Root link="/store/id/equilinox">
            <CardGame.Image link="https://i.imgur.com/nKbgRmd.jpg" alt="Equilinox Game Logo"/>
            <section className="w-full flex flex-col items-start gap-4 p-3">
              <CardGame.Title text="Equilinox"/>
              <CardGame.Values discount={20} price={20.69} />
            </section>
          </CardGame.Root>
          <CardGame.Root link="/store/id/equilinox">
            <CardGame.Image link="https://i.imgur.com/nKbgRmd.jpg" alt="Equilinox Game Logo"/>
            <section className="w-full flex flex-col items-start gap-4 p-3">
              <CardGame.Title text="Equilinox"/>
              <CardGame.Values discount={20} price={20.69} />
            </section>
          </CardGame.Root>
          <CardGame.Root link="/store/id/equilinox">
            <CardGame.Image link="https://i.imgur.com/nKbgRmd.jpg" alt="Equilinox Game Logo"/>
            <section className="w-full flex flex-col items-start gap-4 p-3">
              <CardGame.Title text="Equilinox"/>
              <CardGame.Values discount={20} price={20.69} />
            </section>
          </CardGame.Root>
        </section>
      </section>
    </main>
  )
}