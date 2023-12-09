import { GamePage } from "@rocketseat/eslint-config/components/pages/GamePage";
import { TooltipProvider } from "@rocketseat/eslint-config/components/ui/tooltip";

export default function Game() {
  return (
    <TooltipProvider>
      <GamePage />
    </TooltipProvider>
  )
}
