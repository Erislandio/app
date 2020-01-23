import React from "react";
import { FaProjectDiagram, FaTasks } from "react-icons/fa";
import {
  MdDashboard,
  MdPeople,
  MdAccountBox,
  MdSettings,
  MdExitToApp
} from "react-icons/md";
export const UserContext = React.createContext();

export const userNotDefined = {
  User: {
    name: "",
    lastname: "",
    email: "",
    image: "",
    projects: [],
    tasks: []
  }
};

export const menuItens = [
  {
    title: "Dashboard",
    icon: MdDashboard,
    link: "/dashboard"
  },
  {
    title: "Projetos",
    icon: FaProjectDiagram,
    link: "/projects"
  },
  {
    title: "Tarefas",
    icon: FaTasks,
    link: "/tasks"
  },
  {
    title: "Membros",
    icon: MdPeople,
    link: "/members"
  },
  {
    title: "Conta",
    icon: MdAccountBox,
    link: "/account"
  },
  {
    title: "Settings",
    icon: MdSettings,
    link: "/settings"
  },
  {
    title: "Sair",
    icon: MdExitToApp,
    link: "/"
  }
];
