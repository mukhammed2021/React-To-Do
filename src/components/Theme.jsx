import { useEffect } from "react";

const Theme = ({ theme, setTheme }) => {
   function handleTheme() {
      setTheme(theme === "dark" ? "light" : "dark");
   }

   useEffect(() => {
      if (theme === "dark") {
         document.documentElement.classList.remove("dark");
         document.body.classList.remove("dark:bg-black");
      } else {
         document.documentElement.classList.add("dark");
         document.body.classList.add("dark:bg-black");
      }
   }, [theme]);

   return (
      <button
         type="button"
         onClick={handleTheme}
         className="inline-flex h-[2.375rem] w-[2.375rem] items-center justify-center rounded-[.3125rem] bg-purple transition-[background-color] duration-300 hover:bg-[#5850dd] focus-visible:bg-[#5850dd] focus-visible:outline-none"
      >
         <svg className="h-[1.375rem] w-[1.375rem] text-white">
            <use xlinkHref={`#${theme}`} />
         </svg>
      </button>
   );
};

export default Theme;
