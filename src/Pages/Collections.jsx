import { ListFilter } from "lucide-react";
import { useEffect, useState } from "react";
import {
  getProducts,
  getProductsByCategory,
  searchProducts,
} from "../Services/api";
import Card from "../Components/Card";
import { Link, useSearchParams } from "react-router-dom";

function Collection() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState("new arrivals");
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(0);
  const [filterBox, setFilterBox] = useState(false);

  const [selectedFilters, setSelectedFilters] = useState([]);

  const limit = 12;

  const [searchParams] = useSearchParams();
  const selectedCategory = searchParams.get("category");

  const categories = [
    "mens-shirts",
    "mens-shoes",
    "mens-watches",
    "sunglasses",
    "tops",
    "womens-dresses",
    "womens-jewellery",
    "womens-bags",
  ];

  const handleFilterChange = (category) => {
    setSelectedFilters((prev) => {
      if (prev.includes(category)) {
        return prev.filter((item) => item !== category);
      }

      return [...prev, category];
    });
  };

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError("");

      let data;

      if (selectedCategory) {
        data = await getProductsByCategory(selectedCategory);
      } else if (searchTerm.trim()) {
        data = await searchProducts(searchTerm);
      } else {
        const skip = page * limit;
        data = await getProducts(limit, skip);
      }

      setProducts(data?.products || []);
    } catch (err) {
      console.error(err);
      setProducts([]);
      setError("Products were not available right now");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchProducts();
    }, 400);

    return () => clearTimeout(timer);
  }, [selectedCategory, searchTerm, page]);

  const filteredProducts =
    selectedFilters.length === 0
      ? products
      : products.filter((product) =>
          selectedFilters.includes(product.category)
        );

  const sortingProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price:low to high") {
      return a.price - b.price;
    }

    if (sortBy === "price:high to low") {
      return b.price - a.price;
    }

    if (sortBy === "most popular") {
      return b.rating - a.rating;
    }

    return 0;
  });

  return (
    <section className="px-4 py-6 sm:px-6 lg:px-10 max-w-7xl mx-auto">
      <div>
        <p className="text-sm text-gray-500">
          <Link to="/">Home</Link> / Collections
        </p>
      </div>

      <h1 className="mt-4 text-3xl font-bold capitalize">
        {selectedCategory
          ? selectedCategory.replace(/-/g, " ")
          : "New Arrivals"}
      </h1>

      <div className="mt-5">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setPage(0);
          }}
          className="w-full md:w-96 border rounded-lg px-4 py-3"
        />
      </div>

      <div className="mt-7 flex justify-between items-center">
        <div
          onClick={() => setFilterBox(!filterBox)}
          className="flex items-center gap-2 cursor-pointer"
        >
          <ListFilter size={20} />
          <button>Filter</button>
        </div>

        <p>Showing {sortingProducts.length} Items</p>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border rounded-lg px-3 py-2"
        >
          <option value="new arrivals">New Arrivals</option>
          <option value="most popular">Most Popular</option>
          <option value="price:low to high">Price: Low To High</option>
          <option value="price:high to low">Price: High To Low</option>
        </select>
      </div>

      <div className="mt-8">
        {loading ? (
          <h2>Loading Products...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : sortingProducts.length === 0 ? (
          <h2>Product Was Not Found</h2>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {sortingProducts.map((product) => (
                <Card
                  key={product.id}
                  id={product.id}
                  name={product.title}
                  category={product.category}
                  price={product.price}
                  image={product.thumbnail}
                />
              ))}
            </div>

            {!searchTerm && !selectedCategory && (
              <div className="flex justify-center gap-4 mt-10">
                <button
                  disabled={page === 0}
                  onClick={() => setPage((prev) => prev - 1)}
                  className="border px-4 py-2 rounded"
                >
                  Prev
                </button>

                <span className="flex items-center">
                  Page {page + 1}
                </span>

                <button
                  onClick={() => setPage((prev) => prev + 1)}
                  className="border px-4 py-2 rounded"
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </div>

      {filterBox && (
        <div className="fixed inset-0 z-50">
          <div
            onClick={() => setFilterBox(false)}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          ></div>

          <div className="absolute right-0 top-0 h-screen w-80 bg-white p-5 overflow-y-auto">
            <div className="flex justify-between items-center">
              <h2 className="font-bold text-2xl">Filters</h2>

              <button
                onClick={() => setFilterBox(false)}
                className="text-xl"
              >
                ✕
              </button>
            </div>

            <div className="mt-5">
              <h3 className="font-semibold">Categories</h3>

              <div className="mt-3 space-y-3">
                {categories.map((category) => (
                  <div
                    key={category}
                    className="flex items-center gap-2"
                  >
                    <input
                      type="checkbox"
                      checked={selectedFilters.includes(category)}
                      onChange={() =>
                        handleFilterChange(category)
                      }
                    />

                    <label className="capitalize">
                      {category.replace(/-/g, " ")}
                    </label>
                  </div>
                ))}
              </div>

              {selectedFilters.length > 0 && (
                <button
                  onClick={() => setSelectedFilters([])}
                  className="mt-5 w-full border py-2 rounded"
                >
                  Clear Filters
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Collection;