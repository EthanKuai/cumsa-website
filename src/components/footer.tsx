import Image from "next/image";
import { socials } from "@/data/socials";
import type { Social } from "@/data/socials";
import SponsorCarousel from "@/components/sponsor-carousel";

export default function Footer() {
  return (
    <>
      <SponsorCarousel />
      <footer className="xs:py-2 bg-slate-950/70 px-[5%] text-white backdrop-blur-xl">
        <div className="bar pb-4">
          <span className="left flex items-center">
            <div className="min-w-[20px]">
              <Image
                src="/favicon.ico"
                alt="CUMSA Logo"
                width={40}
                height={40}
              />
            </div>

            <div className="text-foreground mx-1 max-w-[22ch] min-w-[17ch] text-sm">
              Cambridge University Malaysia and Singapore Association
            </div>
          </span>

          <div className="middle xs:gap-x-1.5 flex flex-wrap items-center justify-center gap-x-0.5 py-2">
            {socials.map((s: Social) => (
              <a
                key={s.name}
                href={s.href}
                title={s.name}
                target="_blank"
                rel="external"
                className="text-foreground hover:text-muted-foreground p-3 transition-colors"
              >
                {s.icon}
              </a>
            ))}
          </div>

          <span className="right text-muted-foreground min-w-[13ch] text-right text-sm text-gray-400">
            © 2026 CUMSA <br />
            All rights reserved
          </span>
        </div>
      </footer>
    </>
  );
}
