import Image from "next/image";

interface ReleaseCardGameImageProps {
  link: string;
  alt: string;
}

export function ReleaseCardGameImage({ link, alt }: ReleaseCardGameImageProps) {
  return (
    <Image src={link} width={352} height={160} alt={alt} className="rounded-t"/>
  )
}