import { Fade, Modal } from "@mui/material";
import { User } from "..";
import { useState } from "react";

interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className="card-wrapper w-[fit-content]">
        <div className="card w-[320px] rounded-[25px] bg-[#FFF]">
          <div className="image-content relative flex flex-col items-center py-[25px] gap-y-[5px]">
            <span className="overlay absolute left-0 top-0 h-full w-full bg-[#4070F4] rounded-tl-[25px] rounded-br-[0] rounded-tr-[25px] rounded-bl-[25px] after:content-[''] after:absolute after:right-[0] after:-bottom-[40px] after:h-[40px] after:w-[40px] after:rounded-tl-[0] after:rounded-br-[0] after:rounded-tr-[25px] after:rounded-bl-[0] after:bg-[#FFF] before:content-[''] before:absolute before:right-[0] before:-bottom-[40px] before:h-[40px] before:w-[40px] before:bg-[#4070F4]"></span>

            <div className="card-image p-[3px] relative h-[150px] w-[150px] rounded-full bg-[#FFF]">
              <img
                className="w-full h-full object-cover rounded-full border-[4px] border-solid border-[#4070F4]"
                src={user.avatar}
                alt={`${user.firstname} ${user.lastname}`}
              />
            </div>
          </div>

          <div className="card-content flex flex-col items-center py-[10px] px-[14px]">
            <h2 className="name text-[18px] font-medium text-[#333]">
              {user.firstname} {user.lastname}
            </h2>
            <div className="group relative">
              <p className="description text-[14px] text-[#707070] text-center line-clamp-3 min-h-[63px]">
                {user.description}
              </p>
              <div className="tooltip absolute z-10 invisible group-hover:visible bg-gray-800 text-white p-2 rounded shadow-lg whitespace-normal">
                {/* Tooltip */}
                {user.description}
              </div>
            </div>
            <button
              className="button font-[16px] text-[#fff] py-[8px] px-[16px] bg-[#4070F4] hover:bg-[#265DF2] rounded-[6px] m-[14px] [transition:all_0.3s_ease]"
              onClick={handleOpen}
            >
              View More
            </button>
          </div>
        </div>
      </div>
      <Modal open={open} onClose={handleClose}>
        <Fade in={open}>
          <div className="absolute left-1/2 top-1/2 bg-white p-12 rounded-md -translate-x-1/2 -translate-y-1/2 max-w-[25%]">
            <div className="card-image p-[3px] relative h-[150px] w-[150px] rounded-full bg-[#FFF] m-auto">
              <img
                className="w-full h-full object-cover rounded-full border-[4px] border-solid border-[#4070F4]"
                src={user.avatar}
                alt={`${user.firstname} ${user.lastname}`}
              />
            </div>
            <h2 className="font-bold text-center my-2"> User Information </h2>
            <div className="font-semibold">
              First name:{" "}
              <span className="font-normal text-[#707070]">
                {user.firstname || "N/A"}
              </span>
            </div>
            <div className="font-semibold">
              Last Name:{" "}
              <span className="font-normal text-[#707070]">
                {user.lastname || "N/A"}
              </span>
            </div>
            <div className="font-semibold">
              Role:{" "}
              <span className="font-normal text-[#707070]">
                {user.role || "N/A"}
              </span>
            </div>
            <div className="font-semibold">
              Join Date:{" "}
              <span className="font-normal text-[#707070]">
                {user.join_date || "N/A"}
              </span>
            </div>
            <div className="font-semibold">
              Description:{" "}
              <span className="font-normal text-[#707070]">
                {user.description || "N/A"}
              </span>
            </div>
          </div>
        </Fade>
      </Modal>
    </>
  );
};

export default UserCard;
