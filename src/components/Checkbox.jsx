const Checkbox = ({ disabled = false, checked, id }) => {
   return (
      <input
         id={id}
         type="checkbox"
         disabled={disabled}
         checked={checked}
         className="border-purple [&:not(:disabled):checked]:bg-purple h-[1.625rem] w-[1.625rem] appearance-none rounded-sm border bg-white bg-cover p-0 outline-none transition-[outline] duration-100 checked:p-0.5 focus-visible:scale-105 disabled:bg-[#c3c1e6] [&:not(:disabled):hover]:scale-105 [&:not(:disabled):hover]:bg-[#c3c1e6]"
      />
   );
};

export default Checkbox;
