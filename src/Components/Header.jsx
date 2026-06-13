import {
  ArrowRight,
  ShoppingCart,
  Heart,
  X,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import { useWishlist } from "../Context/WishlistContext";

const Header = () => {
  const [menu, setMenu] = useState(false);

  const { cart } = useCart();
  const { wishlist } = useWishlist();

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const menuList = [
    {
      name: "New Arrivals",
      path: "/",
    },
    {
      name: "Collections",
      path: "/collection",
    },
  ];

  return (
    <>
      {/* Navbar */}
      <nav className="bg-accent w-full px-4 sm:px-6 py-5 shadow-sm">
        <div className="flex justify-between items-center max-w-7xl mx-auto">

          {/* Mobile Menu */}
          <button
            onClick={() => setMenu(true)}
            className="md:hidden flex flex-col gap-1"
          >
            <span className="w-6 h-0.5 bg-neutral"></span>
            <span className="w-6 h-0.5 bg-neutral"></span>
            <span className="w-6 h-0.5 bg-neutral"></span>
          </button>

          {/* Logo */}
          <Link to="/">
            <h1 className="uppercase text-2xl md:text-3xl font-bold font-montserrat">
              Luxe
            </h1>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 font-inter">
            {menuList.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="
                  relative
                  after:content-['']
                  after:absolute
                  after:left-0
                  after:-bottom-1
                  after:h-[2px]
                  after:w-0
                  after:bg-secondary
                  after:transition-all
                  after:duration-300
                  hover:after:w-full
                "
              >
                {item.name}
              </Link>
            ))}
          </ul>

          {/* Right Side Icons */}
          <div className="flex items-center gap-5">

            {/* Wishlist */}
            <Link
              to="/wishlist"
              className="relative flex items-center justify-center"
            >
              <Heart
                size={24}
                className="hover:text-red-500 transition"
              />

              {wishlist.length > 0 && (
                <span
                  className="
                    absolute
                    -top-2
                    -right-3
                    bg-red-500
                    text-white
                    text-[10px]
                    font-bold
                    min-w-[18px]
                    h-[18px]
                    px-1
                    rounded-full
                    flex
                    items-center
                    justify-center
                  "
                >
                  {wishlist.length}
                </span>
              )}
            </Link>

            {/* Cart */}
            <Link
              to="/cart"
              className="relative flex items-center justify-center"
            >
              <ShoppingCart
                size={24}
                className="hover:text-secondary transition"
              />

              {totalItems > 0 && (
                <span
                  className="
                    absolute
                    -top-2
                    -right-3
                    bg-red-500
                    text-white
                    text-[10px]
                    font-bold
                    min-w-[18px]
                    h-[18px]
                    px-1
                    rounded-full
                    flex
                    items-center
                    justify-center
                  "
                >
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      {menu && (
        <div className="fixed inset-0 z-50">

          {/* Overlay */}
          <div
            onClick={() => setMenu(false)}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          ></div>

          {/* Sidebar */}
          <div className="absolute left-0 top-0 h-screen w-72 bg-white p-6 shadow-xl">

            {/* Close */}
            <div className="flex justify-end">
              <button onClick={() => setMenu(false)}>
                <X size={24} />
              </button>
            </div>

            {/* Menu Links */}
            <ul className="mt-10 space-y-8">
              {menuList.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  onClick={() => setMenu(false)}
                  className="
                    flex
                    justify-between
                    items-center
                    border-b
                    pb-3
                    capitalize
                    hover:text-secondary
                    transition
                  "
                >
                  {item.name}
                  <ArrowRight
                    size={18}
                    className="text-secondary"
                  />
                </Link>
              ))}
            </ul>

            {/* Wishlist */}
            <Link
              to="/wishlist"
              onClick={() => setMenu(false)}
              className="
                mt-10
                flex
                items-center
                gap-3
                border
                rounded-lg
                p-3
                justify-center
              "
            >
              <Heart size={20} />
              <span>
                Wishlist ({wishlist.length})
              </span>
            </Link>

            {/* Cart */}
            <Link
              to="/cart"
              onClick={() => setMenu(false)}
              className="
                mt-4
                flex
                items-center
                gap-3
                border
                rounded-lg
                p-3
                justify-center
              "
            >
              <ShoppingCart size={20} />
              <span>
                Cart ({totalItems})
              </span>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;