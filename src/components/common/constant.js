import AccountBoxIcon from "@mui/icons-material/AccountBox";
import InventoryIcon from "@mui/icons-material/Inventory";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LogoutIcon from "@mui/icons-material/Logout";

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
