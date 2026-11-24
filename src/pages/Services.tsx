import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import massageImg from "@/assets/services-massage.jpg";
import facialImg from "@/assets/services-facial.jpg";
import nailsImg from "@/assets/services-nails.jpg";
import scrubImg from "@/assets/services-scrub.jpg";
import microbladingImg from "@/assets/services-microblading.jpg";
import loungeImg from "@/assets/about-spa.jpg";

const services = [
  {
    title: "Massage Therapy",
    img: massageImg,
    description:
      "From the moment you walk in the door, our focus is on your complete relaxation. Our licensed massage therapists offer a variety of techniques to relieve tension, reduce stress, and restore balance to body and mind.",
  },
  {
    title: "Facials & Skin Care",
    img: facialImg,
    description:
      "Customized facial treatments tailored to your skin type. Using premium products and proven techniques, our estheticians help restore your skin’s natural radiance.",
  },
  {
    title: "Manicures & Pedicures",
    img: nailsImg,
    description:
      "Pamper your hands and feet — from classic manicures to spa pedicures, with high-quality products so your nails look and feel their best.",
  },
  {
    title: "Salt Scrubs & Body",
    img: scrubImg,
    description:
      "Signature body treatments with exfoliating salt scrubs, followed by rich lotions and oils that leave skin silky smooth and add that extra feeling of zen.",
  },
  {
    title: "Microblading",
    img: microbladingImg,
    description:
      "Perfectly shaped, natural-looking brows. This semi-permanent technique creates defined eyebrows that enhance your features with minimal daily maintenance.",
    isNew: true,
  },
  {
    title: "Skin Treatments",
    img: loungeImg,
    description:
      "Advanced treatments for fine lines, uneven texture, hydration and glow — with a personalized plan built around your skincare goals.",
  },
];

const Services = () => {
  return (
    <Layout>
      <section className="wrap pb-16 pt-12 md:pb-24 md:pt-16">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <h1 className="display-xl">
            The <em>menu.</em>
          </h1>
          <p className="lead max-w-[380px] lg:pb-3">
            Massage, facials, skin and nail treatments in a tranquil setting. Come take a break with us.
          </p>
        </div>
      </section>

      <section className="wrap pb-20 md:pb-32">
        <div className="border-t border-ink">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="grid gap-6 border-b border-line py-10 md:grid-cols-12 md:items-center md:gap-10 md:py-12"
            >
              <span className="font-heading text-[28px] text-clay md:col-span-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex flex-col gap-4 md:col-span-6 lg:col-span-5">
                <h2 className="text-[38px] leading-none md:text-[48px]">
                  {s.title}
                  {s.isNew && (
                    <span className="ml-3 inline-block -translate-y-2 rounded-full bg-clay px-2.5 py-1 align-middle font-body text-[11px] uppercase tracking-[0.12em] text-[#FFF8F2]">
                      New
                    </span>
                  )}
                </h2>
                <p className="lead">{s.description}</p>
                <Link to="/contact-us" className="text-link self-start">
                  Book this treatment
                </Link>
              </div>
              <img
                src={s.img}
                alt={s.title}
                className="h-[260px] w-full rounded object-cover md:col-span-5 md:h-[300px] lg:col-span-6"
              />
            </article>
          ))}
        </div>
      </section>

      <section className="section bg-ink text-sand">
        <div className="wrap flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="display-lg max-w-[760px]">
            Ready to <em className="italic text-blush">relax?</em>
          </h2>
          <Link to="/contact-us" className="btn-clay self-start">
            Book your appointment →
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
