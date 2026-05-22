import React from "react";
import {
  FaArrowRight,
  FaBoxOpen,
  FaHeadset,
  FaLeaf,
  FaShieldAlt,
  FaStar,
} from "react-icons/fa";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

const featuredProducts = [
  {
    name: "Aurora Jacket",
    price: "$129",
    tag: "Trending",
    description: "Lightweight layers with a premium finish for every season.",
  },
  {
    name: "Pulse Headphones",
    price: "$89",
    tag: "Best Seller",
    description: "Immersive sound, soft comfort, and all-day battery life.",
  },
  {
    name: "Studio Tote",
    price: "$54",
    tag: "New Arrival",
    description: "Clean silhouette with durable stitching and daily utility.",
  },
];

const perks = [
  {
    icon: FaShieldAlt,
    title: "Secure checkout",
    text: "Safe payments and trusted order protection at every step.",
  },
  {
    icon: FaLeaf,
    title: "Sustainable picks",
    text: "Thoughtful products chosen for quality and long-term use.",
  },
  {
    icon: FaHeadset,
    title: "Friendly support",
    text: "Fast help from a team that cares about your experience.",
  },
];

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <main id="home">
        <section className="hero-shell">
          <div className="hero-glow hero-glow-left" />
          <div className="hero-glow hero-glow-right" />

          <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
            <div className="space-y-8">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-cyan-100 backdrop-blur">
                <FaStar className="text-amber-300" />
                Premium shopping, built for every screen
              </span>

              <div className="space-y-5">
                <h1 className="max-w-2xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                  Shop smarter with a clean, responsive storefront.
                </h1>
                <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                  Discover elevated essentials, bold deals, and a seamless
                  shopping experience that looks great on mobile, tablet, and
                  desktop.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="#products"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  Explore products <FaArrowRight />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
                >
                  Contact our team
                </a>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  ["2K+", "Happy customers"],
                  ["24h", "Fast delivery"],
                  ["4.9/5", "Average rating"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur"
                  >
                    <div className="text-2xl font-extrabold text-white">
                      {value}
                    </div>
                    <div className="mt-1 text-sm text-slate-300">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-5">
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-cyan-950/30 backdrop-blur">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-cyan-200">
                      Featured drop
                    </p>
                    <h2 className="mt-2 text-2xl font-bold text-white">
                      Designed for everyday style
                    </h2>
                  </div>
                  <div className="rounded-2xl bg-cyan-400/15 px-4 py-2 text-sm font-semibold text-cyan-100">
                    New season
                  </div>
                </div>

                <div className="mt-6 grid gap-4">
                  {featuredProducts.map((product) => (
                    <article
                      key={product.name}
                      className="rounded-3xl border border-white/10 bg-slate-950/60 p-5 transition hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-slate-900/80"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
                            {product.tag}
                          </span>
                          <h3 className="mt-2 text-lg font-semibold text-white">
                            {product.name}
                          </h3>
                        </div>
                        <span className="rounded-full bg-white/10 px-3 py-1 text-sm font-semibold text-white">
                          {product.price}
                        </span>
                      </div>
                      <p className="mt-3 text-sm leading-6 text-slate-300">
                        {product.description}
                      </p>
                    </article>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                {perks.map((perk) => {
                  const Icon = perk.icon;
                  return (
                    <div
                      key={perk.title}
                      className="flex items-start gap-4 rounded-[1.6rem] border border-white/10 bg-white/5 p-5 backdrop-blur"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-400/15 text-cyan-200">
                        <Icon />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">{perk.title}</h3>
                        <p className="mt-1 text-sm leading-6 text-slate-300">
                          {perk.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="products" className="section-shell">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="section-heading">
              <p className="section-kicker">Products</p>
              <h2 className="section-title">Built for browsing on any device</h2>
              <p className="section-copy">
                Cards stack beautifully on mobile, expand into a polished grid
                on larger screens, and keep the most important details easy to
                scan.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {[
                "Fashion essentials",
                "Audio and tech",
                "Home and decor",
                "Daily accessories",
              ].map((item) => (
                <article
                  key={item}
                  className="feature-card group rounded-[1.8rem] border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/10"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-300 to-sky-500 text-slate-950 font-black">
                    <FaBoxOpen />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-white">
                    {item}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    Curated collections with a modern layout that adapts to the
                    viewport and keeps products easy to explore.
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section-shell section-shell-muted">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div className="space-y-5">
              <p className="section-kicker">About us</p>
              <h2 className="section-title">
                A storefront that feels premium, fast, and easy to use.
              </h2>
              <p className="section-copy">
                We focused on strong spacing, readable type, flexible grids,
                and touch-friendly controls so the experience stays polished on
                phones and desktops alike.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["Fast performance", "Lean layouts with clear hierarchy."],
                ["Mobile first", "Menus and sections adapt gracefully."],
                ["Visual polish", "Glass, gradients, and stronger contrast."],
                ["Simple flow", "Users can move from hero to product fast."],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="rounded-[1.6rem] border border-white/10 bg-slate-950/55 p-5"
                >
                  <h3 className="text-lg font-semibold text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section-shell">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-[2rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-400/15 to-white/5 p-8 shadow-2xl shadow-cyan-950/20 sm:p-10">
              <div className="max-w-2xl space-y-4">
                <p className="section-kicker">Contact</p>
                <h2 className="section-title">
                  Need a custom shopping experience or more UI pages?
                </h2>
                <p className="section-copy">
                  The structure is ready for routing, product pages, or a full
                  checkout flow whenever you want to expand the project.
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="mailto:support@shopease.com"
                  className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 font-semibold text-slate-950 transition hover:bg-slate-100"
                >
                  Email support
                </a>
                <a
                  href="#home"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
                >
                  Back to top
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
