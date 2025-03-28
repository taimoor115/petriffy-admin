import { useEffect, useRef } from "react";
import { useModal } from "../../context/modal";

const Modal = () => {
  const { isOpen, content, closeModal } = useModal();
  const ref = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        closeModal();
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [closeModal]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center px-3 overflow-x-hidden overflow-y-auto z-99999 backdrop-blur-sm bg-black/50">
      <div
        ref={ref}
        id="popup-modal"
        tabIndex="-1"
        className="relative w-full max-w-lg bg-white rounded-lg shadow dark:bg-gray-950"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="max-h-[80vh] overflow-y-auto p-4">{content}</div>
      </div>
    </div>
  );
};

export default Modal;
