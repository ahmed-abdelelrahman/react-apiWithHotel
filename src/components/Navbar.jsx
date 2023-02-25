import React from "react";
import useColorMode from "../hooks/useColorMode";
import { MdNightlightRound } from "react-icons/md";
import { BsSun } from "react-icons/bs";

const Navbar = () => {
  const [colorMode, setColorMode] = useColorMode();
  return (
    <div className='flex items-center justify-between h-16 shadow-md p-3 dark:text-zinc-50 dark:bg-neutral-800'>
      <div className='text-base font-bold	'>BookHotel</div>

      <div className=' flex items-center justify-between'>
        <div>
          <label class='relative inline-flex items-center cursor-pointer'>
            <input
              type='checkbox'
              value=''
              class='sr-only peer'
              onClick={() =>
                setColorMode(colorMode === "light" ? "dark" : "light")
              }
            />
            <div class="flex items-center justify-between p-2 w-11 h-6 bg-gray-200 peer-focus:outline-none  dark:text-zinc-50 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
              <i>
                <MdNightlightRound />
              </i>
              <i className='mr-1'>
                <BsSun />
              </i>
            </div>
          </label>
        </div>
        <a className='mx-2'>Home</a>
        <span>google</span>
      </div>
    </div>
  );
};

export default Navbar;
