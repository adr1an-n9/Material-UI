import React from "react";
import { Autocomplete } from "@mui/material";
import { Typography } from "@mui/material";

const options = Array.from({ length: 10000 }, (_, index) => ({
  label: `${index.toString(36)}${index}`,
  value: `${index.toString(36)}${index}`,
}));

const handleChange = (event: any, value: any) => {
  console.log(`selected ${value}`);
};

const App = () => (
  <>
    <Typography variant="h4">{options.length} Items</Typography>
    <Autocomplete
      multiple
      options={options}
      defaultValue={[options[10], options[12]]}
      onChange={handleChange}
      renderInput={(params) => (
        <div ref={params.InputProps.ref}>
          <input {...params.inputProps} placeholder="Please select" />
        </div>
      )}
      getOptionLabel={(option) => option.label}
    />
  </>
);

export default App;
