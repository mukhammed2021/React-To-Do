const AddNote = ({ className }) => {
   return (
      <button
         type="button"
         className={`bg-purple hover:border-purple focus-visible:outline-purple inline-flex h-[3.125rem] w-[3.125rem] items-center justify-center rounded-full shadow-[0_0_4px_0_#6c63ff] transition-[background-color] duration-300 hover:border-2 hover:bg-[#534cc2] focus-visible:bg-[#534cc2] focus-visible:shadow-[0_0_4px_0_#6c63ff] focus-visible:outline-2 ${className}`}
      >
         <svg className="h-6 w-6 text-white">
            <use xlinkHref="#add" />
         </svg>
      </button>
   );
};

export default AddNote;
