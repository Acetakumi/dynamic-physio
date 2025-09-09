import {
  ClipboardDocumentCheckIcon,
  HandRaisedIcon,
  HeartIcon,
  BoltIcon,
  ArrowTrendingUpIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/outline";

export default function Services() {
  const services = [
    {
      title: "Initial Assessment",
      desc: "Comprehensive evaluation to build your treatment plan.",
      icon: ClipboardDocumentCheckIcon,
    },
    {
      title: "Manual Therapy",
      desc: "Hands-on joint mobilizations and soft tissue techniques.",
      icon: HandRaisedIcon,
    },
    {
      title: "Exercise Rehab",
      desc: "Personalized strength and mobility programs.",
      icon: BoltIcon,
    },
    {
      title: "Sports Physio",
      desc: "Safe return-to-play and injury prevention strategies.",
      icon: ArrowTrendingUpIcon,
    },
    {
      title: "Post-Op Rehab",
      desc: "Guided recovery and progressive loading after surgery.",
      icon: HeartIcon,
    },
    {
      title: "Education",
      desc: "Learn pain science and long-term self-management tools.",
      icon: AcademicCapIcon,
    },
  ];

  return (
    <section className="bg-white">
      <div className="relative bg-gradient-to-br from-emerald-700 to-emerald-500 text-white py-20 text-center">
        <h2 className="text-4xl font-extrabold">Our Services</h2>
        <p className="mt-3 text-emerald-100 max-w-2xl mx-auto">
          Tailored treatments designed to help you recover, rebuild, and return
          stronger.
        </p>
        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            d="M0,64 L48,74.7 C96,85,192,107,288,104 C384,101,480,75,576,70 C672,64,768,80,864,88 C960,96,1056,96,1152,88 C1248,80,1344,64,1392,56 L1440,48 L1440,120 L0,120 Z"
          />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-24">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative overflow-hidden rounded-xl bg-slate-50 border hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <div className="p-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-emerald-100 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white transition">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-emerald-700 group-hover:text-emerald-600 transition">
                  {s.title}
                </h3>
                <p className="mt-2 text-slate-600">{s.desc}</p>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-emerald-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </div>
          ))}
        </div>
      </div>

      <div className="bg-emerald-50 text-center py-16">
        <h3 className="text-2xl font-bold text-emerald-700">
          Not sure which service you need?
        </h3>
        <p className="mt-2 text-slate-600">
          Book an initial consultation and we’ll create a plan just for you.
        </p>
        <button
          onClick={() => alert("Navigate to contact page")}
          className="mt-6 px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-500 transition"
        >
          Book an Appointment
        </button>
      </div>
    </section>
  );
}
