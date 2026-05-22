import React, { useState } from "react";
import {
  FaBars,
  FaBolt,
  FaBoxOpen,
  FaGem,
  FaShoppingCart,
  FaTimes,
  FaUser,
} from "react-icons/fa";
import sidebarBanner from "../assets/mobile-sidebar-banner.svg";

const navItems = [
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

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => scrollToSection("home")}
          className="flex items-center gap-3 text-left"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-300 to-sky-500 text-slate-950 shadow-lg shadow-cyan-950/30">
            <FaBoxOpen />
          </span>
          <span>
            <span className="block text-lg font-black tracking-tight text-white">
              ShopEase
            </span>
            <span className="block text-xs uppercase tracking-[0.24em] text-slate-400">
              Premium store
            </span>
          </span>
        </button>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <button
              key={item.target}
              type="button"
              onClick={() => scrollToSection(item.target)}
              className="text-sm font-medium text-slate-300 transition hover:text-white"
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            onClick={() => scrollToSection("products")}
            className="inline-flex h-11 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 text-sm font-medium text-white transition hover:bg-white/10"
          >
            <FaShoppingCart />
            Cart
          </button>
          <button
            type="button"
            onClick={() => scrollToSection("contact")}
            className="inline-flex h-11 items-center gap-2 rounded-full bg-cyan-400 px-4 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            <FaUser />
            Account
          </button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10 md:hidden"
          aria-label="Toggle sidebar menu"
          aria-expanded={open}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-40 md:hidden">
          <button
            type="button"
            aria-label="Close sidebar overlay"
            className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          <aside className="absolute right-0 top-0 flex h-full w-[82%] max-w-sm flex-col border-l border-white/10 bg-slate-950/98 p-5 shadow-2xl shadow-slate-950/80">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <p className="text-sm uppercase tracking-[0.22em] text-slate-400">
                  Navigation
                </p>
                <h2 className="mt-1 text-lg font-bold text-white">ShopEase</h2>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
                aria-label="Close sidebar"
              >
                <FaTimes />
              </button>
            </div>

            <div className="mt-6 overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-cyan-400/15 via-white/5 to-sky-500/10 p-4">
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 shrink-0 overflow-hidden rounded-3xl bg-white/10">
                  <img
                    src={sidebarBanner}
                    alt="ShopEase sidebar banner"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">
                    Mobile only
                  </p>
                  <h3 className="mt-1 text-lg font-bold text-white">
                    Fresh picks for you
                  </h3>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-slate-950/50 p-3">
                  <div className="flex items-center gap-2 text-cyan-200">
                    <FaBolt />
                    <span className="text-xs font-semibold uppercase tracking-[0.18em]">
                      Fast
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-slate-300">
                    Smooth browsing on small screens.
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-950/50 p-3">
                  <div className="flex items-center gap-2 text-cyan-200">
                    <FaGem />
                    <span className="text-xs font-semibold uppercase tracking-[0.18em]">
                      Premium
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-slate-300">
                    Clean visuals with strong contrast.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-1 flex-col gap-3 overflow-y-auto">
              {navItems.map((item) => (
                <button
                  key={item.target}
                  type="button"
                  onClick={() => {
                    scrollToSection(item.target);
                    setOpen(false);
                  }}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-left text-sm font-medium text-white transition hover:border-cyan-400/40 hover:bg-white/10"
                >
                  {item.label}
                </button>
              ))}

              <div className="mt-auto grid gap-3 pt-5">
                <button
                  type="button"
                  onClick={() => {
                    scrollToSection("products");
                    setOpen(false);
                  }}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm font-medium text-white transition hover:bg-white/10"
                >
                  <FaShoppingCart />
                  Cart
                </button>
                <button
                  type="button"
                  onClick={() => {
                    scrollToSection("contact");
                    setOpen(false);
                  }}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-400 px-4 py-4 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  <FaUser />
                  Account
                </button>
              </div>
            </div>
          </aside>
        </div>
      )}
    </nav>
  );
}
