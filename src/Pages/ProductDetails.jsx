import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductsById } from "../Services/api";
import { useCart } from "../Context/CartContext";
const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchProduct = async () => {
    try {
      const data = await getProductsById(id);
      setProduct(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const buynow = () => {
    if (window.confirm("Are you sure you want to buy this product?")) {
      alert("Order placed successfully 🎉");
    }
  };
  useEffect(() => {
    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading Product...
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen font-inter">
        Product Not Found
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-6 md:py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {/* Product Image */}
        <div>
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-[300px] sm:h-[450px] md:h-[550px] object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-center">
          <p className="font-inter text-sm text-gray-500 capitalize">
            {product.category}
          </p>

          <h1 className="font-inter text-2xl sm:text-3xl lg:text-5xl font-bold mt-2 leading-tight">
            {product.title}
          </h1>

          <p className="font-inter text-2xl md:text-3xl font-semibold text-primary mt-5">
            ${product.price}
          </p>

          <div className="font-inter mt-3 text-lg">⭐ {product.rating}</div>

          <p className="font-inter mt-6 text-gray-600 leading-relaxed text-sm sm:text-base">
            {product.description}
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => {
                addToCart(product);
                alert("Product Added To Cart");
              }}
              className="font-inter bg-primary text-white px-8 py-3 rounded-lg hover:opacity-90 transition"
            >
              Add To Cart
            </button>

            <button
              onClick={buynow}
              className="font-inter border border-primary text-primary px-8 py-3 rounded-lg hover:bg-primary hover:text-white transition"
            >
              Buy Now
            </button>
          </div>

          {/* Product Info */}
          <div className="mt-8 space-y-3 border-t pt-6">
            <p className="font-inter text-sm sm:text-base">
              <strong>Brand:</strong> {product.brand}
            </p>

            <p className="font-inter text-sm sm:text-base">
              <strong>Stock:</strong> {product.stock}
            </p>

            <p className="font-inter text-sm sm:text-base">
              <strong>Discount:</strong> {product.discountPercentage}%
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
