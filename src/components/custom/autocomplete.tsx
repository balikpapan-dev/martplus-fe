import { FC, ReactNode } from "react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../ui/command";

const AutoComplete: FC<{
  placeholder: string;
  data: any;
  notFound: ReactNode;
}> = ({ placeholder, data, notFound }) => {
  console.log(data);

  return (
    <Command>
      <CommandInput placeholder={placeholder} />
      <CommandList>
        {data ? (
          <CommandGroup>
            {data.map((data: { name: string }) => (
              <>
                <CommandItem key={data.name}>{data?.name}</CommandItem>
              </>
            ))}
          </CommandGroup>
        ) : undefined}
        <CommandEmpty>{notFound}</CommandEmpty>
      </CommandList>
    </Command>
  );
};

export default AutoComplete;
