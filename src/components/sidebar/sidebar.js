import React, { useState, useContext } from "react";
import { UserContext, menuItens } from "../context/userContext";
import { ProfilePicture } from "../header/profilePicture";
import Modal from "react-responsive-modal";
import MyDropzone from "../header/dropzone";
import { SubmenuItem } from "../components/subMenuItem";

export const SideBar = ({ open }) => {
  const {
    User: { name, lastname }
  } = useContext(UserContext);

  const [openModal, setOpenModal] = useState(false);
  const [openDrop, setOpenDrop] = useState(false);
  
  return (
    <div id="sidebar" className={`${open ? " open " : " closed"}`}>
      <div className="profile-header">
        <span onClick={() => setOpenModal(true)}>
          <ProfilePicture />
        </span>
        <span className="user-name">{`${name} ${lastname}`}</span>
        <span
          className="icon-menu-profile"
          onClick={() => setOpenDrop(!openDrop)}
        ></span>
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
      <div className="sub-menu">
        <ul>
          {menuItens.map(({ title, link, icon }, index) => {
            return (
              <SubmenuItem key={index} title={title} icon={icon} link={link} />
            );
          })}
        </ul>
      </div>
    </div>
  );
};
