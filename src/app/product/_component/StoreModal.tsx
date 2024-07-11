"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const StoreModal = () => {
  const [store, setStore] = useState<{
    name: string;
    place: string;
  }>({ name: "", place: "" });

  const handleOnChange = (name: string, value: string) => {
    setStore((store) => ({ ...store, [name]: value }));
  };

  const handleSubmit = () => {
    undefined;
  };

  console.log(store);

  return (
    <div className="flex flex-col gap-4">
      <Input
        name="name"
        placeholder="Apa Nama Tokonya ?"
        onChange={(e) => handleOnChange(e.target.name, e.target.value)}
      />
      <Input
        name="place"
        placeholder="Dimana lokasinya ?"
        onChange={(e) => handleOnChange(e.target.name, e.target.value)}
      />
      <Button onClick={handleSubmit}>Oke, Tambahkan</Button>
    </div>
  );
};

export default StoreModal;
