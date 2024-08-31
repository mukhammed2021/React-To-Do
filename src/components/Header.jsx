import { useState } from "react";
import Input from "./Input";
import Select from "./Select";
import Theme from "./Theme";

const options = [
   { label: "All", value: 1 },
   { label: "Complete", value: 2 },
   { label: "Incomplete", value: 3 },
];

const Header = ({ changeFilter, query, setQuery, theme, setTheme }) => {
   const [value, setValue] = useState(options[0]);

   return (
      <div className="flex w-full flex-wrap-reverse justify-end items-center gap-4 [&:not(:last-child)]:mb-[1.875rem]">
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
         <Theme theme={theme} setTheme={setTheme} />
      </div>
   );
};

export default Header;
