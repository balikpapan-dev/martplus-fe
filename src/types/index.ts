import { OptionsOrGroups, GroupBase } from 'react-select';

export interface SelectOption {
  value: string;
  label: string;
}

// Define the loadOptions function type
export type SelectLoadOptionsType = (
  inputValue: string, 
  callback: (options: OptionsOrGroups<SelectOption, GroupBase<SelectOption>>) => void
) => void;
