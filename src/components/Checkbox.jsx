const Checkbox = ({ disabled = false, checked, id, toggleNote }) => {
   return (
      <input
         id={id}
         type="checkbox"
         disabled={disabled}
         checked={checked}
         onChange={(e) => toggleNote(id, e.target.checked)}
         className="h-[1.625rem] w-[1.625rem] appearance-none rounded-sm border border-purple bg-white bg-cover p-0 outline-none transition-[outline] duration-100 checked:p-0.5 focus-visible:scale-105 disabled:bg-[#c3c1e6] dark:bg-black [&:not(:disabled):checked]:bg-purple [&:not(:disabled):hover]:scale-105 [&:not(:disabled):hover]:bg-[#c3c1e6]"
      />
   );
};

export default Checkbox;
