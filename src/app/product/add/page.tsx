"use client";

import { useCallback, useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";

import type { SelectLoadOptionsType, SelectOption, TProductInput } from "@/types";

import ProductInput from "@/components/ProductInput";
import { useAddShopModal } from "@/hooks/useAddShopModal";
import AsyncCreatableSelect from "react-select/async-creatable";

export default function Page({
  searchParams
}: {
  searchParams: {
    name: string | undefined;
  };
}) {
  const shopModal = useAddShopModal();

  const [shop, setShop] = useState<string>("");
  const [items, setItems] = useState<TProductInput[]>([{
    name: "",
    quantity: 0,
    price: 0
  }]);

  const handleCreate = useCallback((input: string) => {
    shopModal.setData(input);
    shopModal.open();
  }, [shopModal]);

  const loadOptions: SelectLoadOptionsType = useCallback((input, callback) => {
    // Simulate API call
    if (!input) {
      callback([]);
      return;
    }

    const options: SelectOption[] = [
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' }
    ];

    setTimeout(() => {
      const filteredOptions = options.filter(option =>
        option.label.toLowerCase().includes(input.toLowerCase())
      );
      callback(filteredOptions);
    }, 1000);
  }, []);

  const handleAddProductInput = useCallback(() => {
    setItems([...items, { name: "", quantity: 0, price: 0 }]);
  }, [items]);

  const handleRemoveProductInput = useCallback((index: number) => {
    const newItems = items.filter((_, idx) => idx !== index);
    setItems(newItems);
  }, [items]);

  const handleInputChange = useCallback((index: number, field: string, value: any) => {
    const newItems = items.map((item, idx) =>
      idx === index ? { ...item, [field]: value } : item
    );
    setItems(newItems);
  }, [items]);

  useEffect(() => {
    if (!searchParams.name) return;

    handleInputChange(0, "name", searchParams.name);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  return (
    <div className="flex flex-col gap-6 pb-12 justify-center items-center">
      <div className="flex flex-col w-[70vw] max-w-[600px] gap-3">
        <label htmlFor="">Toko</label>
        <AsyncCreatableSelect
          instanceId={'react-select'}
          className="basic-single w-[70vw] max-w-[600px] text-xs md:text-base"
          classNamePrefix="select"
          closeMenuOnSelect
          isSearchable
          cacheOptions
          defaultOptions
          noOptionsMessage={() => shop ? 'Tidak ada hasil' : 'Ketik untuk mencari'}
          loadingMessage={() => 'Loading...'}
          placeholder="Cari toko..."
          onChange={(e) => setShop(e?.valueOf() ?? "")}
          loadOptions={loadOptions as any}
          onCreateOption={handleCreate}
          value={shop}
          formatCreateLabel={(inputValue) => `Buat toko baru: ${inputValue}`}
          defaultValue={""}
        />
        {/* <hr className="h-px my-4 bg-gray-700 border-0 w-[70vw]" /> */}
        <div>
          {items.map((item, index) => (
            <ProductInput
              key={index}
              index={index}
              value={item}
              onChange={(field: string, value: any) => handleInputChange(index, field, value)}
              onRemove={() => handleRemoveProductInput(index)}
            />
          ))}
        </div>
        <div className="flex flex-1 justify-center">
          <button
            onClick={handleAddProductInput}
            className="text-white bg-green-500 p-2 rounded-lg hover:bg-green-600 mt-3"
          >
            <FaPlus />
          </button>
        </div>
        <div className="flex flex-1 justify-end">
          <button className="text-white bg-black py-2 px-5 rounded-lg hover:bg-gray-600">
            Simpan
          </button>
        </div>
      </div>
    </div>
  );
}
