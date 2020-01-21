import React, { useContext } from "react";
import { UserContext } from "../context/userContext";
import { UserNotDefined } from "../assets/svgs";

export const ProfilePicture = ({ modal }) => {
  const {
    User: { image, name, lastname }
  } = useContext(UserContext);

  return (
    <div className="profile-picture">
      {image != null ? (
        <img
          width={`${modal ? "200px" : "40px"}`}
          height={`${modal ? "200px" : "40px"}`}
          src={image}
          alt={`${name} ${lastname}`}
          style={{ borderRadius: "50%" }}
        />
      ) : (
        <div style={{ display: "flex" }}>
          <UserNotDefined />
        </div>
      )}
    </div>
  );
};
