import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { NAV, SITE } from "@/lib/site";

const Header = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <>
      <div className="bg-ink px-5 py-2.5 text-center font-body text-[13px] text-sand">
        Now offering microblading —{" "}
        <Link to="/services" className="border-b border-blush text-blush hover:text-white">
          book a consultation
        </Link>
      </div>

      <header className="sticky top-0 z-50 bg-sand/95 backdrop-blur-sm">
        <div className="wrap flex items-center justify-between gap-6 py-5">
          <Link to="/" className="font-heading text-[30px] leading-none text-ink md:text-[32px]">
            {SITE.name}
            <span className="text-clay">.</span>
          </Link>

          <nav className="hidden items-center gap-2 md:flex" aria-label="Main">
            {NAV.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`rounded-full border px-[18px] py-2.5 font-body text-sm transition-colors ${
                  pathname === link.to
                    ? "border-ink bg-ink text-sand"
                    : "border-line text-ink hover:border-ink"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact-us"
              className="ml-1 rounded-full bg-clay px-[22px] py-2.5 font-body text-sm font-medium text-[#FFF8F2] transition-colors hover:bg-ink"
            >
              Book Online
            </Link>
          </nav>

          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink md:hidden"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <nav className="wrap flex flex-col gap-2 pb-6 md:hidden" aria-label="Mobile">
            {NAV.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={`rounded-full border px-5 py-3.5 font-body text-base ${
                  pathname === link.to ? "border-ink bg-ink text-sand" : "border-line text-ink"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contact-us" onClick={() => setOpen(false)} className="btn-clay mt-1">
              Book Online
            </Link>
          </nav>
        )}
      </header>
    </>
  );
};

export default Header;
