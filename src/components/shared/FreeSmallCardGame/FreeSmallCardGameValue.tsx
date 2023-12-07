interface FreeSmallCardGameValueProps {
  discount: number,
  price: number,
}

export function FreeSmallCardGameValue({ discount, price }: FreeSmallCardGameValueProps) {
  
  const afterDiscount = price - ( price * discount ) / 100
  
  return (
    <div className="flex items-center gap-4">
      <span className="font-semibold text-lg py-1 px-2 rounded bg-violet-500 text-white">-{discount}%</span>
      <span className="font-semibold text-lg">R$ {afterDiscount.toFixed(2)}</span>
    </div>
  )
}