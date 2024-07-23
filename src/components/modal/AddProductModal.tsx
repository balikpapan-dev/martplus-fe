"use client";

import { useState } from "react";

import { useAddProductModal } from "@/hooks/useAddProductModal";
import useInput from "@/hooks/useInput";
import type { TProductInput } from "@/types";

import Modal from "../ui/Modal";
import Input from "../ui/Input";
import ProductInput from "../ProductInput";
import { FaPlus } from "react-icons/fa";

const AddProductModal = () => {
  const modal = useAddProductModal();

  const [shop, onShopChange] = useInput("");
  const [items, setItems] = useState<TProductInput[]>([{
    name: "",
    quantity: 0,
    price: 0
  }]);

  if (!modal.isOpen) return null;

  const handleAddProductInput = () => {
    setItems([...items, { name: "", quantity: 0, price: 0 }]);
  };

  const handleRemoveProductInput = (index: number) => {
    const newItems = items.filter((_, idx) => idx !== index);
    setItems(newItems);
  };

  const handleInputChange = (index: number, field: string, value: any) => {
    const newItems = items.map((item, idx) =>
      idx === index ? { ...item, [field]: value } : item
    );
    setItems(newItems);
  };

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
        <Input
          type="text"
          value={shop}
          onChange={onShopChange}
          placeholder="Toko"
          className="w-full"
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