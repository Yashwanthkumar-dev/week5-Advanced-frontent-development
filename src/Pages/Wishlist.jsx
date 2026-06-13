import { Trash2 } from "lucide-react";
import { useWishlist } from "../Context/WishlistContext";

const Wishlist = () => {
  const {
    wishlist,
    removeFromWishlist,
  } = useWishlist();

  if (wishlist.length === 0) {
    return (
      <div className="h-screen flex justify-center items-center">
        <h1 className="text-3xl font-bold">
          Wishlist Empty ❤️
        </h1>
      </div>
    );
  }

  return (
    <section className="max-w-6xl mx-auto p-5">
      <h1 className="text-3xl font-bold mb-8">
        My Wishlist
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {wishlist.map((item) => (
          <div
            key={item.id}
            className="shadow-lg rounded-xl p-4"
          >
            <img
              src={item.thumbnail}
              alt={item.title}
              className="h-60 w-full object-cover rounded-lg"
            />

            <h2 className="font-bold mt-3">
              {item.title}
            </h2>

            <p className="text-primary mt-2">
              ${item.price}
            </p>

            <button
              onClick={() =>
                removeFromWishlist(item.id)
              }
              className="mt-4 text-red-500"
            >
              <Trash2 />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Wishlist;