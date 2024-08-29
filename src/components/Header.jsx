import { useState } from "react";
import Input from "./Input";
import Select from "./Select";

const options = [
   { label: "All", value: 1 },
   { label: "Complete", value: 2 },
   { label: "Incomplete", value: 3 },
];

const Header = ({ changeFilter, query, setQuery }) => {
   const [value, setValue] = useState(options[0]);

   return (
      <div className="flex w-full items-center gap-4 [&:not(:last-child)]:mb-[1.875rem]">
         <Input
            name="search"
            className="flex-grow"
            type="search"
            placeholder="Search note..."
            searchIcon={true}
            valueQuery={query}
            onChangeQuery={(e) => setQuery(e.target.value)}
         />
         <Select
            value={value}
            onChange={(o) => setValue(o)}
            options={options}
            changeFilter={changeFilter}
         />
      </div>
   );
};

export default Header;
