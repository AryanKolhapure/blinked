"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const categories = [
  "Restaurants",
  "Cafes",
  "Gyms",
  "Salons",
  "Gaming",
  "Startups",
  "Hotels",
  "Photography",
];

const businesses = [
  {
    title: "Hidden Cafes",
    desc: "Aesthetic workspaces and underrated gems.",
  },
  {
    title: "Luxury Dining",
    desc: "Top rated restaurants and fine dining spots.",
  },
  {
    title: "Creative Studios",
    desc: "Discover creators, photographers and artists.",
  },
];

export default function Home() {
  return (
    <main className="bg-[#f6f1e8] text-black overflow-hidden min-h-screen">

      {/* NAVBAR */}
      <nav className="relative z-50 flex items-center justify-between px-6 md:px-12 py-3.5 bg-black/85 backdrop-blur-2xl border-b border-white/10">

        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer">

          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-500 shadow-[0_0_25px_rgba(255,200,0,0.35)]"></div>

          <h1 className="text-xl font-semibold tracking-tight text-white">
            Blinked
          </h1>

        </div>

        {/* Right Side */}
        <div className="flex items-center gap-8">

          {/* Links */}
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
        <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden">

          {/* Background Image */}
          <div className="absolute inset-0">

            <Image
              src="/img/victoria-or-chhatrapati-shivaji-terminus-mumbai.png"
              alt="Mumbai"
              fill
              priority
              quality={100}
              unoptimized
              className="object-cover object-center scale-[1.02]"
            />

          </div>

          {/* Soft Overlay */}
          <div className="absolute inset-0 bg-black/75" />

          {/* Bottom Fade */}
          <div className="absolute bottom-[-180px] left-1/2 -translate-x-1/2 w-[140%] h-[400px] bg-[#f6f1e8] rounded-[100%] blur-3xl" />

          {/* Hero Content */}
          <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">

          {/* Small Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-5 py-2 mb-8"
          >

            <div className="w-2 h-2 rounded-full bg-yellow-400"></div>

            <p className="text-white/80 text-sm font-medium tracking-wide">
              Trusted Local Discovery Platform
            </p>

          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-white text-[4rem] md:text-[7rem] leading-[0.92] font-black tracking-tight"
          >

            Find your
            <br />

            <span className="text-yellow-400">
              Local Business
            </span>

          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-8 text-lg md:text-2xl text-white/75 max-w-3xl mx-auto leading-relaxed"
          >

            Discover top rated trusted best business
            and services around you.

          </motion.p>

          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-12"
          >

            <div className="max-w-4xl mx-auto bg-white/15 backdrop-blur-2xl border border-white/20 rounded-[2rem] p-3 shadow-[0_20px_80px_rgba(0,0,0,0.25)] flex items-center gap-3">

              <input
                type="text"
                placeholder="Search restaurants, cafes, salons..."
                className="flex-1 bg-transparent outline-none px-5 py-4 text-lg text-white placeholder:text-white/50"
              />

              <button className="bg-yellow-400 text-black px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition duration-300">

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
                  delay: index * 0.06,
                }}
                whileHover={{
                  y: -3,
                }}
                className="px-5 py-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/15 text-white/90 font-medium hover:bg-white/20 transition duration-300 cursor-pointer"
              >

                {item}

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* FEATURED */}
      <section className="relative z-10 py-28">

        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}
          <div className="text-center mb-16">

            <p className="uppercase tracking-[0.3em] text-yellow-700 font-semibold text-sm mb-4">
              FEATURED DISCOVERY
            </p>

            <h2 className="text-5xl md:text-6xl font-black tracking-tight">

              Explore What's
              <br />
              Trending.

            </h2>

          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-7">

            {businesses.map((card, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -6,
                }}
                className="group relative overflow-hidden rounded-[2.5rem] bg-white border border-black/5 shadow-[0_20px_80px_rgba(0,0,0,0.06)]"
              >

                {/* Top Image */}
                <div className="h-[260px] overflow-hidden">

                  <div
                    className="w-full h-full bg-cover bg-center group-hover:scale-105 transition duration-700"
                    style={{
                      backgroundImage:
                        "url('/img/victoria-or-chhatrapati-shivaji-terminus-mumbai.webp')",
                    }}
                  />

                </div>

                {/* Content */}
                <div className="p-8">

                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-500 shadow-[0_0_20px_rgba(255,180,0,0.3)] mb-6"></div>

                  <h3 className="text-3xl font-black tracking-tight">

                    {card.title}

                  </h3>

                  <p className="mt-4 text-black/60 leading-relaxed">

                    {card.desc}

                  </p>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* STATS */}
      <section className="pb-28">

        <div className="max-w-6xl mx-auto px-6">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

            {[
              "12K+ Users",
              "850+ Businesses",
              "24 Cities",
              "4.9 Ratings",
            ].map((item, index) => (

              <div
                key={index}
                className="bg-white rounded-[2rem] p-8 text-center border border-black/5 shadow-[0_15px_50px_rgba(0,0,0,0.05)]"
              >

                <h3 className="text-4xl font-black tracking-tight">

                  {item.split(" ")[0]}

                </h3>

                <p className="mt-3 text-black/50">

                  {item.split(" ").slice(1).join(" ")}

                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-black/10">

        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">

          <div>

            <h2 className="text-3xl font-black">
              Blinked
            </h2>

            <p className="mt-2 text-black/50">
              Discover your city beautifully.
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