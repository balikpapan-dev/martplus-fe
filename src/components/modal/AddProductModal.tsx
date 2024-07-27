"use client";

import { useCallback, useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";

import { useAddProductModal } from "@/hooks/useAddProductModal";
import type { SelectLoadOptionsType, SelectOption, TProductInput } from "@/types";

import Modal from "../ui/Modal";
import ProductInput from "../ProductInput";
import { useAddShopModal } from "@/hooks/useAddShopModal";
import AsyncCreatableSelect from "react-select/async-creatable";

const AddProductModal = () => {
  const modal = useAddProductModal();
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
    if (!modal.data) return;

    handleInputChange(0, "name", modal.data);
    modal.setData("");
  }, [modal, handleInputChange]);

  useEffect(() => {
    if (!modal.isOpen) {
      setItems([{ name: "", quantity: 0, price: 0 }]);
      setShop("");
    }
  }, [modal.isOpen, setShop]);

  if (!modal.isOpen) return null;

  return (
    <Modal
      title="Input Produk"
      onClose={modal.close}
      footer={
        <button className="text-white bg-black py-2 px-5 rounded-lg hover:bg-gray-600">
          Simpan
        </button>
      }
    >
      <div className="flex gap-3 items-center">
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
      </div>
      <hr className="h-px my-4 bg-gray-700 border-0" />
      {items.map((item, index) => (
        <ProductInput
          key={index}
          index={index}
          value={item}
          onChange={(field: string, value: any) => handleInputChange(index, field, value)}
          onRemove={() => handleRemoveProductInput(index)}
        />
      ))}
      <div className="flex flex-1 justify-center">
        <button
          onClick={handleAddProductInput}
          className="text-white bg-green-500 p-2 rounded-lg hover:bg-green-600 mt-3"
        >
          <FaPlus />
        </button>
      </div>
    </Modal>
  );
};

export default AddProductModal;