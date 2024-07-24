"use client";

import { HiMiniXMark } from "react-icons/hi2";

const Modal: React.FC<{
  title: string;
  onClose: () => void;
  footer: React.ReactNode;
  children?: React.ReactNode;
}> = ({
  title,
  onClose,
  footer,
  children
}) => {
    return (
      <div
        className="overflow-hidden fixed inset-0 flex items-center justify-center bg-neutral-800/70 outline-none focus:outline-none p-4 max-h-[100vh]"
        style={{
          zIndex: 100
        }}
      >
        <div className="bg-white rounded-3xl shadow-sm max-w-2xl max-h-[90vh] overflow-y-auto w-full p-5">
          <div className="flex flex-1 items-center justify-between py-2 pr-2">
            <div className="text-xl font-semibold">{title}</div>
            <HiMiniXMark className="text-xl cursor-pointer hover:text-red-500"
              onClick={onClose}
            />
          </div>

          <div className="my-4 h-[60vh] overflow-y-auto p-2">
            {children}
          </div>

          <div className="flex justify-end gap-3 pt-2 ">
            {footer}
          </div>
        </div>
      </div>
    )
  }

export default Modal