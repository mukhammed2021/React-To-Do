const Button = ({ children, className, handleOpen, handleAdd }) => {
   return (
      <button
         type="button"
         onClick={handleOpen || handleAdd}
         className={`h-[2.375rem] rounded-[.3125rem] px-[1.375rem] text-lg uppercase ${className}`}
      >
         {children}
      </button>
   );
};

export default Button;
