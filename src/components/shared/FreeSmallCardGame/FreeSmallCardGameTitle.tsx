interface FreeSmallCardGameTitleProps {
  title: string;
}

export function FreeSmallCardGameTitle({ title }: FreeSmallCardGameTitleProps) {
  return (
    <span className="font-medium text-lg">{title}</span>
  )
}