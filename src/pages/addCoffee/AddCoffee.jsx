import SectionHeadings from "../../components/SectionHeadings";
import HomeButton from "../../components/shared/HomeButton";
import MyButton from "../../components/shared/MyButton";

const formInput = (name, placeholder, defaultValue = "") => {
  return (
    <label htmlFor={name} className="md:space-y-4">
      <span className="text-coffee-a1a font-semibold md:text-xl">{name}</span>
      <br />
      <input
        type="text"
        id={name}
        name={name}
        className="p-2.5 placeholder:text-coffee-a1a/60 outline-none focus:ring-2 focus:ring-orange-577 focus:rounded-md bg-white w-full"
        placeholder={placeholder}
        defaultValue={defaultValue}
      />
    </label>
  );
};

const AddCoffee = () => {
  const formCSS = "flex flex-col md:flex-row justify-between gap-6 md:*:flex-1";
  return (
    <section className="max-w-md sm:container xl:max-w-screen-xl mx-auto mt-8 mb-16">
      <HomeButton />
      <div className="bg-white-3f0 rounded-md py-[70px] px-10 md:px-16 lg:px-[112px]">
        <div className="*:!text-blue-151 text-center">
          <SectionHeadings heading="Add New Coffee" />
        </div>
        <p className="max-w-4xl mx-auto text-sm md:text-base text-coffee-a1a/70 text-center mt-6 mb-12">
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log("object");
          }}
          className="space-y-6"
        >
          <div className={formCSS}>
            {formInput("Name", "Enter coffee name")}
            {formInput("Chef", "Enter coffee chef")}
          </div>
          <div className={formCSS}>
            {formInput("Supplier", "Enter coffee supplier")}
            {formInput("Taste", "Enter coffee taste")}
          </div>
          <div className={formCSS}>
            {formInput("Category", "Enter coffee category")}
            {formInput("Details", "Enter coffee details")}
          </div>
          <div>{formInput("Photo", "Enter photo URL")}</div>
          <div className="*:w-full *:bg-orange-48c hover:*:bg-orange-577 *:text-coffee-a15">
            <MyButton type="submit" label="Add Coffee" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddCoffee;
