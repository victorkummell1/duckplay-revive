interface ReleaseCardGameTitleProps {
  text: string;
}

export function ReleaseCardGameTitle({ text }: ReleaseCardGameTitleProps) {
  return (
    <span className="font-medium text-base">{text}</span>
  )
}