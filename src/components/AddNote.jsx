const AddNote = ({ className, setIsOpen }) => {
   return (
      <button
         type="button"
         onClick={() => setIsOpen((isOpen) => !isOpen)}
         className={`inline-flex h-[3.125rem] w-[3.125rem] items-center justify-center rounded-full bg-purple shadow-[0_0_4px_0_#6c63ff] transition-[background-color] duration-300 hover:border-2 hover:border-purple hover:bg-[#534cc2] focus-visible:bg-[#534cc2] focus-visible:shadow-[0_0_4px_0_#6c63ff] focus-visible:outline-2 focus-visible:outline-purple ${className}`}
      >
         <svg className="h-6 w-6 text-white">
            <use xlinkHref="#add" />
         </svg>
      </button>
   );
};

export default AddNote;
