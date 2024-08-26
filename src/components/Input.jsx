const Input = ({ className, type = "text", placeholder, searchIcon }) => {
   return (
      <div className={`relative ${className || ""}`}>
         <input
            type={type}
            autoComplete="off"
            placeholder={placeholder}
            className={`border-purple font-inter text-purple block min-h-[2.375rem] w-full appearance-none rounded-[.3125rem] border border-solid bg-white px-4 py-1 leading-none placeholder:text-[#c3c1e6] placeholder:transition-opacity placeholder:duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#6c63ff66] focus-visible:placeholder:opacity-0 ${searchIcon ? "pe-12 ps-4" : ""}`}
         />
         {searchIcon && (
            <svg className="text-purple absolute right-4 top-1/2 h-[1.3125rem] w-[1.3125rem] -translate-y-1/2">
               <use xlinkHref="#search" />
            </svg>
         )}
      </div>
   );
};

export default Input;
