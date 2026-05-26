"use client";

import { motion } from "framer-motion";

const categories = [
  "☕ Cafes",
  "🎮 Gaming",
  "📚 Study Spots",
  "🎨 Creators",
  "🍜 Food",
  "💼 Startups",
  "📸 Photography",
  "🎵 Music",
];

export default function Home() {
  return (
    <main className="bg-[#fdfbf7] text-black overflow-hidden min-h-screen">

      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">

        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
          }}
          className="absolute top-[-200px] left-[-100px] w-[600px] h-[600px] rounded-full bg-yellow-300/30 blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, -60, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
          }}
          className="absolute right-[-100px] top-[200px] w-[500px] h-[500px] rounded-full bg-amber-200/40 blur-3xl"
        />

      </div>

      {/* Navbar */}
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

      {/* Hero */}
      <section className="relative z-10 px-6 md:px-16 pt-10 md:pt-24">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >

          <p className="uppercase tracking-[0.4em] text-yellow-700 font-semibold text-sm mb-6">
            DISCOVER YOUR CITY
          </p>

          <h1 className="text-[4rem] md:text-[8rem] leading-[0.9] font-black tracking-tight max-w-6xl">

            Explore
            <br />

            Mumbai
            <span className="text-yellow-500"> differently.</span>

          </h1>

        </motion.div>

        {/* Hero Bottom */}
        <div className="grid md:grid-cols-2 gap-12 mt-16 items-end">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >

            <p className="text-xl text-black/60 leading-relaxed max-w-xl">

              Discover cafes, creators, gaming zones,
              study spots, startups and hidden gems
              around Mumbai in one beautiful space.

            </p>

            {/* Search */}
            <div className="mt-10 bg-white/70 backdrop-blur-2xl border border-white/50 shadow-2xl rounded-[2rem] p-3 flex items-center max-w-2xl">

              <input
                type="text"
                placeholder="Search places, creators, cafes..."
                className="flex-1 bg-transparent outline-none px-5 py-4 text-lg placeholder:text-black/30"
              />

              <button className="bg-black text-white px-8 py-4 rounded-2xl hover:scale-105 transition">
                Search
              </button>

            </div>

          </motion.div>

          {/* Right Floating Card */}
          <motion.div
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="relative"
          >

            <div className="bg-black text-white rounded-[3rem] p-10 shadow-2xl rotate-[-3deg]">

              <p className="text-white/40 mb-4">
                Trending This Week
              </p>

              <h3 className="text-5xl font-black leading-tight">

                ☕ Hidden
                <br />
                Cafes

              </h3>

              <p className="mt-6 text-white/60 leading-relaxed">

                Aesthetic workspaces, quiet corners
                and underrated Mumbai gems.

              </p>

            </div>

          </motion.div>

        </div>

      </section>

      {/* Infinite Category Strip */}
      <section className="relative z-10 mt-28 overflow-hidden">

        <motion.div
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-6 whitespace-nowrap"
        >

          {[...categories, ...categories].map((item, index) => (

            <div
              key={index}
              className="bg-white/70 backdrop-blur-xl border border-black/5 px-8 py-5 rounded-full text-xl font-semibold shadow-lg"
            >
              {item}
            </div>

          ))}

        </motion.div>

      </section>

      {/* Split Section */}
      <section className="relative z-10 px-6 md:px-16 py-32">

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left Big Visual */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="h-[600px] rounded-[3rem] bg-gradient-to-br from-yellow-300 via-amber-200 to-white shadow-2xl relative overflow-hidden"
          >

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.7),transparent)]"></div>

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

          {/* Right Text */}
          <div>

            <p className="uppercase tracking-[0.3em] text-yellow-700 font-semibold text-sm mb-6">
              LOCAL DISCOVERY
            </p>

            <h2 className="text-6xl font-black leading-tight">

              More Than
              <br />
              A Directory.

            </h2>

            <p className="mt-8 text-black/60 text-xl leading-relaxed max-w-xl">

              Blinked blends businesses, creators,
              communities and places into one
              immersive discovery experience.

            </p>

            <button className="mt-10 bg-black text-white px-8 py-4 rounded-full hover:scale-105 transition">
              Explore Platform
            </button>

          </div>

        </div>

      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 md:px-16 pb-12">

        <div className="border-t border-black/10 pt-10 flex flex-col md:flex-row items-center justify-between gap-6">

          <h2 className="text-3xl font-black">
            Blinked
          </h2>

          <div className="flex gap-8 text-black/50">

            <a href="#">Instagram</a>
            <a href="#">Twitter</a>
            <a href="#">LinkedIn</a>
            <a href="#">Contact</a>

          </div>

        </div>

      </footer>

    </main>
  );
}