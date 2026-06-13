const Footer = () => {
  return (
    <footer className="p-2 py-8 bg-neutral text-center text-white font-inter leading-relaxed">
      <div className="md:hidden">
        <div>
          <h2 className="text-xl">Join the Elite</h2>
        </div>
        <div className="w-full mt-3">
          <p className="w-80 m-auto leading-relaxed text-accent/80">
            Get early access to drops and exclusive stlyle guides directly in
            your inbox
          </p>
        </div>
        <div className="flex flex-col items-center gap-y-5 mt-4">
          <label>
            <input
              type="text"
              placeholder="Enter your email"
              className="px-5 py-3 rounded-lg bg-gray-300/5"
            />
          </label>
          <button className="px-26 py-3 rounded-lg bg-secondary ">
            Subscribe
          </button>
        </div>
      </div>

      <div className="hidden md:flex justify-between gap-x-5  xl:w-300 xl:mx-auto">
        <div className="space-y-2">
          <h3 className="font-inter font-bold text-2xl text-white/80 text-left ml-4 uppercase mt-2 mb-4">
            luxe
          </h3>
          <p className="font-montserrat font-medium text-white/80 text-sm text-left w-70 leading-relaxed   ml-4">
            Defining modern elegance through sustainable craftsmanship and
            timeless design since 2012.
          </p>
        </div>
        <div className="text-left">
          <h4 className="font-inter font-bold text-xl text-white/80 uppercase mb-4">
            shop
          </h4>
          <ul className="font-montserrat space-y-4">
            <li className="font-inter font-medium text-sm text-white/70 capitalize ">
              new arrivals
            </li>
            <li className="font-inter font-medium text-sm text-white/70 capitalize ">
              best sellers
            </li>
            <li className="font-inter font-medium text-sm text-white/70 capitalize ">
              men
            </li>
            <li className="font-inter font-medium text-sm text-white/70 capitalize ">
              women
            </li>
          </ul>
        </div>
        <div className="text-left">
          <h3 className="font-inter font-bold text-xl text-white/80 uppercase mb-4">
            support
          </h3>
          <ul className="font-montserrat space-y-4">
            <li className="font-inter font-medium text-sm text-white/70 capitalize ">
              Contact
            </li>
            <li className="font-inter font-medium text-sm text-white/70 capitalize ">
              Shipping
            </li>
            <li className="font-inter font-medium text-sm text-white/70 capitalize ">
              Returns
            </li>
            <li className="font-inter font-medium text-sm text-white/70 capitalize ">
              Sizing Guide
            </li>
          </ul>
        </div>
        <div className="text-left">
          <h3 className="font-inter font-bold text-xl text-white/80 uppercase mb-4">
            company
          </h3>
          <ul className="font-montserrat space-y-4">
            <li className="font-inter font-medium text-sm text-white/70 capitalize ">
              About Us
            </li>
            <li className="font-inter font-medium text-sm text-white/70 capitalize ">
              Sustainability
            </li>
            <li className="font-inter font-medium text-sm text-white/70 capitalize ">
              Privacy Policy
            </li>
            <li className="font-inter font-medium text-sm text-white/70 capitalize ">
              Terms of Service
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
