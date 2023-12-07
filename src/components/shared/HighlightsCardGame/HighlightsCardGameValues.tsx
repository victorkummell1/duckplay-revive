interface HighlightsCardGameValuesProps {
  discount: number,
  price: number,
}

export function HighlightsCardGameValues({ discount, price }: HighlightsCardGameValuesProps) {
  
  const afterDiscount = price - ( price * discount ) / 100
  
  return (
    <section className="w-full flex items-center justify-start gap-6">
      <span className="font-semibold text-lg py-1 px-2 rounded bg-violet-500 text-white">-{discount}%</span>
      <div className="flex items-center gap-4">
        <span className="font-semibold text-lg line-through text-zinc-700">R$ {price.toFixed(2)}</span>
        <span className="font-semibold text-lg">R$ {afterDiscount.toFixed(2)}</span>
      </div>
    </section>
  )
}