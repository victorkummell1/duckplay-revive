import Image from "next/image";

interface FreedCardGameImageProps {
  link: string;
  alt: string;
}

export default function FreeCardGameImage({ link, alt }: FreedCardGameImageProps) {
  return (
    <Image src={link} width={400} height={288} alt={alt} className="w-[400px] h-[288px]"/>
  )
}