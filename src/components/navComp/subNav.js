import React from "react";

function SubNav() {
  let arr = [
    {
      name: "Dancing Doll",
      submenus: ["Thanjavur Dancing Doll"],
      id: "id_doll",
    },
    {
      name: "Hibiscus",
      submenus: ["Hibiscus Powder", "Henna"],
      id: "id_hibiscus",
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
    },
  ];
  const menuItems = [
    { name: "Menu 1", submenus: ["Submenu 1-1", "Submenu 1-2", "Submenu 1-3"] },
    { name: "Menu 2", submenus: ["Submenu 2-1", "Submenu 2-2", "Submenu 2-3"] },
    { name: "Menu 3", submenus: ["Submenu 3-1", "Submenu 3-2", "Submenu 3-3"] },
  ];
  return (
    <div className="d-flex w-25 m-auto">
      {arr.map((item, index) => (
        <div className="col" key={index}>
          <div className="dropdown">
            <button
              className="btn dropdown-toggle"
              type="button"
              id={"dropdownMenuButton" + index}
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {item.name}
            </button>
            <div
              className="dropdown-menu"
              aria-labelledby={"dropdownMenuButton" + index}
            >
              {item.submenus.map((submenuItem, subIndex) => (
                <p className="dropdown-item" key={subIndex}>
                  {submenuItem}
                </p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SubNav;
