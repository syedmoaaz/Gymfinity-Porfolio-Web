import { FaWhatsapp } from "react-icons/fa";

const WhatsAppFloating = () => {
  const phoneNumber = "923131234420";
  const message = "Hello, I want to know more about Gymfinity software.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[9999] bg-[#25D366] hover:bg-[#1ebe5d] text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
    >
      <FaWhatsapp size={28} />
    </a>
  );
};

export default WhatsAppFloating;
