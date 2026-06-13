import { Trash2 } from "lucide-react";
import { useCart } from "../Context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } =
    useCart();

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">Your Cart Is Empty 🛒</h1>
      </div>
    );
  }
  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty 🛒");
      return;
    }

    const confirmOrder = window.confirm(
      `Confirm your order of $${(totalPrice + 10).toFixed(2)} ?`,
    );

    if (confirmOrder) {
      alert("🎉 Order Placed Successfully!");

      // clear cart
      cart.forEach((item) => {
        removeFromCart(item.id);
      });
    }
  };
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row gap-5 bg-white shadow-md rounded-xl p-4"
            >
              {/* Image */}
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full sm:w-36 h-36 object-cover rounded-lg"
              />

              {/* Content */}
              <div className="flex-1">
                <h2 className="font-bold text-lg">{item.title}</h2>

                <p className="text-primary font-semibold mt-2">${item.price}</p>

                {/* Quantity */}
                <div className="flex items-center gap-4 mt-4">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="w-8 h-8 rounded bg-gray-200"
                  >
                    -
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="w-8 h-8 rounded bg-gray-200"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Remove */}
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500"
              >
                <Trash2 />
              </button>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="bg-white shadow-md rounded-xl p-6 h-fit">
          <h2 className="text-xl font-bold mb-5">Order Summary</h2>

          <div className="flex justify-between mb-4">
            <span>Total Items</span>
            <span>
              {cart.reduce((total, item) => total + item.quantity, 0)}
            </span>
          </div>

          <div className="flex justify-between mb-4">
            <span>Subtotal</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>

          <div className="flex justify-between mb-4">
            <span>Shipping</span>
            <span>$10</span>
          </div>

          <hr className="my-4" />

          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>${(totalPrice + 10).toFixed(2)}</span>
          </div>

          <button
            onClick={handleCheckout}
            className="w-full mt-6 bg-primary text-white py-3 rounded-lg hover:opacity-90"
          >
            Checkout
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cart;
