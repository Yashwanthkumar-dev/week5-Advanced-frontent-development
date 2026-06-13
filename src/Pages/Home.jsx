import { ArrowRight } from "lucide-react";
import image from "../assets/heroImage.png";
import Category from "../Components/Category";
import TrendingStyle from "../Components/TrendingStyle";
import womenswear from "../assets/Trending/womenWithBag.png";
import officeBag from "../assets/Trending/officeBag.png";
import DressShowroom from "../assets/Trending/DressShowroom.png";
import menShirt from "../assets/Trending/menShirt.png";
import emailContactBg from "../assets/Trending/email-section-background.png";
import { Link } from "react-router-dom";

const Home = () => {
  const Trendings = [
    {
      id: 1,
      title: "Women's Bags",
      image: womenswear,
      cta: "shop now",
      category: "womens-bags",
      style: "md:col-span-2 h-[250px] md:h-[300px]",
    },
    {
      id: 2,
      title: "Men's Shirts",
      image: menShirt,
      cta: "shop now",
      category: "mens-shirts",
      style: "md:col-span-1 h-[250px] md:h-[300px]",
    },
    {
      id: 3,
      title: "Sunglasses",
      image: officeBag,
      cta: "shop now",
      category: "sunglasses",
      style: "md:col-span-1 h-[250px] md:h-[300px]",
    },
    {
      id: 4,
      title: "Women's Dresses",
      image: DressShowroom,
      cta: "shop now",
      category: "womens-dresses",
      style: "md:col-span-2 h-[250px] md:h-[300px]",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <img
          src={image}
          alt="Modern Living Collection"
          className="h-[600px] w-full object-cover md:h-[879px]"
        />

        <div className="absolute inset-0 bg-black/30"></div>

        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-16 lg:px-24">
          <div className="mb-6 md:hidden">
            <span className="inline-block rounded-full bg-secondary px-4 py-2 text-sm font-semibold uppercase text-white animate-pulse">
              Summer Flash Sale
            </span>
          </div>

          <p className="hidden md:inline md:font-montserrat md:uppercase md:text-sm md:ml-2 md:font-semibold md:text-accent">
            ethereral elegance
          </p>

          <h1 className="max-w-sm md:max-w-3xl text-4xl md:text-6xl font-bold font-montserrat text-white leading-tight">
            Summer collection 2026
          </h1>

          <p className="mt-6 max-w-sm md:max-w-2xl text-base md:text-lg text-gray-100 leading-relaxed font-inter">
            Experience the intersection of form and function with our latest
            Summer Collection. Hand-curated essentials designed for the
            contemporary home.
          </p>

          <div className="mt-8 flex flex-col gap-4 md:flex-row">
            <Link to="/collection">
              <button className="w-44 rounded-lg bg-secondary px-6 py-4 font-semibold text-white transition hover:scale-105">
                Shop Now
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Category />

      {/* Curated Categories */}
      <section className="hidden md:block py-7">
        <div className="mx-8 mt-10">
          <div>
            <h1 className="font-montserrat font-bold text-3xl text-primary">
              Curated Categories
            </h1>

            <div className="flex items-center justify-between mt-2">
              <p className="font-inter text-gray-500">
                Defining modern sophistication for every occasion.
              </p>

              <Link
                to="/collection"
                className="flex items-center gap-2 cursor-pointer group"
              >
                <p className="font-semibold text-primary text-sm uppercase">
                  Explore All
                </p>

                <ArrowRight
                  size={18}
                  className="text-primary transition-all duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            {Trendings.map((data) => (
              <Link
                key={data.id}
                to={`/collection?category=${data.category}`}
                className={`relative overflow-hidden rounded-2xl ${data.style} group block`}
              >
                <img
                  src={data.image}
                  alt={data.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/25 flex flex-col justify-end p-6">
                  <h2 className="font-inter capitalize text-white text-3xl font-bold mb-3">
                    {data.title}
                  </h2>

                  <button className="font-inter font-semibold capitalize bg-white text-primary px-4 py-2 rounded-md w-fit text-sm">
                    {data.cta}
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <TrendingStyle />

      {/* Email Section */}
      <section className="hidden md:inline-block my-5 relative p-5 w-full">
        <div className="relative w-full max-w-6xl mx-auto overflow-hidden rounded-xl">
          <img
            src={emailContactBg}
            alt="email-section-background-image"
            className="w-full h-120 rounded-xl"
          />

          <div className="absolute inset-0 bg-linear-to-r from-primary via-primary/80 to-primary/30 h-full w-full"></div>

          <div className="absolute top-5 p-30 leading-relaxed space-y-4">
            <h3 className="font-bold font-montserrat text-white text-2xl">
              join the Inner Circle
            </h3>

            <p className="font-inter font-medium text-sm text-white/80 w-100 leading-relaxed">
              Subscribe to receive early access to new collections,
              invitations to private events, and editorial content directly
              to your inbox.
            </p>

            <form className="flex gap-x-10">
              <input
                type="text"
                placeholder="Your email address"
                className="border border-white/30 rounded-lg p-3 px-7 bg-white/10 placeholder:font-montserrat placeholder:text-white/30 backdrop-blur-2xl"
              />

              <button className="font-inter font-semibold text-white capitalize px-4 py-2 bg-secondary rounded-xl">
                join now
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;