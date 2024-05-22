import { star } from "../assets/icons";

const PopularProductsCard = ({ imgUrl, name, price }) => {
  return (
    <div className="flex flex-col flex-1 w-full max-sm:w-full">
      <img src={imgUrl} alt={name} className="w-[280px] h-[280px]" />
      <div className="flex items-center gap-2.5 mt-8">
        <img src={star} width={24} height={24} alt="star" />
        <p className="text-xl leading-normal font-montserrat text-slate-gray">
          (4.5)
        </p>
      </div>
      <h3 className="mt-2 text-2xl font-semibold leading-normal font-palanquin">
        {name}
      </h3>
      <p className="text-lg font-semibold leading-normal text-coral-red font-montserrat">
        {price}
      </p>
    </div>
  );
};
export default PopularProductsCard;
