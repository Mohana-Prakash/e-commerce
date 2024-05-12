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
