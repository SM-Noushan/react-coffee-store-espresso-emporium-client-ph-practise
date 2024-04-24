import SectionHeadings from "../../components/SectionHeadings";
import HomeButton from "../../components/shared/HomeButton";
import MyButton from "../../components/shared/MyButton";
import client from "../../utils/axios";
import Swal from "sweetalert2";
import PropTypes from "prop-types";
import { useLoaderData, useParams } from "react-router-dom";

const formInput = (name, placeholder, defaultValue = "") => {
  return (
    <label htmlFor={name} className="md:space-y-4">
      <span className="text-coffee-a1a font-semibold md:text-xl">{name}</span>
      <br />
      <input
        type="text"
        id={name.toLowerCase()}
        name={name.toLowerCase()}
        className="p-2.5 placeholder:text-coffee-a1a/60 outline-none focus:ring-2 focus:ring-orange-577 focus:rounded-md bg-white w-full"
        placeholder={placeholder}
        defaultValue={defaultValue}
      />
    </label>
  );
};

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  },
});

const AddCoffee = ({ update = false }) => {
  const coffee = useLoaderData() || {};
  const { id } = useParams() || 0;
  const { name, chef, category, taste, supplier, details, photo } = coffee;

  const handleAddCoffeeDetails = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const coffeeData = {
      name,
      chef,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    // send data to server
    client(
      update ? "put" : "post",
      update ? `/update-coffee-details/${id}` : "/add-coffee",
      coffeeData
    ).then((res) => {
      if (res?.data?.insertedId || res?.data?.modifiedCount) {
        if (!update) form.reset();
        Toast.fire({
          icon: "success",
          title: `Coffee ${update ? "updated" : "added"} successfully`,
        });
      } else
        Toast.fire({
          icon: "error",
          title: "Something went wrong",
        });
    });
  };
  const formCSS = "flex flex-col md:flex-row justify-between gap-6 md:*:flex-1";
  return (
    <section className="max-w-md sm:container xl:max-w-screen-xl mx-auto mt-8 mb-16">
      <HomeButton />
      <div className="bg-white-3f0 rounded-md py-[70px] px-10 md:px-16 lg:px-[112px] mt-8">
        <div className="*:!text-blue-151 text-center">
          <SectionHeadings heading="Add New Coffee" />
        </div>
        <p className="max-w-4xl mx-auto text-sm md:text-base text-coffee-a1a/70 text-center mt-6 mb-12">
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
        <form onSubmit={(e) => handleAddCoffeeDetails(e)} className="space-y-6">
          <div className={formCSS}>
            {formInput("Name", "Enter coffee name", name)}
            {formInput("Chef", "Enter coffee chef", chef)}
          </div>
          <div className={formCSS}>
            {formInput("Supplier", "Enter coffee supplier", supplier)}
            {formInput("Taste", "Enter coffee taste", taste)}
          </div>
          <div className={formCSS}>
            {formInput("Category", "Enter coffee category", category)}
            {formInput("Details", "Enter coffee details", details)}
          </div>
          <div>{formInput("Photo", "Enter photo URL", photo)}</div>
          <div className="*:w-full *:bg-orange-48c hover:*:bg-orange-577 *:text-coffee-a15">
            <MyButton
              type="submit"
              label={`${update ? "Update" : "Add"} Coffee`}
            />
          </div>
        </form>
      </div>
    </section>
  );
};

AddCoffee.propTypes = {
  update: PropTypes.bool,
};

export default AddCoffee;
