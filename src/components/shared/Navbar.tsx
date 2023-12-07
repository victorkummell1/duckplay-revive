import { Header } from "./Header";

export default function Navbar() {
  return (
    <div className="w-full h-20 flex items-center justify-center">
      <Header.Root>
        <Header.Logo />
        <Header.Search />
        <Header.Social />
      </Header.Root>
    </div>
  )
}