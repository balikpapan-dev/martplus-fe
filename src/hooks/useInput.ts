import { useState } from 'react';

export type IUseInput<T> = [
  value: T,
  onChange: (e: any) => void,
  setValue: React.Dispatch<React.SetStateAction<T>>
];

export default function useInput<T>(defaultValue: T): IUseInput<T> {
  const [value, setValue] = useState<T>(defaultValue);

  const onChange = (e: any): void => {
    setValue(e.target.value as T);
  };

  return [value, onChange, setValue as React.Dispatch<React.SetStateAction<T>>];
}
