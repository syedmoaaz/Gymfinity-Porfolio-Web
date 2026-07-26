import { useEffect, useRef, useState } from "react";
import { Bot, X, Send } from "lucide-react";

const whatsappUrl = `https://wa.me/923131234420?text=${encodeURIComponent(
  "Hello, I want to know more about Gymfinity software."
)}`;

const knowledge = [
  {
    keys: ["hello", "hi", "hey", "salam", "assalam"],
    answer:
      "Hi! I am the GymFinity assistant. Ask me about pricing, features, cloud access, ZKTeco, Hikvision, demos, or how to contact the team.",
  },
  {
    keys: ["hikvision", "hikvsion", "hikvisi"],
    answer:
      "Yes. GymFinity fully supports Hikvision biometric devices for attendance and access control. We can help you choose and install the right Hikvision terminal for your gym.",
  },
  {
    keys: ["zkteco", "zk teco"],
    answer:
      "Yes. GymFinity integrates with ZKTeco biometric devices for member check-ins and access control. You can see supported devices in our Hardware Integration section.",
  },
  {
    keys: ["cloud", "online", "anywhere", "browser", "internet"],
    answer:
      "Yes. GymFinity is cloud based, so you can access it securely from desktop, tablet, or mobile with an internet connection. No heavy local server setup is required for the software.",
  },
  {
    keys: ["price", "pricing", "cost", "plan", "fee", "package", "starter", "elite", "pro", "how much"],
    answer:
      "GymFinity has three monthly plans in PKR: Starter 4999, Pro 7499, and Elite 9999. Scroll to the Pricing section for full details, or talk to us on WhatsApp for a custom quote.",
  },
  {
    keys: ["biometric", "hardware", "device", "attendance machine", "fingerprint", "access control", "installation"],
    answer:
      "Yes. GymFinity works with ZKTeco and Hikvision biometric devices for attendance and access control. We can also help with hardware selection and installation through our experts.",
  },
  {
    keys: ["demo", "trial", "try", "show me"],
    answer:
      "Yes, we offer a live demo. Use Talk to Our Experts / WhatsApp or the contact form and we will schedule one for you.",
  },
  {
    keys: ["feature", "what can", "member", "payment", "report", "whatsapp reminder", "what does", "software do"],
    answer:
      "GymFinity helps with member management, payments, reports, trainers, expenses, WhatsApp fee reminders, attendance, biometrics, and cloud access. Check the Features section for more.",
  },
  {
    keys: ["contact", "phone", "email", "number", "call", "support", "reach"],
    answer:
      "You can reach us at contact@thegymfinity.com or call 0313 1234420 / 0316 2652701. WhatsApp is usually the fastest way to get a reply.",
  },
  {
    keys: ["secure", "security", "data", "safe", "privacy"],
    answer:
      "Your gym data is stored securely in the cloud with authentication and isolation so each gym’s information stays private and protected.",
  },
  {
    keys: ["branch", "multi", "small gym", "large gym", "scale"],
    answer:
      "GymFinity works for small and large gyms, and supports multi-branch setups depending on your plan. Tell us your gym size on WhatsApp and we will recommend the right option.",
  },
  {
    keys: ["install", "setup", "on site", "onsite"],
    answer:
      "Yes. Our team can help with software setup and biometric hardware installation according to your preference and budget. Tap Talk to Our Experts or WhatsApp to get started.",
  },
];

const suggestions = [
  "What are your prices?",
  "Do you support Hikvision?",
  "Do you support ZKTeco?",
  "Is it cloud based?",
  "How can I get a demo?",
  "How do I contact you?",
];

function getBotReply(input) {
  const text = input.toLowerCase().trim();
  if (!text) {
    return {
      text: "Please type a question, or tap a suggestion below.",
      showWhatsApp: false,
    };
  }

  const match = knowledge.find((item) =>
    item.keys.some((key) => text.includes(key))
  );

  if (match) {
    return { text: match.answer, showWhatsApp: false };
  }

  return {
    text: "I am not sure about that yet. For detailed help, chat with our team on WhatsApp, or ask about pricing, cloud, Hikvision, ZKTeco, features, or demos.",
    showWhatsApp: true,
  };
}

const ChatBotFloating = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "Hi! I can help with basic GymFinity questions like pricing, cloud access, Hikvision, ZKTeco, features, and demos. What would you like to know?",
      showWhatsApp: false,
    },
  ]);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const bottomRef = useRef(null);
  const suggestionsTimerRef = useRef(null);

  useEffect(() => {
    if (open) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, open, showSuggestions]);

  useEffect(() => {
    return () => {
      if (suggestionsTimerRef.current) {
        window.clearTimeout(suggestionsTimerRef.current);
      }
    };
  }, []);

  const sendMessage = (raw) => {
    const text = (raw ?? input).trim();
    if (!text) return;

    setShowSuggestions(false);
    if (suggestionsTimerRef.current) {
      window.clearTimeout(suggestionsTimerRef.current);
    }

    setMessages((prev) => [...prev, { role: "user", text }]);
    setInput("");

    window.setTimeout(() => {
      const reply = getBotReply(text);
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: reply.text, showWhatsApp: reply.showWhatsApp },
      ]);

      suggestionsTimerRef.current = window.setTimeout(() => {
        setShowSuggestions(true);
      }, 10000);
    }, 350);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage();
  };

  return (
    <div className="fixed bottom-6 left-6 z-[9999] flex flex-col items-start gap-3">
      {open && (
        <div
          className="w-[min(100vw-3rem,22rem)] h-[28rem] max-h-[70vh] bg-white rounded-2xl shadow-2xl shadow-gray-900/15 border border-gray-100 flex flex-col overflow-hidden"
          role="dialog"
          aria-label="GymFinity chat assistant"
        >
          <div className="bg-gymfinity-400 text-white px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/15 border border-white/20">
                <Bot size={18} />
              </span>
              <div>
                <p className="font-bold text-sm">GymFinity Bot</p>
                <p className="text-xs text-white/90">Online for basic questions</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="p-1 rounded-lg hover:bg-white/15 transition-colors"
            >
              <X size={18} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-3 space-y-3 bg-gray-50">
            {messages.map((msg, index) => (
              <div
                key={`${msg.role}-${index}`}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-gymfinity-400 text-white rounded-br-md"
                      : "bg-white text-gray-700 border border-gray-100 rounded-bl-md"
                  }`}
                >
                  {msg.text}
                  {msg.role === "bot" && msg.showWhatsApp && (
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block mt-2 text-gymfinity-400 font-semibold underline"
                    >
                      Open WhatsApp
                    </a>
                  )}
                </div>
              </div>
            ))}

            {showSuggestions && (
              <div className="flex flex-wrap gap-2 pt-1">
                {suggestions.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => sendMessage(item)}
                    className="text-xs px-3 py-1.5 rounded-lg border border-gymfinity-400/30 text-gymfinity-900 bg-white hover:bg-gymfinity-50 transition-colors"
                  >
                    {item}
                  </button>
                ))}
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          <form
            onSubmit={handleSubmit}
            className="p-3 border-t border-gray-100 bg-white flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question..."
              className="flex-1 text-sm px-3 py-2 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-gymfinity-400 focus:ring-2 focus:ring-gymfinity-400/20"
            />
            <button
              type="submit"
              aria-label="Send message"
              className="w-10 h-10 rounded-xl bg-gymfinity-400 text-white flex items-center justify-center hover:bg-gymfinity-600 transition-colors shrink-0"
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-label={open ? "Close chat bot" : "Open chat bot"}
        className="relative bg-gymfinity-400 hover:bg-gymfinity-600 text-white w-14 h-14 rounded-2xl shadow-lg shadow-gymfinity-400/30 transition-all duration-300 hover:scale-105 flex items-center justify-center border border-white/20"
      >
        {open ? (
          <X size={26} strokeWidth={2.25} />
        ) : (
          <span className="relative flex items-center justify-center">
            <Bot size={28} strokeWidth={2} />
            <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-300 border-2 border-gymfinity-400" />
          </span>
        )}
      </button>
    </div>
  );
};

export default ChatBotFloating;
