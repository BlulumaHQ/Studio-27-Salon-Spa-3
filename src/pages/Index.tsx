import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { SITE } from "@/lib/site";
import heroImg from "@/assets/hero-spa.jpg";
import loungeImg from "@/assets/about-spa.jpg";
import massageImg from "@/assets/services-massage.jpg";
import facialImg from "@/assets/services-facial.jpg";
import scrubImg from "@/assets/services-scrub.jpg";
import nailsImg from "@/assets/services-nails.jpg";
import browsImg from "@/assets/services-microblading.jpg";
import giftImg from "@/assets/gift-card.jpg";
import productsImg from "@/assets/products.jpg";

const menu = [
  { title: "Massage", note: "Complete relaxation, start to finish", img: massageImg },
  { title: "Facials & Skin Care", note: "Customized by professional estheticians", img: facialImg },
  { title: "Salt Scrubs", note: "Exfoliate, hydrate, renew", img: scrubImg },
  { title: "Manicures & Pedicures", note: "Unhurried, polished nail care", img: nailsImg },
  { title: "Microblading", note: "Natural-looking brows, lasting results", img: browsImg, isNew: true },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="wrap pt-10 md:pt-14">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <h1 className="display-xl max-w-[900px]">
            Relax, refresh &amp; <em className="whitespace-nowrap">re-imagine.</em>
          </h1>
          <div className="flex max-w-[340px] flex-col gap-6 lg:pb-3">
            <p className="lead">
              {SITE.city}’s hydro spa and salon. Massage, facials, skin and nail care — since {SITE.since}.
            </p>
            <Link to="/contact-us" className="btn-dark self-start">
              Book your visit →
            </Link>
          </div>
        </div>

        <div className="relative mt-10 md:mt-12">
          <img
            src={heroImg}
            alt="Orchids, stones and warm towels at Studio 27"
            className="h-[420px] w-full rounded object-cover md:h-[600px]"
          />
          <div className="absolute bottom-4 right-4 flex max-w-[260px] flex-col gap-1.5 rounded bg-sand px-6 py-5 md:bottom-7 md:right-7">
            <span className="eyebrow">Visit us</span>
            <span className="font-heading text-[24px] leading-[1.1] md:text-[26px]">
              {SITE.street}, {SITE.city}
            </span>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {SITE.awards.map((a) => (
            <span key={a} className="pill">
              ★ {a}
            </span>
          ))}
        </div>
      </section>

      {/* Story */}
      <section className="wrap section grid gap-8 lg:grid-cols-4 lg:gap-16">
        <p className="eyebrow">Since {SITE.since}</p>
        <div className="flex flex-col gap-8 lg:col-span-3">
          <p className="font-heading text-[32px] leading-[1.15] md:text-[44px] lg:text-[54px]">
            What began as a small two-chair salon is now a full hydro spa — still run with{" "}
            <em className="italic text-clay">small-town friendliness</em> and world-class care.
          </p>
          <Link to="/services" className="text-link self-start">
            Explore the menu
          </Link>
        </div>
      </section>

      {/* Menu */}
      <section className="wrap pb-20 md:pb-32 lg:pb-36">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-14">
          <div className="flex flex-col gap-6">
            <h2 className="display-lg">
              The <em>menu</em>
            </h2>
            <img
              src={loungeImg}
              alt="Studio 27 relaxation lounge"
              className="h-[360px] w-full rounded object-cover md:h-[560px]"
            />
          </div>
          <div className="flex flex-col border-t border-ink lg:mt-24">
            {menu.map((m) => (
              <Link
                key={m.title}
                to="/services"
                className="group flex items-center gap-5 border-b border-line py-6 md:gap-6"
              >
                <img src={m.img} alt="" className="h-20 w-20 shrink-0 rounded object-cover md:h-24 md:w-24" />
                <span className="flex flex-1 flex-col gap-1.5">
                  <span className="font-heading text-[26px] leading-none transition-colors group-hover:text-clay md:text-[32px]">
                    {m.title}
                    {m.isNew && (
                      <span className="ml-3 inline-block -translate-y-1 rounded-full bg-clay px-2.5 py-1 align-middle font-body text-[11px] uppercase tracking-[0.12em] text-[#FFF8F2]">
                        New
                      </span>
                    )}
                  </span>
                  <span className="font-body text-sm text-taupe">{m.note}</span>
                </span>
                <span className="font-body text-[22px] text-clay transition-transform group-hover:translate-x-1">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section bg-clay text-[#FFF8F2]">
        <div className="mx-auto flex max-w-[1100px] flex-col gap-8 px-5 md:px-10">
          <span className="font-body text-[13px] font-semibold uppercase tracking-[0.15em] text-[#F3D2C2]">
            Guest notes
          </span>
          <p className="font-heading text-[44px] leading-none tracking-[-0.02em] md:text-[68px] lg:text-[92px]">
            “The calmest hour of my month. <em className="italic">I leave a new person.</em>”
          </p>
          <span className="font-body text-base">— Maya R.</span>
        </div>
      </section>

      {/* Cards */}
      <section className="wrap section grid gap-6 lg:grid-cols-3">
        <div className="flex flex-col overflow-hidden rounded bg-paper">
          <img src={giftImg} alt="Studio 27 gift card" className="h-[260px] w-full object-cover md:h-[300px]" />
          <div className="flex flex-col gap-4 p-8 md:p-10">
            <h3 className="text-[38px] leading-[1.05] md:text-[42px]">
              Give the gift of <em>relaxation</em>
            </h3>
            <p className="lead text-[15px]">For birthdays, holidays, or any occasion that calls for a little pampering.</p>
            <Link to="/shop" className="btn-dark self-start">Buy a gift card</Link>
          </div>
        </div>
        <div className="flex flex-col overflow-hidden rounded bg-paper">
          <img src={productsImg} alt="Studio 27 spa products" className="h-[260px] w-full object-cover md:h-[300px]" />
          <div className="flex flex-col gap-4 p-8 md:p-10">
            <h3 className="text-[38px] leading-[1.05] md:text-[42px]">
              Take the spa <em>home</em>
            </h3>
            <p className="lead text-[15px]">Shop the professional skincare and body products we use in the studio.</p>
            <Link to="/shop" className="btn-line self-start">Visit the shop</Link>
          </div>
        </div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col justify-end gap-4 rounded bg-ink p-8 text-sand md:p-10"
        >
          <h3 className="text-[38px] leading-[1.05] md:text-[42px]">
            Hear about specials, sales &amp; <em className="italic text-blush">events</em>
          </h3>
          <label htmlFor="newsletter-email" className="font-body text-[13px] text-[#BFB3A6]">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            placeholder="you@email.com"
            className="-mt-2 w-full rounded-full border border-[#5A4F47] bg-transparent px-5 py-4 font-body text-[15px] text-sand placeholder:text-[#8F8378] focus:outline-none focus:ring-2 focus:ring-blush"
          />
          <button type="submit" className="btn-clay">Sign up</button>
        </form>
      </section>
    </Layout>
  );
};

export default Index;
