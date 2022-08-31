import { SyntheticEvent, useCallback } from "react";
import {
  Autocomplete as MUIAutocomplete,
  AutocompleteValue,
  TextField,
  TextFieldProps,
} from "@mui/material";

export interface AutocompleteProps<O> {
  options: O[];
  disabled: boolean;
  values: AutocompleteValue<O, true, false, true>;
  textFieldProps: Partial<TextFieldProps>;
  getOptionLabel: (option: O) => string;
  getOptionDisabled: (option: O) => boolean;
  onChange: (selectedOptions: O[]) => void;
}

export const Autocomplete = <O,>({
  options,
  disabled,
  values,
  textFieldProps,
  getOptionLabel,
  getOptionDisabled,
  onChange,
}: AutocompleteProps<O>) => {
  const handleOnChange = useCallback(
    (e: SyntheticEvent, values: AutocompleteValue<O, true, false, true>) =>
      onChange(values as O[]),
    [onChange]
  );

  return (
    <MUIAutocomplete
      multiple
      options={options}
      getOptionLabel={getOptionLabel}
      sx={{ width: "100%" }}
      disabled={disabled}
      onChange={handleOnChange}
      value={values as O[]}
      getOptionDisabled={getOptionDisabled}
      renderTags={(options) =>
        options.reduce(
          (acc, o) =>
            acc ? `${acc}, ${getOptionLabel(o)}` : getOptionLabel(o),
          ""
        )
      }
      renderInput={(params) => (
        <TextField {...params} variant="outlined" {...textFieldProps} />
      )}
    />
  );
};
