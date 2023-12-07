interface FreeCardGameTitleProps {
  text: string;
}

export function FreeCardGameTitle({ text }: FreeCardGameTitleProps) {
  return (
    <span className="font-medium text-2xl">{text}</span>
  )
}