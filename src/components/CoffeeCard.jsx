import { FaRegEye, FaPen, FaTrash } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import "animate.css";

const CoffeeCard = () => {
  const handleDelete = () => {
    const swalWithCustomButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-error text-white",
        cancelButton: "btn btn-info text-white ml-4",
      },
      buttonsStyling: false,
    });

    swalWithCustomButtons
      .fire({
        title: "Are you sure?",
        text: "Are you sure that you want to delete it?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        showClass: {
          popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `,
        },
        hideClass: {
          popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `,
        },
      })
      .then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Deleted!",
            text: "Coffee Details Deleted",
            icon: "success",
          });
        }
      });
    console.log(alert);
  };
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between items-center lg:items-center p-[30px] bg-white-4f1 rounded-[10px]">
      <div>
        <img className="" src="/assets/images/1.png" alt="popular-coffee-img" />
      </div>
      <div className="*:text-coffee-a1a lg:*:text-lg xl:*:text-xl *:font-semibold flex-1">
        <p>
          Name:
          <span className="text-dark-b5b font-normal"> Americano Coffee</span>
        </p>
        <p>
          Chef:<span className="opacity-70 font-normal"> Mr. Martin Paul</span>
        </p>
        <p>
          Price:<span className="font-normal"> 800 Taka</span>
        </p>
      </div>
      <div className="flex lg:flex-col pt-4 lg:pt-0 lg:pl-4 gap-3 text-white *:rounded-md *:p-2 self-center md:self-end lg:self-center">
        <Link to={`/coffee-details`} className="bg-orange-577 ">
          <FaRegEye />
        </Link>
        <Link className="bg-dark-93b">
          <FaPen />
        </Link>
        <button onClick={() => handleDelete()} className="bg-red-744">
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default CoffeeCard;
