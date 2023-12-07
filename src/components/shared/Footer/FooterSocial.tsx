import Link from "next/link";
import { GiDuck } from "react-icons/gi";
import { GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons'

export function FooterSocial() {
  return (
    <section className="flex items-center gap-4">
      <Link href={"/"} target="_self">
        <GiDuck className="w-6 h-6 text-zinc-800 hover:text-zinc-950"/>
      </Link>
    </section>
  )
}