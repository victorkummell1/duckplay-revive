import Image from "next/image";

export function HighlightsCardGameImages() {
  return (
    <section className="w-full flex items-center justify-between ">
      <Image src={'https://i.imgur.com/nKbgRmd.jpg'} width={275} height={150} alt="" className="transition-all hover:scale-105 hover:shadow-xl"/>
      <Image src={'https://i.imgur.com/nKbgRmd.jpg'} width={275} height={150} alt="" className="transition-all hover:scale-105 hover:shadow-xl"/>
      <Image src={'https://i.imgur.com/nKbgRmd.jpg'} width={275} height={150} alt="" className="transition-all hover:scale-105 hover:shadow-xl"/>
      <Image src={'https://i.imgur.com/nKbgRmd.jpg'} width={275} height={150} alt="" className="transition-all hover:scale-105 hover:shadow-xl"/>
    </section>
  )
}