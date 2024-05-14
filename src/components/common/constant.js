import AccountBoxIcon from "@mui/icons-material/AccountBox";
import InventoryIcon from "@mui/icons-material/Inventory";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LogoutIcon from "@mui/icons-material/Logout";
import NotificationsIcon from "@mui/icons-material/Notifications";

export const passRegExp =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/;
export const phoneRegExp = /^\d{1,20}?$/;
export const registration_arr = [
  {
    name: "firstName",
    label: "First Name",
    type: "text",
  },
  {
    name: "lastName",
    label: "Last Name",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    type: "email",
  },
  {
    name: "mobileNumber",
    label: "Mobile Number",
    type: "text",
  },
  {
    name: "password",
    label: "Password",
    type: "Password",
  },
];
export const profileMenuArr = [
  {
    menu: "account settings",
    icon: <AccountBoxIcon />,
    subMenuArr: [
      {
        menu: "Profile Information",
        path: "/user/profile/user_info",
      },
      {
        menu: "Manage Addresses",
        path: "/user/profile/address",
      },
    ],
  },
  {
    menu: "my orders",
    icon: <InventoryIcon />,
    path: "/user/profile/orders",
  },
  {
    menu: "wishlist",
    icon: <FavoriteBorderIcon />,
    path: "/user/profile/wishlist",
  },
  {
    menu: "notification",
    icon: <NotificationsIcon />,
    path: "/user/profile/notifications",
  },
  {
    menu: "logout",
    icon: <LogoutIcon />,
    path: "/dashboard",
  },
];

export const menuArr = [
  {
    name: "My Profile",
    path: "/user/profile/user_info",
    icon: <AccountBoxIcon className="svg_icon" />,
  },
  {
    name: "Orders",
    path: "/user/profile/orders",
    icon: <InventoryIcon className="svg_icon" />,
  },
  {
    name: "Wishlist",
    path: "/user/profile/wishlist",
    icon: <FavoriteBorderIcon className="svg_icon" />,
  },
];

export const product_arr = [
  {
    name: "Dancing Doll",
    submenus: ["Dancing Doll"],
    id: "id_doll",
    image: "/assets/doll.jpg",
  },
  {
    name: "Hibiscus",
    submenus: ["Hibiscus Powder", "Henna"],
    id: "id_hibiscus",
    image: "/assets/hibiscus.jpg",
  },
  {
    name: "Oil",
    submenus: [
      "Amla Hair Oil",
      "Sesame Oil",
      "Rosemarry Oil",
      "Almond Oil",
      "Groundnut Oil",
      "Coconut Oil",
    ],
    id: "id_oil",
    image: "/assets/oil.png",
  },
];

export const sort_arr = [
  {
    label: "Popularity",
    name: "POPULARITY",
  },
  {
    label: "Price -- Low to High",
    name: "LOW_HIGH",
  },
  {
    label: "Price -- High to Low",
    name: "HIGH_LOW",
  },
  {
    label: "Newest First",
    name: "NEW",
  },
];
