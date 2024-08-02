"use client";

import { FaTrashAlt } from "react-icons/fa";
import AsyncCreatableSelect from "react-select/async-creatable";

import type { SelectLoadOptionsType, TProductInput } from "@/types";

import Input from "./ui/Input";

const ProductInput: React.FC<{
  index: number;
  value: TProductInput,
  onChange: (field: string, value: any) => void,
  onRemove: () => void
  onCreate: (input: string) => void,
  loadOptions: SelectLoadOptionsType
}> = ({
  index,
  value,
  onChange,
  onRemove,
  onCreate,
  loadOptions
}) => {
    return (
      <div className="flex flex-1 flex-col gap-3 mt-3">
        <div className="text-lg font-semibold">Produk #{index + 1}</div>
        <div className="flex gap-3 items-center">
          <label htmlFor="">Produk</label>
          <AsyncCreatableSelect
            instanceId={'react-select'}
            className="basic-single w-[70vw] max-w-[600px] text-xs md:text-base"
            classNamePrefix="select"
            closeMenuOnSelect
            isSearchable
            cacheOptions
            defaultOptions
            noOptionsMessage={() => value.name ? 'Tidak ada hasil' : 'Ketik untuk mencari'}
            loadingMessage={() => 'Loading...'}
            placeholder="Cari produk..."
            onChange={(e) => onChange('name', e?.valueOf() ?? "")}
            loadOptions={loadOptions as any}
            onCreateOption={onCreate}
            value={value.name}
            formatCreateLabel={(inputValue) => `Buat produk baru: ${inputValue}`}
            defaultValue={""}
          />
        </div>
        <div className="flex gap-3 items-center">
          <label htmlFor="">Jumlah</label>
          <Input
            type="number"
            value={value.quantity}
            onChange={(e) => onChange('quantity', e.target.value)}
            placeholder="Jumlah"
            className="w-full"
          />
        </div>
        <div className="flex gap-3 items-center">
          <label htmlFor="">Harga</label>
          <Input
            type="number"
            value={value.price}
            onChange={(e) => onChange('price', e.target.value)}
            placeholder="Harga"
            className="w-full"
          />
        </div>
        <div className="flex flex-1 justify-end">
          <button
            onClick={onRemove}
            className="text-white bg-red-500 p-2 rounded-lg hover:bg-red-600"
          >
            <FaTrashAlt />
          </button>
        </div>
        <hr className="h-px my-2 bg-gray-700 border-0" />
      </div>
    );
  };

export default ProductInput;
