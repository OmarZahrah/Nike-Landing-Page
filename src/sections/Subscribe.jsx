import { Button } from "../components";

const Subscribe = () => {
  return (
    <section
      id="contact-us"
      className="flex items-center justify-between gap-10 py-10 max-container max-lg:flex-col"
    >
      <h3 className="text-4xl font-bold leading-[68px] lg:max-w-md font-palanquin ">
        Sign Up for
        <span className="text-coral-red"> Updates </span>& Newsletter
      </h3>
      <div className="w-full rounded-full sm:border sm:border-slate-gray lg:max-w-[40%] p-2.5 flex justify-between max-sm:flex-col items-center gap-5">
        <input type="text" placeholder="subscribe@nike.com" className="input" />
        <div className="flex items-center max-sm:justify-end max-sm:w-full">
          <Button label="Sign Up" fullWidth />
        </div>
      </div>
    </section>
  );
};
export default Subscribe;
