"use client";

import { Table, Input, Cascader } from "antd";
import dynamic from "next/dynamic";
import { FaPlus } from "react-icons/fa6";

import { CITIES } from "@/data/cities";

const BarcodeScanner = dynamic(() => import("@/components/BarcodeScanner"), { ssr: false });

const dataSource = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col justify-center items-center gap-3">
        {/* <Input
          addonBefore={<FaPlus
            className="text-lg text-gray-500 cursor-pointer hover:text-gray-700 transition-colors duration-200 ease-in-out"
          />}
          placeholder="Input Harga Barang"
          allowClear
          style={{ width: 600 }}
        />
        <Input.Search
          addonBefore={<Cascader
            placeholder="Kota"
            options={CITIES}
            style={{ width: 150 }}
          />}
          placeholder="Cari Barang"
          onSearch={() => {}}
          allowClear
          style={{ width: 600 }}
        /> */}
        <BarcodeScanner />
      </div>
      <div>
        <Table
          dataSource={dataSource}
          columns={columns}
        />
      </div>
    </div>
  );
}
