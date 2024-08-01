"use client";

import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import Select from "react-select";
import AsyncCreatableSelect from 'react-select/async-creatable';

import { CITIES } from "@/data/cities";
import { SelectLoadOptionsType, SelectOption } from "@/types";
import { useAddProductModal } from "@/hooks/useAddProductModal";

export default function Page() {
  const router = useRouter();
  // const addProductModal = useAddProductModal();

  const [location, setLocation] = useState<string>("");
  const [product, setProduct] = useState<string>("");

  const handleCreate = useCallback((input: string) => {
    // addProductModal.setData(input);
    // addProductModal.open();
    router.push(`/product/add?name=${input}`);
  }, [router]);

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

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col justify-center items-center gap-3">

        <h1>Cari harga termurah di dekatmu</h1>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 items-center justify-between">
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

          <div className="flex gap-2 items-center justify-between">
            <label>Produk</label>

            <AsyncCreatableSelect
              instanceId={'react-select'}
              className="basic-single w-[70vw] max-w-[600px] text-xs md:text-base"
              classNamePrefix="select"
              closeMenuOnSelect
              isSearchable
              cacheOptions
              defaultOptions
              noOptionsMessage={() => product ? 'Tidak ada hasil' : 'Ketik untuk mencari'}
              loadingMessage={() => 'Loading...'}
              placeholder="Cari produk..."
              onChange={(e) => setProduct(e?.valueOf() ?? "")}
              loadOptions={loadOptions as any}
              onCreateOption={handleCreate}
              value={product}
              formatCreateLabel={(inputValue) => `Buat produk baru: ${inputValue}`}
              defaultValue={""}
            />
          </div>
        </div>

      </div>
      <div>
        {/* Table */}
      </div>
    </div>
  );
}
