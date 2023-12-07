import Link from "next/link";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../../ui/select";
import { Separator } from "../../ui/separator";
import { Button } from "../../ui/button";

export function HeaderSocial() {
  return (
    <section className="flex items-center gap-8">
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Selecione o Idioma"/>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Idioma</SelectLabel>
            <Separator />
            <SelectItem value="pt-BR">Português Brasil</SelectItem>
            <SelectItem value="en-US">Inglês</SelectItem>
            <SelectItem value="es-ES">Espanhol</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Button type="button" variant={"tertiary"}>
        Entrar
      </Button>
    </section>
  )
}