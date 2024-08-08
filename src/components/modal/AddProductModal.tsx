"use client";

import { useCallback, useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";

import { useAddProductModal } from "@/hooks/useAddProductModal";
import type { SelectLoadOptionsType, SelectOption, TProductInput } from "@/types";

import Modal from "../ui/Modal";
import ProductInput from "../ProductInput";
import { useAddShopModal } from "@/hooks/useAddShopModal";
import Input from "../ui/Input";
import useInput from "@/hooks/useInput";

const AddProductModal = () => {
  const modal = useAddProductModal();

  const [name, onNameChange, setName] = useInput("");
  const [barcode, onBarcodeChange] = useInput("");
  const [unit, onUnitChange] = useInput("");
  const [amount, onAmountChange] = useInput("");

  useEffect(() => {
    if (modal.data) {
      setName(modal.data);
    }
  }, [modal.data, setName]);

  // useEffect(() => {
  //   if (!modal.isOpen) {
  //     setItems([{ name: "", quantity: 0, price: 0 }]);
  //     setShop("");
  //   }
  // }, [modal.isOpen, setShop]);

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
      <div className="flex gap-3 items-center mb-3">
        <div className="text-nowrap">Nama Produk</div>
        <Input
          type="text"
          value={name}
          onChange={onNameChange}
          placeholder="Nama Produk"
          className="w-full"
        />
      </div>
      <div className="flex gap-3 items-center mb-3">
        <div className="text-nowrap">Barcode ID</div>
        <Input
          type="text"
          value={barcode}
          onChange={onBarcodeChange}
          placeholder="Barcode ID"
          className="w-full"
        />
      </div>
      <div className="flex gap-3 items-center mb-3">
        <div className="text-nowrap">Satuan Produk</div>
        <Input
          type="text"
          value={unit}
          onChange={onUnitChange}
          placeholder="Satuan Produk"
          className="w-full"
        />
      </div>
      <div className="flex gap-3 items-center mb-3">
        <div className="text-nowrap">Nilai Satuan</div>
        <Input
          type="text"
          value={amount}
          onChange={onAmountChange}
          placeholder="Nilai Satuan"
          className="w-full"
        />
      </div>
    </Modal>
  );
};

export default AddProductModal;