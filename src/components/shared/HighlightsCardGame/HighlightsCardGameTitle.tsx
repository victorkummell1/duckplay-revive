interface HighlightsCardGameTitleProps {
  text: string
}

export function HighlightsCardGameTitle({ text }: HighlightsCardGameTitleProps) {
  return (
    <span className="font-medium text-2xl">{text}</span>
  )
}