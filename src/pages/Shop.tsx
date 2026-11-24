import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { SITE } from "@/lib/site";
import product1 from "@/assets/shop-product-1.jpg";
import product2 from "@/assets/shop-product-2.jpg";
import product3 from "@/assets/shop-product-3.jpg";
import product4 from "@/assets/shop-product-4.jpg";
import product5 from "@/assets/shop-product-5.jpg";
import product6 from "@/assets/shop-product-6.jpg";
import giftCardImg from "@/assets/gift-card.jpg";

const products = [
  { img: product1, name: "Rose Hydrating Cream", price: "$42", category: "Skincare" },
  { img: product2, name: "Botanical Body Oil", price: "$38", category: "Body Care" },
  { img: product3, name: "Essential Oil Trio", price: "$54", category: "Aromatherapy" },
  { img: product4, name: "Botanical Bath Salts", price: "$28", category: "Bath & Body" },
  { img: product5, name: "Rejuvenating Serum", price: "$56", category: "Skincare" },
  { img: product6, name: "Spa Candle", price: "$32", category: "Home" },
];

const Shop = () => {
  return (
    <Layout>
      <section className="wrap pb-16 pt-12 md:pb-24 md:pt-16">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <h1 className="display-xl">
            Take the spa <em>home.</em>
          </h1>
          <p className="lead max-w-[380px] lg:pb-3">
            High-quality lotions and oils make all the difference. These are the products we trust in the studio.
          </p>
        </div>
      </section>

      <section className="wrap pb-20 md:pb-32">
        <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <div key={p.name} className="group flex flex-col gap-4">
              <div className="overflow-hidden rounded bg-paper">
                <img
                  src={p.img}
                  alt={p.name}
                  className="h-[320px] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] md:h-[380px]"
                />
              </div>
              <div className="flex items-start justify-between gap-4">
                <div className="flex flex-col gap-1">
                  <span className="eyebrow">{p.category}</span>
                  <h2 className="text-[30px] leading-[1.05]">{p.name}</h2>
                </div>
                <span className="pt-5 font-body text-lg font-medium">{p.price}</span>
              </div>
            </div>
          ))}
        </div>
        <p className="lead mt-14">Visit us in-store for our full selection of spa products.</p>
      </section>

      <section className="wrap pb-20 md:pb-32">
        <div className="grid overflow-hidden rounded bg-paper md:grid-cols-2">
          <img src={giftCardImg} alt={`${SITE.name} gift card`} className="h-[300px] w-full object-cover md:h-full" />
          <div className="flex flex-col gap-5 p-8 md:p-14">
            <span className="eyebrow">Gift cards</span>
            <h2 className="display-md">
              The perfect <em>gift.</em>
            </h2>
            <p className="lead">
              Give the gift of relaxation with a {SITE.name} gift card — available in any amount, for birthdays,
              anniversaries, holidays, or just because.
            </p>
            <Link to="/contact-us" className="btn-dark self-start">
              Buy a gift card
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Shop;
