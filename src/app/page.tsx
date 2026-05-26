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
        <div className="flex items-center cursor-pointer">

          <Image
            src="/img/blinked_01.png"
            alt="Blinked Logo"
            width={150}
            height={50}
            priority
            className="w-auto h-10 object-contain"
          />

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
          <div className="absolute inset-x-0 bottom-0 h-[25%] bg-gradient-to-t from-[#f6f1e8] to-transparent" />

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
                className="px-5 py-3 rounded-full bg-black/25 backdrop-blur-xl border border-white/15 text-white/90 font-medium hover:bg-white/20 transition duration-300 cursor-pointer"
              >

                {item}

              </motion.div>

            ))}

          </div>

        </div>

      </section>

    {/* HOW IT WORKS */}

      <section className="relative z-10 py-28 bg-[#f6f1e8]">

        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}
          <div className="text-center max-w-5xl mx-auto">

            <p className="uppercase tracking-[0.3em] text-yellow-700 font-semibold text-base mb-5">
              HOW IT WORKS
            </p>

            <h2 className="text-5xl md:text-6xl font-black tracking-tight">
              Grow Your Business
              <br />
              With Blinked.
            </h2>

            <p className="mt-8 text-lg text-black/60 leading-relaxed">

              Join Blinked to showcase your business,
              attract customers and unlock powerful
              growth opportunities.

            </p>

          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-4 gap-8 mt-20">

            {[
              {
                number: "1",
                image: "/img/how1.png",
                title: "Create account",
                desc: "Discover the power of connection with Blinked, Mumbai’s modern local business platform. Create an account to unlock opportunities for networking, promoting your business and finding trusted local customers.",
              },

              {
                number: "2",
                image: "/img/how2.png",
                title: "Add business",
                desc: "Elevate your business presence with Blinked. Showcase your brand, services and products beautifully to attract customers, increase visibility and stand out from the competition.",
              },

              {
                number: "3",
                image: "/img/how3.png",
                title: "Grow business",
                desc: "Expand your reach, attract new customers and maximize growth with Blinked’s modern discovery platform. Build trust, improve visibility and accelerate your business success.",
              },

              {
                number: "4",
                image: "/img/how4.png",
                title: "Achieve goals",
                desc: "Connect your social media, showcase company details, add categories and build a complete digital business identity that helps generate leads and grow your presence.",
              },
            ].map((item, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                  type: "spring",
                  stiffness: 200,
                }}
                className="relative text-center bg-white/70 border border-black/5 rounded-[2rem] p-8 backdrop-blur-md shadow-[0_12px_40px_rgba(0,0,0,0.06)]"
              >

                {/* Number */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-yellow-400 text-black font-bold flex items-center justify-center shadow-lg">

                  {item.number}

                </div>

                {/* Image */}
                <Image
                  src={item.image}
                  alt={item.title}
                  width={90}
                  height={90}
                  className="mx-auto mb-6 object-contain"
                />

                {/* Title */}
                <h3 className="text-3xl font-semibold tracking-tight">

                  {item.title}

                </h3>

                {/* Description */}
                <p className="mt-5 text-black/55 leading-relaxed text-[15px]">

                  {item.desc}

                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

 {/* WHY BLINKED */}
<section className="relative z-10 py-24 bg-[#111315] overflow-visible">

  <div className="relative z-10 max-w-7xl mx-auto px-6">

    {/* Top Heading */}
    <div className="max-w-4xl">

      <p className="uppercase tracking-[0.3em] text-yellow-500 font-semibold text-lg mb-5">
        BLINKED IDEA
      </p>

      <h2 className="max-w-3xl text-5xl md:text-5xl font-black tracking-tight leading-[1] text-white">

        Elevating Businesses.
        <br />
        Amplifying Services.

      </h2>

    </div>

    {/* Main Layout */}
    <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 mt-16 items-center">

      {/* Left Image */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{
          scale: 1.01,
        }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative"
      >

        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.35)]">

          <Image
            src="/img/business.png"
            alt="Blinked"
            width={1400}
            height={1000}
            className="w-full h-[500px] object-cover"
          />

          {/* Image Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        </div>

      </motion.div>

      {/* Right Features */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="space-y-8"
      >

        <div>

          <h3 className="text-2xl font-semibold tracking-tight text-white">

            Smart Discovery

          </h3>

          <p className="mt-3 text-white/65 leading-relaxed">

            ➯ Help customers discover trusted local
            businesses faster through a modern,
            beautifully designed platform.

          </p>

        </div>

        <div>

          <h3 className="text-2xl font-semibold tracking-tight text-white">

            Rich Business Profiles

          </h3>

          <p className="mt-3 text-white/65 leading-relaxed">

            ➯ Showcase services, social links,
            maps, photos and important business
            details all in one place.

          </p>

        </div>

        <div>

          <h3 className="text-2xl font-semibold tracking-tight text-white">

            Digital Business Identity

          </h3>

          <p className="mt-3 text-white/65 leading-relaxed">

            ➯ Turn your business listing into a
            complete digital storefront experience
            customers can trust.

          </p>

        </div>

        <div>

          <h3 className="text-2xl font-semibold tracking-tight text-white">

            Growth Focused

          </h3>

          <p className="mt-3 text-white/65 leading-relaxed">

            ➯ Increase visibility, generate leads
            and build a stronger presence in your
            local market.

          </p>

        </div>

      </motion.div>

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