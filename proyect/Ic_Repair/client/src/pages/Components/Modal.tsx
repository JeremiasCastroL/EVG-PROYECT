import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  onConfirm?: () => void;
  confirmText?: string;
  cancelText?: string;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title = "Modal",
  children,
  onConfirm,
  confirmText = "Confirmar",
  cancelText = "Cancelar",
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 top-[50%] translate-x-[-50%] left-[50%] translate-y-[-50%] bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-[#f5f5f5] py-[20px] px-[20px] h-auto w-auto rounded-2xl shadow-lg">
        <h2 className="text-xl font-[Poppins] font-bold mb-4">{title}</h2>
        <div className="mb-6 font-[Poppins]">
               <form action="" encType="multipart/form-data" method="POST">
                    <input type="file" name="imagen" className="form-control"/>
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 font-[Poppins] rounded-md bg-gray-300 hover:bg-gray-400 transition"
            >
            {cancelText}
          </button>
          {onConfirm && (
            
            <input value={confirmText}  accept="image/png, image/jpeg, image/jpg" type="submit" name="btn-register"   onClick={onConfirm}
            className="px-4 py-2 font-[Poppins] rounded-md bg-blue-600 text-white hover:bg-blue-700 transition" />
          )}
        </div>
            </form>
          </div>
      </div>
    </div>
  );
};
