"use client";

import { motion } from "framer-motion";

const categories = [
  "Cafés",
  "Gaming",
  "Study Spots",
  "Startups",
  "Food",
  "Creators",
  "Fitness",
  "Photography",
];

const featured = [
  {
    title: "Hidden Cafés",
    desc: "Quiet aesthetic spaces across Mumbai.",
  },
  {
    title: "Creative Communities",
    desc: "Find artists, photographers and creators.",
  },
  {
    title: "Startup Hubs",
    desc: "Discover founders and modern workspaces.",
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#07090d] text-white">

      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />

        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
          }}
          className="absolute top-[-200px] left-[-100px] w-[500px] h-[500px] rounded-full bg-purple-500/20 blur-[140px]"
        />

        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
          }}
          className="absolute bottom-[-200px] right-[-100px] w-[500px] h-[500px] rounded-full bg-blue-500/20 blur-[140px]"
        />

      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 backdrop-blur-2xl border-b border-white/10 bg-black/20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="flex items-center justify-between py-5">

            {/* Logo */}
            <div className="flex items-center gap-3 cursor-pointer">

              <div className="w-9 h-9 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 shadow-[0_0_40px_rgba(124,58,237,0.45)]"></div>

              <h1 className="text-xl font-semibold tracking-tight">
                Blinked
              </h1>

            </div>

            {/* Nav */}
            <div className="hidden lg:flex items-center gap-8 text-sm text-white/70">

              <a href="#" className="hover:text-white transition">
                Home
              </a>

              <a href="#" className="hover:text-white transition">
                Directory
              </a>

              <a href="#" className="hover:text-white transition">
                Pricing
              </a>

              <a href="#" className="hover:text-white transition">
                Contact
              </a>

            </div>

            {/* Buttons */}
            <div className="flex items-center gap-3">

              <button className="text-sm text-white/70 hover:text-white transition">
                Log in
              </button>

              <button className="bg-white text-black text-sm font-medium px-5 py-2.5 rounded-full hover:scale-105 transition duration-300">
                Join now
              </button>

            </div>

          </div>

        </div>

      </nav>

      {/* Hero */}
      <section className="relative z-10">

        <div className="max-w-7xl mx-auto px-6 pt-24 pb-24">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >

            {/* Label */}
            <div className="inline-flex items-center gap-2 border border-white/10 bg-white/[0.03] backdrop-blur-xl rounded-full px-5 py-2 text-sm text-white/60 mb-8">

              <div className="w-2 h-2 rounded-full bg-green-400"></div>

              Discover modern local spaces

            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-8xl font-semibold tracking-[-0.06em] leading-[0.95] max-w-5xl mx-auto">

              Discover the
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                {" "}best places{" "}
              </span>
              around you.

            </h1>

            {/* Subtext */}
            <p className="mt-8 text-lg md:text-xl text-white/50 leading-relaxed max-w-2xl mx-auto">

              Explore cafés, creators, startups, gaming spots,
              communities and hidden gems across Mumbai —
              all in one beautifully curated platform.

            </p>

            {/* Search */}
            <div className="mt-12 max-w-3xl mx-auto">

              <div className="flex items-center gap-3 p-3 rounded-[28px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl shadow-[0_0_80px_rgba(124,58,237,0.12)]">

                <input
                  type="text"
                  placeholder="Search cafes, creators, gaming zones..."
                  className="flex-1 bg-transparent outline-none px-5 py-4 text-white placeholder:text-white/30"
                />

                <button className="bg-white text-black px-7 py-4 rounded-2xl font-medium hover:scale-105 transition duration-300">

                  Search

                </button>

              </div>

            </div>

            {/* Categories */}
            <div className="flex flex-wrap items-center justify-center gap-4 mt-10">

              {categories.map((item, index) => (

                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{
                    y: -3,
                    scale: 1.03,
                  }}
                  className="px-5 py-3 rounded-full border border-white/10 bg-white/[0.03] text-white/70 backdrop-blur-xl hover:bg-white/[0.06] hover:text-white transition duration-300 cursor-pointer"
                >

                  {item}

                </motion.div>

              ))}

            </div>

          </motion.div>

        </div>

      </section>

      {/* Featured Cards */}
      <section className="relative z-10 pb-28">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-3 gap-6">

            {featured.map((card, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{
                  y: -6,
                }}
                className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-8 hover:border-white/20 transition duration-500"
              >

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-purple-500/10 to-blue-500/10"></div>

                <div className="relative z-10">

                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 mb-8 shadow-[0_0_40px_rgba(124,58,237,0.4)]"></div>

                  <h3 className="text-3xl font-semibold tracking-tight">

                    {card.title}

                  </h3>

                  <p className="mt-5 text-white/50 leading-relaxed">

                    {card.desc}

                  </p>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* Stats */}
      <section className="relative z-10 pb-32">

        <div className="max-w-6xl mx-auto px-6">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

            {[
              "12K+ Users",
              "850+ Businesses",
              "24 Cities",
              "95% Satisfaction",
            ].map((item, index) => (

              <div
                key={index}
                className="rounded-[28px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-8 text-center"
              >

                <h3 className="text-3xl md:text-4xl font-semibold tracking-tight">

                  {item.split(" ")[0]}

                </h3>

                <p className="mt-3 text-white/50">

                  {item.split(" ").slice(1).join(" ")}

                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10">

        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">

          <div>

            <h2 className="text-2xl font-semibold tracking-tight">
              Blinked
            </h2>

            <p className="mt-2 text-white/40">
              Discover your city differently.
            </p>

          </div>

          <div className="flex items-center gap-8 text-white/50">

            <a href="#" className="hover:text-white transition">
              Instagram
            </a>

            <a href="#" className="hover:text-white transition">
              Twitter
            </a>

            <a href="#" className="hover:text-white transition">
              LinkedIn
            </a>

            <a href="#" className="hover:text-white transition">
              Contact
            </a>

          </div>

        </div>

      </footer>

    </main>
  );
}