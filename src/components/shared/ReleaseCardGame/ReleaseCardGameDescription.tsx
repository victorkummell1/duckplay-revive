interface ReleaseCardGameDescriptionProps {
  text: string;
}

export function ReleaseCardGameDescription({ text }: ReleaseCardGameDescriptionProps) {
  return (
    <p className="font-medium text-sm text-zinc-700 line-clamp-3">{text}</p>
  )
}