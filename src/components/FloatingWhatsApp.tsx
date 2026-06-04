import { Phone, MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a href="tel:+918287216902" className="bg-blue-700 text-white p-3 rounded-full shadow-xl hover:scale-110 transition" aria-label="Call">
        <Phone className="w-6 h-6" />
      </a>
      <a href="https://wa.me/918287216902" target="_blank" rel="noreferrer" className="bg-green-600 text-white p-3 rounded-full shadow-xl hover:scale-110 transition" aria-label="WhatsApp">
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
}
