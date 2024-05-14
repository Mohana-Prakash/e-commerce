import React from "react";
import { sort_arr } from "./constant";

function Filter({ filterValue, setFilterValue }) {
  return (
    <div className="d-flex justify-content-end border-bottom p-1">
      {sort_arr.map((e) => {
        return (
          <span
            key={e.name}
            className={`mx-3 ${
              filterValue === e.name ? "filter_menu_active" : "filter_menu"
            }`}
            onClick={() => setFilterValue(e.name)}
            style={{
              cursor: "pointer",
            }}>
            {e.label}
          </span>
        );
      })}
    </div>
  );
}
export default Filter;
