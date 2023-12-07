import Image from "next/image";

interface FreeSmallCardGameImageProps {
  link: string,
  alt: string,
}

export function FreeSmallCardGameImage({ link, alt }: FreeSmallCardGameImageProps) {
  return (
    <Image src={link} width={352} height={160} alt={alt} className="rounded-t"/>
  )
}