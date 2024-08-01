import type { TProductInput } from "@/types";
import Input from "./ui/Input";
import { FaTrashAlt } from "react-icons/fa";

const ProductInput: React.FC<{
  index: number;
  value: TProductInput,
  onChange: (field: string, value: any) => void,
  onRemove: () => void
}> = ({
  index,
  value,
  onChange,
  onRemove
}) => {
    return (
      <div className="flex flex-1 flex-col gap-3 mt-3">
        <div className="text-lg font-semibold">Produk #{index + 1}</div>
        <div className="flex gap-3 items-center">
          <label htmlFor="">Produk</label>
          <Input
            type="text"
            value={value.name}
            onChange={(e) => onChange('name', e.target.value)}
            placeholder="Produk"
            className="w-full"
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
