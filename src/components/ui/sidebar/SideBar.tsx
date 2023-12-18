"use client";
import { useUiStore } from "@/store";
import clsx from "clsx";
import Link from "next/link";
import { title } from "process";
import {
  IoCloseOutline,
  IoLogInOutline,
  IoLogOutOutline,
  IoPeopleOutline,
  IoPersonOutline,
  IoSearchOutline,
  IoShirtOutline,
  IoTicketOutline,
} from "react-icons/io5";

export default function SideBar() {
  const ListMenuClient = [
    {
      icon: <IoPersonOutline size={30} />,
      title: "Perfil",
      href: "/",
    },
    {
      icon: <IoTicketOutline size={30} />,
      title: "Ordenes",
      href: "/",
    },
    {
      icon: <IoLogInOutline size={30} />,
      title: "Ingresar",
      href: "/",
    },
    {
      icon: <IoLogOutOutline size={30} />,
      title: "Salir",
      href: "/",
    },
  ];

  const ListMenuAdmin = [
    {
      icon: <IoShirtOutline size={30} />,
      title: "Productos",
      href: "/admin",
    },
    {
      icon: <IoTicketOutline size={30} />,
      title: "Ordenes",
      href: "/admin",
    },
    {
      icon: <IoPeopleOutline size={30} />,
      title: "Usuarios",
      href: "/admin",
    },
  ];

  const isSideMenuOpen = useUiStore((state) => state.isSideMenuOpen);
  const closeSideMenu = useUiStore((state) => state.closeSideMenu);

  return (
    <div className="">
      {isSideMenuOpen && (
        <>
          {/*  Backgriund black */}
          <div className="fixed top-0 left-0 w-screen h-screen z-10 bg-black bg-opacity-30"></div>

          {/* Background blur */}
          <div className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm"
            onClick={closeSideMenu}
          ></div>
        </>
      )}

      {/* Sidebar */}
      <nav
        className={clsx(
          "fixed p-5 right-0 top-0 w-[500px] h-screen bg-white z-20 shadow-2xl transform transition-all duration-300",
          {
            "translate-x-full": !isSideMenuOpen,
          }
        )}
      >
        <IoCloseOutline
          size={50}
          className="absolute top-5 right-5 cursor-pointer"
          onClick={closeSideMenu}
        />

        {/* Input */}
        <div className="relative mt-14">
          <IoSearchOutline size={20} className="absolute top-2 left-2" />
          <input
            type="text"
            placeholder="Buscar"
            className="w-full bg-gray-50 rounded pl-10 pr-10 boder-b-2 text-xl boder-gray-200 focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* menu */}
        {ListMenuClient.map((item, index) => (
          <Link
            key={title + index}
            href={item.href}
            className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
          >
            {item.icon}
            <span className="ml-3 text-xl">{item.title}</span>
          </Link>
        ))}

        {/* Line Separator */}
        <div className="w-full h-px bg-gray-200 my-10"></div>

        {/* Menu admin */}

        {ListMenuAdmin.map((item, index) => (
          <Link
            key={title + index}
            href={item.href}
            className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
          >
            {item.icon}
            <span className="ml-3 text-xl">{item.title}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}
