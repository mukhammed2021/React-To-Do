const Action = ({ className }) => {
   return (
      <button type="button" className={`${className}`}>
         <svg className={`h-[1.125rem] w-[1.125rem] text-[#cdcdcd]`}>
            <use xlinkHref={`#${className}`} />
         </svg>
      </button>
   );
};

export default Action;
