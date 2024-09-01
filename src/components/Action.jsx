const Action = ({ editRef, name, className, handleDelete, setIsOpenEdit }) => {
   return (
      <button
         type="button"
         onClick={
            name === "edit"
               ? () => setIsOpenEdit((isEdit) => !isEdit)
               : handleDelete
         }
         className={`${className}`}
      >
         <svg className={`h-[1.125rem] w-[1.125rem] text-[#cdcdcd]`}>
            <use xlinkHref={`#${className}`} />
         </svg>
      </button>
   );
};

export default Action;
