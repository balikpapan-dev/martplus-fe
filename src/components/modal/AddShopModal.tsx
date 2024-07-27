"use client";

import { useEffect, useState } from 'react';
import Select from "react-select";

import { useAddShopModal } from '@/hooks/useAddShopModal';
import useInput from '@/hooks/useInput';
import { CITIES } from '@/data/cities';

import Modal from '../ui/Modal';
import Input from '../ui/Input';

const AddShopModal = () => {
  const modal = useAddShopModal();

  const [shop, onShopChange, setShop] = useInput("");
  const [location, setLocation] = useState<string>("");

  useEffect(() => {
    if (!modal.isOpen) {
      setShop("");
    }
  }, [modal.isOpen, setShop]);

  useEffect(() => {
    if (!modal.data) return;

    setShop(modal.data);
  }, [modal.data, setShop]);

  if (!modal.isOpen) return null;

  return (
    <Modal
      title="Input Produk"
      onClose={modal.close}
      zIndex={200}
      footer={
        <button className="text-white bg-black py-2 px-5 rounded-lg hover:bg-gray-600">
          Simpan
        </button>
      }
    >
      <div className="flex gap-3 items-center mb-3">
        <div className="text-nowrap">Nama Toko</div>
        <Input
          type="text"
          value={shop}
          onChange={onShopChange}
          placeholder="Toko"
          className="w-full"
        />
      </div>
      <div className="flex gap-3 items-center">
        <label>Lokasi</label>
        <Select
          instanceId={'react-select'}
          className="basic-single w-[70vw] max-w-[600px] text-xs md:text-base"
          classNamePrefix="select"
          closeMenuOnSelect
          isSearchable
          noOptionsMessage={() => 'Tidak ada hasil'}
          loadingMessage={() => 'Loading...'}
          placeholder="Cari lokasi..."
          onChange={(e) => setLocation(e?.valueOf() ?? "")}
          options={CITIES as any}
          value={location}
          defaultValue={null}
        />
      </div>
    </Modal>
  )
}

export default AddShopModal
