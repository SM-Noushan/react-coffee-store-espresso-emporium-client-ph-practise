import { FaRegEye, FaPen, FaTrash } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import "animate.css";
import PropTypes from "prop-types";
import client from "../utils/axios";
import { useContext } from "react";
import { RefetchContext } from "../pages/home/Home";

const swalWithCustomButtons = Swal.mixin({
  customClass: {
    confirmButton: "btn btn-error text-white",
    cancelButton: "btn btn-info text-white ml-4",
  },
  buttonsStyling: false,
});

const CoffeeCard = ({ coffee }) => {
  const refetch = useContext(RefetchContext);
  const { _id, name, chef, photo } = coffee || {};
  const handleDelete = (id) => {
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
        if (result.isConfirmed)
          client("delete", `/coffee/remove/${id}`).then((res) => {
            if (res?.data?.deletedCount) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Coffee details deleted",
                icon: "success",
              });
            } else
              Swal.fire({
                title: "Failed!",
                text: "Something went wrong",
                icon: "error",
              });
          });
      });
  };
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between items-center lg:items-center p-[30px] bg-white-4f1 rounded-[10px]">
      <div className="p-4">
        <img
          className="max-w-[193px] max-h-[239px] rounded-md"
          src={photo || "/assets/images/1.png"}
          alt="popular-coffee-img"
        />
      </div>
      <div className="*:text-coffee-a1a lg:*:text-lg xl:*:text-xl *:font-semibold flex-1">
        <p>
          Name:
          <span className="text-dark-b5b font-normal"> {name}</span>
        </p>
        <p>
          Chef:<span className="opacity-70 font-normal"> {chef}</span>
        </p>
        <p>
          Price:<span className="font-normal"> Yet to revealed!</span>
        </p>
      </div>
      <div className="flex lg:flex-col pt-4 lg:pt-0 lg:pl-4 gap-3 text-white *:rounded-md *:p-2 self-center md:self-end lg:self-center">
        <Link to={`/coffee-details/${_id}`} className="bg-orange-577 ">
          <FaRegEye />
        </Link>
        <Link className="bg-dark-93b">
          <FaPen />
        </Link>
        <button onClick={() => handleDelete(_id)} className="bg-red-744">
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

CoffeeCard.propTypes = {
  coffee: PropTypes.object.isRequired,
};

export default CoffeeCard;
