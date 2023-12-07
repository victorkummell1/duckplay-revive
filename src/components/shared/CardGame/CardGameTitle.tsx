interface CardGameTitleProps {
  text: string;
}

export function CardGameTitle({ text }: CardGameTitleProps) {
  return (
    <span className="font-medium text-base">{text}</span>
  )
}