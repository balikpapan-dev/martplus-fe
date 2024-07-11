import Modal from "@/components/custom/modal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import StoreModal from "./StoreModal";
import AutoComplete from "@/components/custom/autocomplete";

const InputStore = () => {
  const store = [{ name: "indomaret" }, { name: "maxi" }];

  return (
    <>
      <AutoComplete
        placeholder="Cari toko di sekitarmu"
        data={store}
        notFound={
          <Modal
            title="Tambah Toko Baru"
            triggerComponent={<Button>Tambah Toko Baru</Button>}
            children={<StoreModal />}
          />
        }
      />
    </>
  );
};

export default InputStore;
