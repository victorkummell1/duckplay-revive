interface CardGameValuesProps {
  discount: number;
  price: number;
}

export function CardGameValues({ discount, price }: CardGameValuesProps) {

  const afterPrice = price - ( price * discount ) / 100;

  return (
    <section className="flex items-center gap-[18px]">
      <span className="font-semibold text-sm py-1 px-2 rounded bg-violet-500 text-white">-{discount}%</span>
      <div className="flex items-center gap-3">
        <span className="font-semibold text-lg line-through text-zinc-700">R$ {price.toFixed(2)}</span>
        <span className="font-semibold text-lg">R$ {afterPrice.toFixed(2)}</span>
      </div>
    </section>
  )
}