import { Heart } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useWishlist } from "../Context/WishlistContext";

const Card = ({ id, name, category, price, image }) => {
  const [like, setLike] = useState(false);
const { addToWishlist } = useWishlist();
  
  const handleWishlist = (e) => {
  e.preventDefault();

  addToWishlist({
    id,
    title: name,
    price,
    thumbnail: image,
    category,
  });

  setLike(!like);
};
  return (
    <Link to={`/product/${id}`}>
      <div className=" relative group rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
        {/* Wishlist */}
        <button
          onClick={handleWishlist}
          className="absolute top-4 right-4 z-20 bg-white p-2 rounded-full shadow-md"
        >
          <Heart
            size={18}
            className={`text-primary hover:cursor-pointer ${
              like
                ? "fill-red-500 text-red-500 animate-bounce "
                : "text-primary"
            }`}
          />
        </button>

        {/* Image Section */}
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Desktop / Tablet Hover Button */}
          <button
            className="
            hidden md:block
            absolute left-4 right-4 bottom-4

            bg-primary text-white
            py-3 rounded-lg font-semibold

            opacity-0 translate-y-4
            group-hover:opacity-100
            group-hover:translate-y-0

            transition-all duration-300
          "
          >
            Add to Cart
          </button>
        </div>

        {/* Content */}
        <div className="p-5">
          <p className="text-sm text-neutral/60 capitalize">{category}</p>

          <div className="flex items-center justify-between mt-2">
            <h3 className="font-montserrat font-semibold text-lg">{name}</h3>

            <p className="font-inter font-semibold text-primary">${price}</p>
          </div>

          {/* Mobile Button */}
          <button
            className="
            mt-5 w-full
            rounded-lg bg-primary
            text-white py-3
            font-semibold
            transition-opacity duration-300
            hover:opacity-90
            md:hidden
          "
          >
            Add to Cart
          </button>
        </div>
      </div>
    </Link>
  );
};

export default Card;
