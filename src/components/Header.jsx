import { useState } from "react";
import Input from "./Input";
import Select from "./Select";

const options = [
   { label: "All", value: 1 },
   { label: "Complete", value: 2 },
   { label: "Incomplete", value: 3 },
];

const Header = () => {
   const [value, setValue] = useState(options[0]);

   return (
      <div className="flex w-full items-center gap-4 [&:not(:last-child)]:mb-[1.875rem]">
         <Input
            className="flex-grow"
            type="search"
            placeholder="Search note..."
            searchIcon={true}
         />
         <Select
            value={value}
            onChange={(o) => setValue(o)}
            options={options}
         />
      </div>
   );
};

export default Header;
