"use client";

import { motion } from "framer-motion";

const categories = [
  "☕ Cafes",
  "🎮 Gaming",
  "📚 Study Spots",
  "🍜 Food",
  "🎨 Creators",
  "💼 Startups",
];

const cards = [
  {
    title: "Hidden Cafes",
    desc: "Quiet aesthetic corners around Mumbai.",
  },
  {
    title: "Gaming Zones",
    desc: "Competitive arenas and chill setups.",
  },
  {
    title: "Creative Communities",
    desc: "Discover creators, artists and events.",
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#fdfbf7] text-black">

      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">

        {/* Texture */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(#000_1px,transparent_1px),linear-gradient(to_right,#000_1px,transparent_1px)] bg-[size:80px_80px]" />

        {/* Glow */}
        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
          }}
          className="absolute top-[-250px] left-[-150px] w-[650px] h-[650px] rounded-full bg-yellow-200/40 blur-3xl"
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
          className="absolute right-[-200px] top-[200px] w-[600px] h-[600px] rounded-full bg-amber-200/30 blur-3xl"
        />

      </div>

      {/* NAVBAR */}
      <nav className="relative z-30 flex items-center justify-between px-6 md:px-12 py-3.5 bg-black/90 backdrop-blur-2xl border-b border-white/10">

        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer">

          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-500 shadow-[0_0_25px_rgba(255,200,0,0.35)]"></div>

          <h1 className="text-xl font-semibold tracking-tight text-white">
            Blinked
          </h1>

        </div>

        {/* Right Side */}
        <div className="flex items-center gap-8">

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center gap-7 text-sm font-medium">

            <a
              href="#"
              className="text-white hover:text-yellow-400 transition duration-300"
            >
              Home
            </a>

            <a
              href="#"
              className="text-white/70 hover:text-yellow-400 transition duration-300"
            >
              Directory
            </a>

            <a
              href="#"
              className="text-white/70 hover:text-yellow-400 transition duration-300"
            >
              Subscription Pricing
            </a>

            <a
              href="#"
              className="text-white/70 hover:text-yellow-400 transition duration-300"
            >
              Contact Us
            </a>

          </div>

          {/* Buttons */}
          <div className="flex items-center gap-3">

            <button className="text-sm text-white/70 hover:text-white transition">
              Log in
            </button>

            <button className="bg-gradient-to-r from-yellow-400 to-amber-500 text-black text-sm font-semibold px-5 py-2 rounded-full hover:scale-105 hover:shadow-[0_0_30px_rgba(255,200,0,0.35)] transition duration-300">
              Create account
            </button>

          </div>

        </div>

      </nav>

      {/* HERO */}
      <section className="relative z-10">

        <div className="max-w-6xl mx-auto px-6 pt-24 md:pt-32 text-center">

          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-black/10 bg-white/60 backdrop-blur-xl shadow-lg"
          >

            <div className="w-2 h-2 rounded-full bg-yellow-500"></div>

            <p className="text-sm font-medium text-black/60">
              Discover your city beautifully
            </p>

          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mt-10 text-[4rem] md:text-[7rem] font-black tracking-tight leading-[0.92]"
          >

            Discover
            <br />

            Mumbai
            <span className="text-yellow-500"> differently.</span>

          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-8 text-lg md:text-xl text-black/60 leading-relaxed max-w-2xl mx-auto"
          >

            Explore cafes, gaming zones, creators,
            startups and hidden gems across Mumbai
            in one immersive discovery platform.

          </motion.p>

          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-12"
          >

            <div className="max-w-3xl mx-auto p-3 rounded-[2rem] bg-white/70 backdrop-blur-2xl border border-white/60 shadow-[0_20px_80px_rgba(0,0,0,0.08)] flex items-center gap-3">

              <input
                type="text"
                placeholder="Search cafes, creators, startups..."
                className="flex-1 bg-transparent outline-none px-5 py-4 text-lg placeholder:text-black/30"
              />

              <button className="bg-black text-white px-7 py-4 rounded-2xl hover:scale-105 transition duration-300">

                Search

              </button>

            </div>

          </motion.div>

          {/* Categories */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-10">

            {categories.map((item, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -2,
                }}
                className="px-6 py-3 rounded-full bg-white/60 backdrop-blur-xl border border-black/5 shadow-lg text-black/70 font-medium cursor-pointer hover:bg-white transition"
              >

                {item}

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* FEATURED CARDS */}
      <section className="relative z-10 pt-24 pb-28">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-3 gap-6">

            {cards.map((card, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -6,
                }}
                className="group relative overflow-hidden rounded-[2.5rem] bg-white/70 border border-black/5 backdrop-blur-2xl p-8 shadow-[0_20px_80px_rgba(0,0,0,0.06)]"
              >

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-yellow-100/60 to-amber-100/30" />

                <div className="relative z-10">

                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-500 shadow-[0_0_30px_rgba(255,180,0,0.3)] mb-8" />

                  <h3 className="text-3xl font-black tracking-tight">

                    {card.title}

                  </h3>

                  <p className="mt-5 text-black/60 leading-relaxed">

                    {card.desc}

                  </p>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* FEATURE SPLIT */}
      <section className="relative z-10 pb-32">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 gap-14 items-center">

            {/* Visual */}
            <motion.div
              whileHover={{
                scale: 1.01,
              }}
              className="relative h-[550px] rounded-[3rem] overflow-hidden bg-gradient-to-br from-yellow-200 via-amber-100 to-white shadow-[0_20px_100px_rgba(0,0,0,0.08)]"
            >

              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.9),transparent)]" />

              <div className="absolute bottom-10 left-10">

                <p className="text-black/40 mb-3">
                  Community Driven
                </p>

                <h3 className="text-6xl font-black leading-none">

                  Discover
                  <br />
                  Together.

                </h3>

              </div>

            </motion.div>

            {/* Text */}
            <div>

              <p className="uppercase tracking-[0.3em] text-yellow-700 font-semibold text-sm mb-6">

                LOCAL DISCOVERY

              </p>

              <h2 className="text-5xl md:text-6xl font-black leading-tight tracking-tight">

                More Than
                <br />
                A Directory.

              </h2>

              <p className="mt-8 text-black/60 text-xl leading-relaxed max-w-xl">

                Blinked blends businesses,
                creators, communities and places
                into one immersive modern
                discovery experience.

              </p>

              <button className="mt-10 bg-black text-white px-8 py-4 rounded-full hover:scale-105 transition duration-300">

                Explore Platform

              </button>

            </div>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-black/5">

        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">

          <div>

            <h2 className="text-2xl font-black">
              Blinked
            </h2>

            <p className="mt-2 text-black/50">
              Discover your city differently.
            </p>

          </div>

          <div className="flex items-center gap-8 text-black/50">

            <a href="#" className="hover:text-black transition">
              Instagram
            </a>

            <a href="#" className="hover:text-black transition">
              Twitter
            </a>

            <a href="#" className="hover:text-black transition">
              LinkedIn
            </a>

            <a href="#" className="hover:text-black transition">
              Contact
            </a>

          </div>

        </div>

      </footer>

    </main>
  );
}