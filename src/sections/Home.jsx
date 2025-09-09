export default function Home({ onNavigate }) {
  return (
    <section className="bg-emerald-50">
      <div className="relative bg-gradient-to-br from-emerald-700 to-emerald-500 text-white">
        <div className="relative mx-auto max-w-7xl px-4 py-20 text-center">
          <h1 className="text-5xl font-extrabold">
            Move Better.{" "}
            <span className="text-emerald-200">Live Stronger.</span>
          </h1>
          <p className="mt-6 text-lg max-w-2xl mx-auto text-emerald-100">
            Evidence-based physiotherapy to restore strength, improve mobility,
            and support your long-term recovery.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <button
              type="button"
              onClick={() => onNavigate("services")}
              className="px-6 py-3 bg-white text-emerald-700 rounded-lg hover:bg-emerald-100 transition"
            >
              View Services
            </button>
            <button
              type="button"
              onClick={() => onNavigate("contact")}
              className="px-6 py-3 border border-white/70 text-white rounded-lg hover:bg-white/10 transition"
            >
              Book Now
            </button>
          </div>
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

      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="rounded-xl bg-white p-6 shadow-sm">
            <p className="text-4xl font-extrabold text-emerald-700">500+</p>
            <p className="text-slate-600">Patients Helped</p>
          </div>
          <div className="rounded-xl bg-white p-6 shadow-sm">
            <p className="text-4xl font-extrabold text-emerald-700">10+</p>
            <p className="text-slate-600">Years Experience</p>
          </div>
          <div className="rounded-xl bg-white p-6 shadow-sm">
            <p className="text-4xl font-extrabold text-emerald-700">⭐ 5.0</p>
            <p className="text-slate-600">Community Reviews</p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-12">
        <h2 className="text-3xl font-bold text-emerald-700 text-center">
          What We Do
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { t: "Initial Assessment", d: "Comprehensive evaluation & plan." },
            { t: "Manual Therapy", d: "Joint mobilization & soft tissue." },
            { t: "Exercise Rehab", d: "Strength & mobility programs." },
            { t: "Sports Physio", d: "Return-to-play & prevention." },
            { t: "Post-Op Rehab", d: "Guided recovery after surgery." },
            { t: "Education", d: "Pain science & self-management." },
          ].map((c) => (
            <div
              key={c.t}
              className="rounded-xl bg-white p-6 shadow-sm border hover:shadow-md transition"
            >
              <h3 className="font-semibold">{c.t}</h3>
              <p className="mt-2 text-slate-600">{c.d}</p>
              <button
                onClick={() => onNavigate("services")}
                className="mt-4 text-emerald-700 hover:underline"
              >
                Learn more →
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white/70">
        <div className="mx-auto max-w-3xl px-4 py-14 text-center">
          <h3 className="text-xl font-semibold text-emerald-700">
            What our patients say
          </h3>
          <blockquote className="mt-4 italic text-slate-700">
            “Dynamic Physio got me back to running after my knee injury. Clear
            plan, great team, real results.”
          </blockquote>
          <p className="mt-2 text-sm text-slate-500">— Sarah J.</p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 text-center">
        <h4 className="text-2xl font-bold text-emerald-700">Ready to start?</h4>
        <p className="mt-2 text-slate-600">
          Book an assessment and let’s build your plan.
        </p>
        <div className="mt-6">
          <button
            onClick={() => onNavigate("contact")}
            className="px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-500 transition"
          >
            Book an Appointment
          </button>
        </div>
      </div>
    </section>
  );
}
