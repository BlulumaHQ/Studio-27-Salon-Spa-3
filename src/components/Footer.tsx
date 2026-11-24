import { Link } from "react-router-dom";
import { NAV, SITE } from "@/lib/site";

const Footer = () => {
  return (
    <footer className="wrap pb-8 pt-4">
      <div className="flex flex-col gap-10 border-t border-ink pt-12 lg:flex-row lg:items-end lg:justify-between">
        <Link to="/" className="font-heading text-[64px] leading-[0.9] tracking-[-0.03em] text-ink sm:text-[96px] lg:text-[140px]">
          {SITE.name}
          <span className="text-clay">.</span>
        </Link>

        <div className="grid grid-cols-2 gap-8 font-body text-[15px] text-ink sm:flex sm:gap-14">
          <div className="flex flex-col gap-2.5">
            <span className="eyebrow">Visit</span>
            <span>{SITE.street}</span>
            <span>{SITE.city}</span>
            <a href={SITE.phoneHref} className="hover:text-clay">{SITE.phone}</a>
          </div>
          <div className="flex flex-col gap-2.5">
            <span className="eyebrow">Explore</span>
            {NAV.slice(1).map((l) => (
              <Link key={l.to} to={l.to} className="hover:text-clay">
                {l.label}
              </Link>
            ))}
            <Link to="/contact-us" className="hover:text-clay">Book Online</Link>
          </div>
          <div className="col-span-2 flex flex-col gap-2.5 sm:col-span-1">
            <span className="eyebrow">Hours</span>
            {SITE.hours.map((h) => (
              <span key={h.days}>
                {h.days} · {h.time}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12 flex flex-col gap-2 font-body text-[13px] text-taupe sm:flex-row sm:justify-between">
        <span>
          © {new Date().getFullYear()} {SITE.fullName} · A fictional brand created as a design case study.
        </span>
        <span>Web Design by Bluluma | Powered by SwiftLift</span>
      </div>
    </footer>
  );
};

export default Footer;
