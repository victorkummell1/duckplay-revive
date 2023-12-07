interface HighlightsCardGameDescriptionProps {
  text: string;
  category: string;
}

export function HighlightsCardGameDescription({ text, category }: HighlightsCardGameDescriptionProps) {
  return (
    <p className="font-medium text-lg text-zinc-700">{text} <span className="text-zinc-800">{category}</span></p>
  )
}