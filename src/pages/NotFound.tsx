import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const NotFound = () => {
  return (
    <Layout>
      <section className="wrap flex flex-col items-start gap-8 py-28 md:py-40">
        <span className="eyebrow">404</span>
        <h1 className="display-xl">
          Page not <em>found.</em>
        </h1>
        <Link to="/" className="btn-dark">Back to home</Link>
      </section>
    </Layout>
  );
};

export default NotFound;
