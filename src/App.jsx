import Header from "./Components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import Collection from "./Pages/Collections";
import ProductDetails from "./Pages/ProductDetails";
import Cart from "./Pages/Cart";
import Wishlist from "./Pages/Wishlist";
function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<Wishlist />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
