import {
  AcademicCapIcon,
  BuildingLibraryIcon,
  GlobeAltIcon,
  HeartIcon,
  ShieldCheckIcon,
  SparklesIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

export default function About({ onNavigate }) {
  const goContact = () => onNavigate && onNavigate("contact");

  return (
    <section className="bg-emerald-50">
      <div className="relative bg-gradient-to-br from-emerald-700 via-emerald-600 to-emerald-500 text-white py-20 text-center">
        <h2 className="text-4xl font-extrabold">About Dynamic Physio</h2>
        <p className="mt-3 text-emerald-100 max-w-2xl mx-auto">
          Science-driven care. Human-first approach.
        </p>
        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            fill="#ecfdf5"
            d="M0,64 L48,74.7 C96,85,192,107,288,104 C384,101,480,75,576,70 C672,64,768,80,864,88 C960,96,1056,96,1152,88 C1248,80,1344,64,1392,56 L1440,48 L1440,120 L0,120 Z"
          />
        </svg>
      </div>

      
      <div className="mx-auto max-w-7xl px-4 pt-16 pb-10">
        <div className="grid gap-10 lg:grid-cols-3">
          
          <div className="rounded-2xl bg-white shadow-sm border p-8">
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 rounded-full bg-emerald-100 text-emerald-700 grid place-items-center text-2xl font-bold">
                HA
              </div>
              <div>
                <h3 className="text-xl font-semibold text-emerald-700">
                  Husnain Abbas
                </h3>
                <p className="text-slate-600">Physiotherapist • Founder</p>
              </div>
            </div>

            <div className="mt-6 space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <AcademicCapIcon className="h-5 w-5 text-emerald-600" />
                <span>Degree in Physiotherapy — Concordia University</span>
              </div>
              <div className="flex items-center gap-2">
                <BuildingLibraryIcon className="h-5 w-5 text-emerald-600" />
                <span>Evidence-based practice & progressive loading</span>
              </div>
              <div className="flex items-center gap-2">
                <UserCircleIcon className="h-5 w-5 text-emerald-600" />
                <span>30 years old</span>
              </div>
              <div className="flex items-center gap-2">
                <GlobeAltIcon className="h-5 w-5 text-emerald-600" />
                <span>From Pakistan • Serving our local community</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheckIcon className="h-5 w-5 text-emerald-600" />
                <span>
                  Years of clinical experience helping patients move pain-free
                </span>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="px-3 py-1 text-xs rounded-full bg-emerald-100 text-emerald-700">
                Manual Therapy
              </span>
              <span className="px-3 py-1 text-xs rounded-full bg-emerald-100 text-emerald-700">
                Exercise Rehab
              </span>
              <span className="px-3 py-1 text-xs rounded-full bg-emerald-100 text-emerald-700">
                Sports Physio
              </span>
              <span className="px-3 py-1 text-xs rounded-full bg-emerald-100 text-emerald-700">
                Post-Op Care
              </span>
              <span className="px-3 py-1 text-xs rounded-full bg-emerald-100 text-emerald-700">
                Education
              </span>
            </div>

            <button
              onClick={goContact}
              className="mt-8 w-full rounded-lg bg-emerald-600 text-white py-2.5 hover:bg-emerald-500 transition"
            >
              Book an Appointment
            </button>
          </div>

          
          <div className="lg:col-span-2 rounded-2xl bg-white shadow-sm border p-8">
            <h3 className="text-2xl font-bold text-emerald-700">
              Our Story & Philosophy
            </h3>
            <p className="mt-4 text-slate-700 leading-relaxed">
              At Dynamic Physio, recovery is more than fixing an injury — it’s
              about restoring confidence, building resilience, and empowering
              every patient. Husnain blends evidence-based treatment with
              personalized programs to help you move better, feel stronger, and
              stay active for life.
            </p>

            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <div className="flex items-start gap-3">
                <SparklesIcon className="h-6 w-6 text-emerald-600 mt-1" />
                <div>
                  <h4 className="font-semibold">
                    Personalized, measurable plans
                  </h4>
                  <p className="text-slate-600 text-sm">
                    Clear goals, progress tracking, and adjustments as you get
                    stronger.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <HeartIcon className="h-6 w-6 text-emerald-600 mt-1" />
                <div>
                  <h4 className="font-semibold">Human-first care</h4>
                  <p className="text-slate-600 text-sm">
                    Education, empathy, and coaching — so you understand the
                    “why” behind every step.
                  </p>
                </div>
              </div>
            </div>

                      <div className="mt-8 rounded-xl bg-emerald-50 p-6 border border-emerald-100">
              <p className="italic text-emerald-800">
                “The goal isn’t just to get you back to baseline — it’s to help
                you move with confidence and live stronger.”
              </p>
              <p className="mt-2 text-sm text-emerald-700">— Husnain Abbas</p>
            </div>
          </div>
        </div>
      </div>

      
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 text-center">
          <h4 className="text-2xl font-bold text-emerald-700">
            Ready to start your plan?
          </h4>
          <p className="mt-2 text-slate-600">
            Book an initial assessment — we’ll tailor the journey to your goals.
          </p>
          <button
            onClick={goContact}
            className="mt-6 px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-500 transition"
          >
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
}
