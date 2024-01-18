import { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  SDivider,
  SLink,
  SLinkContainer,
  SLinkIcon,
  SLinkLabel,
  SLinkNotification,
  SLogo,
  SSidebar,
  SSidebarButton,
} from "./styles";

import {
  AiOutlineApartment,
  AiOutlineHome,
  AiOutlineLeft,
  AiOutlineSetting,
} from "react-icons/ai";
import { MdLogout, MdOutlineAnalytics } from "react-icons/md";
import { BsPeople } from "react-icons/bs";

import { iconAry } from "../../assets";

export function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <SSidebar
      isOpen={sidebarOpen}
      style={!sidebarOpen ? { width: `fit-content` } : {}}
    >
      <>
        <SSidebarButton
          isOpen={sidebarOpen}
          onClick={() => setSidebarOpen((p) => !p)}
        >
          <AiOutlineLeft />
        </SSidebarButton>
      </>
      <SLogo>
        <img src={iconAry} alt="logo" />
      </SLogo>
      <SDivider />
      {linksArray.map(({ icon, label, notification, to }) => (
        <SLinkContainer key={label} isActive={pathname === to}>
          <SLink to={to} style={!sidebarOpen ? { width: `fit-content` } : {}}>
            <SLinkIcon>{icon}</SLinkIcon>
            {sidebarOpen && (
              <>
                <SLinkLabel>{label}</SLinkLabel>
                {!!notification && (
                  <SLinkNotification>{notification}</SLinkNotification>
                )}
              </>
            )}
          </SLink>
        </SLinkContainer>
      ))}
      <SDivider />
      {secondaryLinksArray.map(({ icon, label, to }) => (
        <SLinkContainer key={label} isActive={pathname === to}>
          <SLink to={to} style={!sidebarOpen ? { width: `fit-content` } : {}}>
            <SLinkIcon>{icon}</SLinkIcon>
            {sidebarOpen && <SLinkLabel>{label}</SLinkLabel>}
          </SLink>
        </SLinkContainer>
      ))}
    </SSidebar>
  );
}

const linksArray = [
  {
    label: "Home",
    icon: <AiOutlineHome />,
    to: "/",
    notification: 0,
  },
  {
    label: "Statistics",
    icon: <MdOutlineAnalytics />,
    to: "/statistics",
    notification: 0,
  },
  {
    label: "Customers",
    icon: <BsPeople />,
    to: "/profile",
    notification: 0,
  },
  {
    label: "Diagrams",
    icon: <AiOutlineApartment />,
    to: "/diagrams",
    notification: 0,
  },
];

const secondaryLinksArray = [
  {
    label: "Settings",
    icon: <AiOutlineSetting />,
    to: "/settings",
  },
  {
    label: "Logout",
    icon: <MdLogout />,
    to: "/logout",
  },
];
