import { useState, useRef, useEffect } from "react";
import { isMobile } from "../functions";

const Select = ({ value, onChange, options, changeFilter }) => {
   const [isOpen, setIsOpen] = useState(false);
   const [highlightedIndex, setHighlightedIndex] = useState(0);
   const containerRef = useRef(null);

   function selectOption(option) {
      if (option !== value) onChange(option);
   }

   function isOptionSelected(option) {
      return option === value;
   }

   useEffect(() => {
      if (isOpen) setHighlightedIndex(0);
   }, [isOpen]);

   useEffect(() => {
      const handler = (e) => {
         if (e.target != containerRef.current) return;
         switch (e.code) {
            case "Enter":
            case "Space":
               setIsOpen((prev) => !prev);
               if (isOpen) selectOption(options[highlightedIndex]);
               break;
            case "ArrowUp":
            case "ArrowDown": {
               if (!isOpen) {
                  setIsOpen(true);
                  break;
               }

               const newValue =
                  highlightedIndex + (e.code === "ArrowDown" ? 1 : -1);
               if (newValue >= 0 && newValue < options.length) {
                  setHighlightedIndex(newValue);
               }
               break;
            }
            case "Escape":
               setIsOpen(false);
               break;
         }
      };
      containerRef.current?.addEventListener("keydown", handler);

      return () => {
         containerRef.current?.removeEventListener("keydown", handler);
      };
   }, [isOpen, highlightedIndex, options]);

   return (
      <div
         ref={containerRef}
         onBlur={() => setIsOpen(false)}
         onClick={() => setIsOpen((prev) => !prev)}
         tabIndex={0}
         className={`relative flex min-h-[2.375rem] w-40 items-center gap-2 rounded-[.3125rem] border-2 px-[.625rem] py-1 shadow-[0_0_4px_0_#6c63ff] outline-none focus-visible:border-purple focus-visible:bg-[#534CC2] focus-visible:shadow-none ${isOpen ? "border-purple bg-[#534CC2] shadow-none" : "border-purple bg-purple"}`}
      >
         <span className="grow text-lg uppercase leading-none text-white">
            {value?.label}
         </span>
         <div>
            <svg className={`h-1 w-2 text-white ${isOpen ? "rotate-180" : ""}`}>
               <use xlinkHref="#arrow-down" />
            </svg>
         </div>
         <ul
            className={`absolute left-0 top-[calc(100%+1px)] z-50 max-h-60 w-full overflow-y-auto rounded-[.3125rem] border border-purple bg-white font-normal text-purple ${isOpen ? "block" : "hidden"}`}
         >
            {options.map((option, index) => (
               <li
                  onClick={(e) => {
                     e.stopPropagation();
                     selectOption(option);
                     changeFilter(option.label);
                     setIsOpen(false);
                  }}
                  onMouseEnter={() => setHighlightedIndex(index)}
                  key={option.value}
                  className={`cursor-pointer px-1.5 py-2 ${isOptionSelected(option) ? "bg-purple/20" : ""} ${!isMobile() && index === highlightedIndex ? "bg-purple/20" : ""}`}
               >
                  {option.label}
               </li>
            ))}
         </ul>
      </div>
   );
};

export default Select;
