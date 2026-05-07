import React, { use } from "react";
import { NavLink } from "react-router";
const categoriesPromise = fetch("/categories.json").then((res) => res.json());
const Categories = () => {
  const categories = use(categoriesPromise);
  //   console.log(categories)
  return (
    <div>
      <h1>All Categories({categories.length})</h1>
      <div className="grid grid-cols-1 mt-5 gap-3">
        {categories.map((category) => (
          <NavLink className={"btn"}>{category.name}</NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
