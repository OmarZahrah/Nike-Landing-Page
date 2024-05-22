import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import { Button } from "../components";
const SpecialOffers = () => {
  return (
    <section className="flex items-center justify-between gap-10 max-xl:flex-col-reverse max-container">
      <div>
        <img
          src={offer}
          alt="offer image"
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-col flex-1 max-lg:order-2">
        <h2 className="text-4xl font-bold capitalize font-palanquin lg:max-w-lg">
          <span className="text-coral-red"> Special </span>
          Offers
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. Freon premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Navigate a realm Of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. your journey with us is
          nothing short Of exceptional.
        </p>
        <div className="flex flex-wrap gap-4 mt-11">
          <Button label="Shop Now" iconURL={arrowRight} />
          <Button
            label="Learn More"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};
export default SpecialOffers;
