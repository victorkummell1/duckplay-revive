import { Command, CommandInput } from "../../ui/command";

export function HeaderSearch() {
  return (
    <div>
      {/* <Input
        type="search"
        placeholder="Pesquisar Jogos..."
        className="md:w-[100px] lg:w-[400px]"
      /> */}
      <Command>
        <CommandInput className="md:w-[100px] lg:w-[400px]" placeholder="Pesquisar Jogos..."/>
      </Command>
    </div>
  )
}