import { PopularProductsCard } from "../components";
import { products } from "../constants";
const PopularProducts = () => {
  return (
    <section
      id="products"
      className="flex flex-col justify-start gap-5 max-container"
    >
      <h2 className="text-4xl font-bold font-palanquin">
        Our <span className="text-coral-red">Popular</span> Products
      </h2>
      <p className="mt-2 lg:max-w-lg font-montserrat text-slate-gray">
        Experience top-notch quality and style with our sought-after selections.
        Discover a world of comfort, design, and value
      </p>
      <div className="grid grid-cols-1 mt-16 max-sm:self-center lg:grid-cols-4 gap-14 md:grid-cols-3 sm:grid-cols-2 sm:gap-6">
        {products.map((product, index) => (
          <PopularProductsCard
            key={index}
            imgUrl={product.imgURL}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    </section>
  );
};
export default PopularProducts;
