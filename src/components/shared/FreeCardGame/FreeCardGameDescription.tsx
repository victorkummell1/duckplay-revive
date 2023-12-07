interface FreeCardGameDescriptionProps {
  text: string;
}

export function FreeCardGameDescription({ text }: FreeCardGameDescriptionProps) {
  return (
    <p className="font-medium text-base text-zinc-700">{text}</p>
  )
}