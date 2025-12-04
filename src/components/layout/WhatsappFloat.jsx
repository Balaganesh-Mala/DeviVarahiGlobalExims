import { FaWhatsapp } from "react-icons/fa";


export default function WhatsappFloat() {
  const number = import.meta.env.VITE_WHATSAPP_NUMBER;

  const openWhatsapp = () => {
    window.open(`https://wa.me/${number}`, "_blank");
  };

  return (
    <button
      onClick={openWhatsapp}
      className="fixed bottom-10 right-10 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg flex items-center justify-center"
    >
      <FaWhatsapp className="text-3xl animate-wave" />
    </button>
  );
}
