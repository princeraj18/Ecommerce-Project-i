import React from "react";
import { FaFacebook, FaInstagram, FaShoppingBag, FaTwitter } from "react-icons/fa";

const footerLinks = [
  { label: "Home", target: "home" },
  { label: "Products", target: "products" },
  { label: "About", target: "about" },
  { label: "Contact", target: "contact" },
];

function scrollToSection(target) {
  const element = document.getElementById(target);

  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-300 to-sky-500 text-slate-950">
              <FaShoppingBag />
            </span>
            <div>
              <h2 className="text-xl font-black text-white">ShopEase</h2>
              <p className="text-xs uppercase tracking-[0.22em] text-slate-400">
                Modern e-commerce UI
              </p>
            </div>
          </div>
          <p className="max-w-xs text-sm leading-6 text-slate-400">
            A responsive storefront built for clarity, speed, and a premium
            look across every screen size.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-200">
            Quick links
          </h3>
          <div className="mt-4 flex flex-col gap-3">
            {footerLinks.map((item) => (
              <button
                key={item.target}
                type="button"
                onClick={() => scrollToSection(item.target)}
                className="w-fit text-sm text-slate-400 transition hover:text-white"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-200">
            Customer care
          </h3>
          <div className="mt-4 flex flex-col gap-3 text-sm text-slate-400">
            <span>FAQ</span>
            <span>Shipping</span>
            <span>Returns</span>
            <span>Support</span>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-200">
            Follow us
          </h3>
          <div className="mt-4 flex gap-4 text-xl text-slate-300">
            <FaFacebook className="cursor-pointer transition hover:text-cyan-300" />
            <FaInstagram className="cursor-pointer transition hover:text-pink-400" />
            <FaTwitter className="cursor-pointer transition hover:text-sky-400" />
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-sm text-slate-500">
        &copy; {new Date().getFullYear()} ShopEase. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
