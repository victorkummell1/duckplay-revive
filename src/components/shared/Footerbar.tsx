import { Footer } from "./Footer";

export default function Footerbar() {
  return (
    <div className="w-full h-20 flex items-center justify-center">
      <Footer.Root>
        <Footer.Copyright />
        <Footer.Social />
      </Footer.Root>
    </div>
  )
}