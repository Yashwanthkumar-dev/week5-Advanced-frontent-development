import { useEffect, useState } from "react";
import { getAllcategories } from "../Services/api";
import { useNavigate } from "react-router-dom";

const Category = () => {
  const [categories, setCategories] = useState([]);

  const navigate = useNavigate();

  const allCategories = async () => {
    try {
      const response = await getAllcategories();
      setCategories(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    allCategories();
  }, []);

  return (
    <section className="bg-accent/10 py-6 md:hidden">
      <div className="container mx-auto px-4">
        <div className="mb-5">
          <h2 className="font-semibold text-lg font-montserrat">
            Categories
          </h2>
        </div>

        <div className="flex gap-5 overflow-x-auto scrollbar-hide">
          {categories?.map((cat) => (
            <div
              key={cat.slug}
              className="flex flex-col items-center min-w-[80px] cursor-pointer"
              onClick={() =>
                navigate(`/collection?category=${cat.slug}`)
              }
            >
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white shadow-md flex items-center justify-center text-lg md:text-xl font-bold text-gray-700">
                {cat.name.charAt(0)}
              </div>

              <p className="mt-2 text-xs md:text-sm text-center capitalize font-medium">
                {cat.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;