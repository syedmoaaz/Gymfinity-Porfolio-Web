import { useState } from "react";

const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  gymName: "",
  message: "",
};

const inputClassName =
  "w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gymfinity-400/20 focus:border-gymfinity-400 transition-all";

const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      setStatus("error");
      setErrorMessage("Form is not configured. Missing access key.");
      return;
    }

    setStatus("loading");

    const name = `${form.firstName.trim()} ${form.lastName.trim()}`.trim();

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New GymFinity demo request${form.gymName.trim() ? ` — ${form.gymName.trim()}` : ""}`,
          from_name: name,
          name,
          email: form.email.trim(),
          gymName: form.gymName.trim(),
          message: form.message.trim(),
        }),
      });

      const data = await response.json();

      if (!response.ok || data.success === false) {
        throw new Error(data.message || "Something went wrong. Please try again.");
      }

      setStatus("success");
      setForm(initialForm);
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    }
  };

  return (
    <section
      id="contact"
      className="py-20 lg:py-28 bg-gradient-to-b from-gymfinity-100/40 to-white relative overflow-hidden"
    >
      <div className="absolute top-10 left-10 w-72 h-72 bg-gymfinity-400/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-gymfinity-400/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gymfinity-900 tracking-tight mb-4">
              Ready to transform{" "}
              <span className="text-gymfinity-400">your gym?</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              Get in touch with our team to schedule a demo or learn more about
              how GymFinity can help your business grow.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gymfinity-400/10 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-gymfinity-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gymfinity-900">
                    Email
                  </div>
                  <div className="text-sm text-gray-500">
                    contact@thegymfinity.com
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gymfinity-400/10 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-gymfinity-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gymfinity-900">
                    Phone
                  </div>
                  <div className="text-sm text-gray-500">0313 1234420</div>
                  <div className="text-sm text-gray-500">0316 2652701</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl shadow-gray-200/50 border border-gray-100">
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-semibold text-gymfinity-900 mb-1.5"
                  >
                    First Name
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    value={form.firstName}
                    onChange={handleChange}
                    className={inputClassName}
                    placeholder="Zohaib"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-semibold text-gymfinity-900 mb-1.5"
                  >
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    value={form.lastName}
                    onChange={handleChange}
                    className={inputClassName}
                    placeholder="Ismail"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gymfinity-900 mb-1.5"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className={inputClassName}
                  placeholder="zohaib@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="gymName"
                  className="block text-sm font-semibold text-gymfinity-900 mb-1.5"
                >
                  Gym Name
                </label>
                <input
                  id="gymName"
                  name="gymName"
                  type="text"
                  required
                  value={form.gymName}
                  onChange={handleChange}
                  className={inputClassName}
                  placeholder="Your Gym Name"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gymfinity-900 mb-1.5"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={form.message}
                  onChange={handleChange}
                  className={`${inputClassName} resize-none`}
                  placeholder="Tell us about your gym..."
                />
              </div>

              {status === "success" && (
                <p className="text-sm text-green-600 font-medium" role="status">
                  Message sent. We&apos;ll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="text-sm text-red-600 font-medium" role="alert">
                  {errorMessage}
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-3.5 bg-gymfinity-400 text-white font-semibold rounded-full hover:bg-gymfinity-600 transition-all duration-300 shadow-lg shadow-gymfinity-400/25 hover:shadow-xl hover:shadow-gymfinity-400/30 hover:-translate-y-0.5 disabled:opacity-70 disabled:pointer-events-none disabled:translate-y-0"
              >
                {status === "loading" ? "Sending…" : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
