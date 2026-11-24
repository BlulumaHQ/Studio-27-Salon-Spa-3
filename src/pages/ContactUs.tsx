import { useState } from "react";
import Layout from "@/components/Layout";
import { SITE } from "@/lib/site";

const ContactUs = () => {
  const [sent, setSent] = useState(false);

  return (
    <Layout>
      <section className="wrap pb-16 pt-12 md:pb-24 md:pt-16">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <h1 className="display-xl">
            Come take a <em>break.</em>
          </h1>
          <p className="lead max-w-[380px] lg:pb-3">
            Book an appointment or ask us anything about our treatments — we’ll get back to you soon.
          </p>
        </div>
      </section>

      <section className="wrap grid gap-6 pb-20 md:pb-32 lg:grid-cols-5">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="flex flex-col gap-5 rounded bg-paper p-8 md:p-12 lg:col-span-3"
        >
          <h2 className="display-md">
            Send us a <em>message</em>
          </h2>
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="first" className="font-body text-sm font-medium">First name</label>
              <input id="first" type="text" required className="field" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="last" className="font-body text-sm font-medium">Last name</label>
              <input id="last" type="text" required className="field" />
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-body text-sm font-medium">Email</label>
              <input id="email" type="email" required placeholder="you@email.com" className="field" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="font-body text-sm font-medium">Phone</label>
              <input id="phone" type="tel" className="field" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="service" className="font-body text-sm font-medium">Treatment</label>
            <select id="service" className="field appearance-none">
              <option value="">Select a treatment</option>
              <option>Massage Therapy</option>
              <option>Facials &amp; Skin Care</option>
              <option>Manicures &amp; Pedicures</option>
              <option>Salt Scrubs &amp; Body</option>
              <option>Microblading</option>
              <option>Gift Card</option>
              <option>Other</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="font-body text-sm font-medium">Message</label>
            <textarea
              id="message"
              rows={5}
              required
              className="w-full resize-none rounded-[20px] border border-line bg-white px-5 py-4 font-body text-[15px] text-ink focus:outline-none focus:ring-2 focus:ring-clay"
            />
          </div>
          <button type="submit" className="btn-clay self-start">Send message</button>
          {sent && (
            <p className="font-body text-sm text-taupe" role="status">
              Thanks! This is a design case study, so the form is a demo and no message was sent.
            </p>
          )}
        </form>

        <div className="flex flex-col gap-6 lg:col-span-2">
          <div className="flex flex-col gap-3 rounded border border-line p-8">
            <span className="eyebrow">Visit</span>
            <span className="font-heading text-[30px] leading-[1.15]">
              {SITE.street}
              <br />
              {SITE.city}
            </span>
          </div>
          <div className="flex flex-col gap-2 rounded border border-line p-8 font-body text-[15px]">
            <span className="eyebrow mb-1">Hours</span>
            {SITE.hours.map((h) => (
              <span key={h.days} className="flex justify-between gap-4">
                <span>{h.days}</span>
                <span className="text-taupe">{h.time}</span>
              </span>
            ))}
          </div>
          <div className="flex flex-col gap-3 rounded bg-ink p-8 text-sand">
            <span className="font-body text-[13px] font-semibold uppercase tracking-[0.15em] text-blush">Call or email</span>
            <a href={SITE.phoneHref} className="font-heading text-[34px] leading-none hover:text-blush">
              {SITE.phone}
            </a>
            <a href={`mailto:${SITE.email}`} className="font-body text-[15px] text-[#D8CCC0] hover:text-blush">
              {SITE.email}
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactUs;
