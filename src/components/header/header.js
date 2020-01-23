import React, { useContext, useState } from "react";
import { UserContext } from "../context/userContext";
import { IoIosMenu, IoIosArrowDown } from "react-icons/io";
import "./header.css";
import { ProfilePicture } from "./profilePicture";
import Modal from "react-responsive-modal";
import MyDropzone from "./dropzone";
import { Dropwdown } from "./dropdown";

export const Header = ({ setOpen, open }) => {
  const {
    User: { name, lastname }
  } = useContext(UserContext);

  const [openModal, setOpenModal] = useState(false);
  const [openDrop, setOpenDrop] = useState(false);

  return (
    <header id="header" className="header">
      <div className="header-container">
        <span className="menu-icon">
          <IoIosMenu size="40" onClick={() => setOpen(!open)} />
          <h3>TASKAPP</h3>
        </span>
        <div className="profile-header">
          <span onClick={() => setOpenModal(true)}>
            <ProfilePicture />
          </span>
          <span className="user-name">
            {name} <br />
            {lastname}
          </span>
          <span
            className="icon-menu-profile"
            onClick={() => setOpenDrop(!openDrop)}
          >
            <IoIosArrowDown size="20" />
          </span>
          <Dropwdown open={openDrop} />
        </div>
        <Modal
          id="profile-picture-modal"
          open={openModal}
          onClose={() => setOpenModal(false)}
          center
          classNames={{
            overlay: "modal-overlay",
            container: "modal-container"
          }}
        >
          <ProfilePicture modal />
          <MyDropzone />
        </Modal>
      </div>
    </header>
  );
};
