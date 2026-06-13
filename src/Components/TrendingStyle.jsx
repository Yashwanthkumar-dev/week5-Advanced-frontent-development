import Card from "./Card";
import men from "../assets/Trending/coat.png";
import women from "../assets/Trending/women.png";
import heals from "../assets/Trending/heals.png";
import shirt from "../assets/Trending/shirt.png";
const TrendingStyle = () => {
  const Trending = [
    {
      name: "Royal Azure Blazer",
      category: "Outerwear",
      price: 2222,
      image: men,
    },
    {
      name: "coral bloom sundress",
      category: "dresses",
      price: 125,
      image: women,
    },
    {
      name: "premium linen overshit",
      category: "menswear",
      price: 185,
      image: heals,
    },
    {
      name: "Architectural Stiletto",
      category: "Accessories",
      price: 345,
      image: shirt,
    },
  ];
  return (
    <section className="my-4 py-18 bg-neutral/2 w-full md:mx-auto">
      <div className="mx-4">
        <p className="rounded-lg px-2 py-1 font-montserrat uppercase w-fit bg-secondary/30 md:hidden ">
          Hot Now
        </p>

        <div className="flex justify-between items-center mt-3 md:hidden ">
          <h3 className="font-semibold font-inter text-xl tracking-wide">
            Trending Styles
          </h3>

          <p className="font-inter text-sm text-primary cursor-pointer">
            View All
          </p>
        </div>

        <div className=" hidden md:inline space-y-2.5">
          <h3 className="font-montserrat font-semibold text-3xl text-primary text-center capitalize">
            Trending now
          </h3>
          <p className="font-inter font-normal text-md text-gray-500 text-center leading-relaxed mx-auto md:w-167">
            Discover the pieces currently defining the season's landscape, from
            timeless essentials to runway-inspired statements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {Trending?.map((trend) => (
            <Card
              key={trend.id}
              name={trend.name}
              category={trend.category}
              price={trend.price}
              image={trend.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingStyle;
