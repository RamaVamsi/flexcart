import { React, Fragment } from "react";
import { useState, useEffect } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import "../../src/App.css";

const SearchInput = () => {
  const [searchString, setSearchString] = useState([]);
  const [searchText, setSearchText] = useState([]);
  const getData = (data) => {
    fetch("https://fakestoreapi.com/products?limit=3")
      .then((res) => res.json())
      .then((data) => setSearchString(data));
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="pt-1 relative mx-auto text-gray-600">
      <Disclosure>
        <Menu as="div" className="ml-3 relative">
          <div>
            <Menu.Button className="flex text-sm focus:outline-none  ">
              <input
                className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                type="search"
                name="search"
                placeholder="Search"
                value={searchText}
                onChange={(item) => setSearchString(item.target.value)}
              />
            </Menu.Button>
          </div>
          <>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className=" mt-2 w-60 ">
                {searchString.map((i, index) => (
                  <a
                    className="block px-3 py-2 rounded-full text-black bg-white-700 hover:text-white"
                    key={index}
                  >
                    {i.title.slice(-7)}
                  </a>
                ))}
              </Menu.Items>
            </Transition>
          </>
        </Menu>
      </Disclosure>
    </div>
  );
};

export default SearchInput;
