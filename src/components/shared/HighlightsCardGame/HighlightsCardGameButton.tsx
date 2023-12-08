'use client'

import { useRouter } from "next/navigation";
import { Button } from "../../ui/button";

export function HighlightsCardGameButton() {

  const router = useRouter();

  return (
    <Button type="button" variant={"tertiary"} onClick={() => router.push('/store/id/equilinox')}>
      Visitar página do produto
    </Button>
  )
}