const Input = ({
   name,
   className,
   type = "text",
   placeholder,
   searchIcon,
   text,
   setText,
   valueQuery,
   onChangeQuery,
}) => {
   return (
      <div className={`relative ${className || ""}`}>
         <input
            type={type}
            autoComplete="off"
            placeholder={placeholder}
            value={name === "search" ? valueQuery : text}
            onChange={
               name === "search"
                  ? (e) => onChangeQuery(e)
                  : (e) => setText(e.target.value)
            }
            className={`block min-h-[2.375rem] w-full appearance-none rounded-[.3125rem] border border-solid border-purple bg-white px-4 py-1 font-inter leading-none text-purple placeholder:text-[#c3c1e6] placeholder:transition-opacity placeholder:duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#6c63ff66] focus-visible:placeholder:opacity-0 dark:border-white dark:bg-black dark:text-white dark:placeholder:text-[#666] dark:focus-visible:outline-[#666] ${searchIcon ? "pe-12 ps-4" : ""}`}
         />
         {searchIcon && (
            <svg className="absolute right-4 top-1/2 h-[1.3125rem] w-[1.3125rem] -translate-y-1/2 text-purple dark:text-white">
               <use xlinkHref="#search" />
            </svg>
         )}
      </div>
   );
};

export default Input;
