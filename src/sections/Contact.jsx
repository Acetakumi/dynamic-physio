export default function Contact() {
  return (
    <section className="bg-emerald-50">
      <div className="relative bg-gradient-to-br from-emerald-700 via-emerald-600 to-emerald-500 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center">
          <h2 className="text-4xl font-extrabold">Contact Us</h2>
          <p className="mt-3 text-emerald-100 max-w-2xl mx-auto">
            Reach out to book an appointment, ask a question, or plan your first
            assessment.
          </p>
        </div>
        <svg
          className="block w-full -mb-1"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            fill="#ecfdf5"
            d="M0,64 L48,74.7 C96,85,192,107,288,104 C384,101,480,75,576,70
               C672,64,768,80,864,88 C960,96,1056,96,1152,88
               C1248,80,1344,64,1392,56 L1440,48 L1440,120 L0,120 Z"
          />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-black/5 p-8">
            <h3 className="text-2xl font-semibold text-emerald-700">
              Get in touch
            </h3>
            <p className="mt-2 text-slate-600">
              We’ll respond within one business day. For urgent bookings, call
              us directly.
            </p>

            <div className="mt-6 space-y-4 text-slate-700">
              <div className="flex gap-3">
                <span className="mt-1 size-2 rounded-full bg-emerald-600" />
                <div>
                  <p className="font-medium text-emerald-700">Clinic Address</p>
                  <p>
                    1055 Rue de Liege O<br />
                    Montreal, Quebec
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="mt-1 size-2 rounded-full bg-emerald-600" />
                <div>
                  <p className="font-medium text-emerald-700">Phone</p>
                  <p>(514) 836-5894</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="mt-1 size-2 rounded-full bg-emerald-600" />
                <div>
                  <p className="font-medium text-emerald-700">Email</p>
                  <p>acetakumi99@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-xl bg-emerald-50 p-6 ring-1 ring-emerald-100">
              <p className="font-semibold text-emerald-700">Hours</p>
              <ul className="mt-3 grid grid-cols-2 gap-y-2 text-sm text-slate-700">
                <li>Mon–Fri</li>
                <li className="text-right">8:00–18:00</li>
                <li>Saturday</li>
                <li className="text-right">9:00–14:00</li>
                <li>Sunday</li>
                <li className="text-right">Closed</li>
              </ul>
            </div>

            <div className="mt-8 overflow-hidden rounded-xl bg-slate-100 ring-1 ring-black/5">
              <div className="h-56 grid place-items-center text-slate-500">
                <div className="mt-8 overflow-hidden rounded-xl ring-1 ring-black/5">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=VIOJzU0t82Uyyfm4S"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Dynamic Physio Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-black/5 p-8">
            <h3 className="text-2xl font-semibold text-emerald-700">
              Send us a message
            </h3>
            <p className="mt-2 text-slate-600">
              Tell us a bit about what you need help with and we’ll follow up.
            </p>

            <form className="mt-8 grid gap-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-700"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    className="mt-1 w-full rounded-md border-slate-300 px-3 py-2 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-700"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="mt-1 w-full rounded-md border-slate-300 px-3 py-2 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-slate-700"
                  >
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="(555) 123-4567"
                    className="mt-1 w-full rounded-md border-slate-300 px-3 py-2 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-slate-700"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="Booking, question, follow-up…"
                    className="mt-1 w-full rounded-md border-slate-300 px-3 py-2 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  placeholder="How can we help?"
                  className="mt-1 w-full rounded-md border-slate-300 px-3 py-2 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                />
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-sm text-slate-600">
                  <input
                    type="checkbox"
                    className="size-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
                  />
                  I agree to be contacted about my inquiry.
                </label>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-5 py-2.5 text-white font-medium hover:bg-emerald-500 transition"
                >
                  Send Message
                </button>
              </div>
            </form>

            <p className="mt-4 text-xs text-slate-500">
              By submitting, you agree to our privacy policy and consent to be
              contacted.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
