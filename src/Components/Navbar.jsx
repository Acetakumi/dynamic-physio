import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../assets/dynamic-physio.png";

const navigation = [
  { name: "Home", key: "home" },
  { name: "Services Offered", key: "services" },
  { name: "About", key: "about" },
  { name: "Contact Us", key: "contact" },
];

const cls = (...c) => c.filter(Boolean).join(" ");

export default function Navbar({ activePage, onNavigate }) {
  return (
    <Disclosure
      as="nav"
      className="sticky top-0 z-50 bg-emerald-700 text-white border-b border-white/10"
    >
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => onNavigate("home")}
          >
            <img
              alt="Dynamic Physio"
              src={logo}
              className="h-8 w-auto rounded-sm"
            />
            <span className="hidden sm:inline font-semibold tracking-wide">
              Dynamic Physio
            </span>
          </div>

          
          <div className="hidden sm:flex flex-1 justify-center">
            <div className="flex gap-8"> 
              {navigation.map((item) => (
                <button
                  key={item.key}
                  onClick={() => onNavigate(item.key)}
                  className={cls(
                    "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                    activePage === item.key
                      ? "bg-white text-emerald-700"
                      : "text-white/90 hover:bg-white hover:text-emerald-700"
                  )}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

                    <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <DisclosureButton className="p-2 rounded-md text-white hover:bg-white hover:text-emerald-700">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block size-6 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden size-6 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>
        </div>
      </div>

      
      <DisclosurePanel className="sm:hidden border-t border-white/10">
        <div className="space-y-1 px-2 py-3">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.key}
              as="button"
              onClick={() => onNavigate(item.key)}
              className={cls(
                "block w-full text-left rounded-md px-3 py-2 text-base font-medium",
                activePage === item.key
                  ? "bg-white text-emerald-700"
                  : "text-white/90 hover:bg-white hover:text-emerald-700"
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
