import React from "react";

const Search = ({ onChange }) => {
  return (
    <>
      <input
        onChange={onChange}
        className="font-general-medium
                                pr-3
                                pl-1
                                sm:px-4
                                py-2
                                border
                                duration-1000
                            border-gray-200
                                dark:border-secondary-dark
                                rounded-lg
                                text-sm
                                sm:text-md
                                bg-secondary-light
                                dark:bg-ternary-dark
                                text-primary-dark
                                dark:text-ternary-light
                                "
        id="name"
        name="name"
        type="search"
        required=""
        placeholder="Search Projects"
        aria-label="Name"
      />
    </>
  );
};

export default Search;
