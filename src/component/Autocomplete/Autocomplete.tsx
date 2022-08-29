import { SyntheticEvent, useCallback } from "react";
import {
  Autocomplete as MUIAutocomplete,
  AutocompleteValue,
  TextField,
} from "@mui/material";

export interface AutocompleteProps<O> {
  loading: boolean;
  options: O[];
  disabled: boolean;
  values: AutocompleteValue<O, true, false, true>;
  getOptionLabel: (option: O) => string;
  onChange: (selectedOptions: O[]) => void;
}

export const Autocomplete = <O,>({
  options,
  loading,
  disabled,
  values,
  getOptionLabel,
  onChange,
}: AutocompleteProps<O>) => {
  const handleOnChange = useCallback(
    (e: SyntheticEvent, values: AutocompleteValue<O, true, false, true>) =>
      onChange(values as O[]),
    []
  );

  return (
    <MUIAutocomplete
      multiple
      options={options}
      getOptionLabel={getOptionLabel}
      sx={{ width: "100%" }}
      disabled={disabled}
      onChange={handleOnChange}
      value={values as any}
      renderTags={(options) =>
        options.reduce(
          (acc, o) =>
            acc ? `${acc}, ${getOptionLabel(o)}` : getOptionLabel(o),
          ""
        )
      }
      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined"
          label="Select cryptocurrencies"
          placeholder="Select up to 5 cryptocurrencies"
        />
      )}
    />
  );
};
