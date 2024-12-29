import React from "react";
type users = {
  pp?: string;
  username: string;
  useremail: string;
  password: any;
  phone?: number;
};

// ? we can send generic model as well
const Box: React.FC<users> = ({
  pp = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG0hdNKCuRMCIFTDP4EdCWBbzN5s6aI5OcmA&s",
  username,
  useremail,
  password,
  phone = 977,
}) => {
  return (
    <main className="h-full w-full  *:text-white rounded-md">
      <div className="card p-3 rounded-md flex justify-around">
        <div className="logos">
          <img
            src={pp}
            className="h-[100px] w-[100px] rounded-full"
            alt={username}
          />
          <h2>{username}</h2>
        </div>
        <div className="accountInfo bg-black rounded-md w-fit p-4">
          <h2>Email: {useremail}</h2>
          <h2>Password: {password}</h2>
          <h2>Phone :{phone}</h2>
        </div>
      </div>
    </main>
  );
};
export default Box;
