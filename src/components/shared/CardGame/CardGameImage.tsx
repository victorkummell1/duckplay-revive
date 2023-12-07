import Image from "next/image";

interface CardGameImageProps {
  link: string;
  alt: string;
}

export function CardGameImage({ link, alt }: CardGameImageProps) {
  return (
    <Image src={link} width={352} height={160} alt={alt} className="rounded-t"/>
  )
}