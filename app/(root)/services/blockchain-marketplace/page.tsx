"use client";
import React from "react";
import { motion } from "framer-motion";

const BlockchainMarketplace: React.FC = () => {
  return (
    <div className="bg-[#0b1622] text-[#d1d7d7] font-sans">
      {/* Header Section */}
      <section className="text-center py-20 bg-gradient-to-b from-[#0b1622] to-[#0b272d]">
        <motion.h1
          className="text-4xl lg:text-5xl font-bold mb-4 max-xs:text-3xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Blockchain-Backed Marketplace for MENA Startups & Investors
        </motion.h1>
        <motion.p
          className="text-xl text-[#86bbb0] mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Buy, sell, and invest in shares securely using blockchain technology.
        </motion.p>
        <motion.button
          className="bg-[#4c7375] hover:bg-[#86bbb0] text-[#ffffff] font-semibold py-3 px-8 max-xs:py-4 max-xs:px-6 max-sm:text-sm rounded-full transition duration-300 transform hover:scale-105"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Explore the Blockchain Marketplace
        </motion.button>
      </section>

      {/* Section 1: Blockchain Ensuring Transparency */}
      <section className="py-16 px-6 md:px-12 lg:px-32 bg-[#0b272d]">
        <h2 className="text-3xl font-bold mb-6 max-xs:text-center">
          Why Blockchain Matters in MENA’s Startup Ecosystem
        </h2>
        <p className="text-[#86bbb0] mb-8 max-xs:text-center">
          In a rapidly growing market like MENA, transparency and security are
          paramount. Angelsta’s blockchain ensures that every transaction on our
          marketplace is secure and immutable, allowing investors to trade
          shares with confidence.
        </p>
        {/* Feature List */}
        <div className="space-y-6">
          {/* Feature Items */}
          {[
            "Tamper-Proof Transactions",
            "Full Visibility",
            "Cross-Border Investments",
          ].map((title, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-4 hover:scale-105 transition-transform duration-300 max-xs:flex-col max-xs:items-center max-xs:justify-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-10 h-10 bg-[#4c7375] rounded-full" />
              <div>
                <h3 className="text-2xl font-semibold text-[#d1d7d7] max-xs:text-center">
                  {title}
                </h3>
                <p className="text-[#86bbb0] max-xs:text-center">
                  Feature description here.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        <button className="mt-10 bg-[#4c7375] hover:bg-[#86bbb0] text-[#ffffff] font-semibold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105">
          Explore the Blockchain Marketplace
        </button>
      </section>

      {/* Section: Blockchain Benefits at a Glance */}
      <section className="py-16 px-6 md:px-12 lg:px-32 bg-gradient-to-b from-[#4c7375] to-[#86bbb0] text-[#0b1622]">
        <h2 className="text-3xl font-bold mb-6">
          Blockchain Benefits at a Glance
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {["Security", "Global Reach", "Cost Savings"].map(
            (benefit, index) => (
              <motion.div
                key={index}
                className="p-6 bg-[#0b272d] rounded-lg shadow-lg hover:shadow-xl transition duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-xl font-semibold mb-2 text-[#86bbb0]">
                  {benefit}
                </h3>
                <p className="text-sm text-[#d1d7d7]">
                  Benefit description here.
                </p>
              </motion.div>
            )
          )}
        </div>
      </section>

      {/* Section 2: Secure Transactions for MENA Startups & Investors */}
      <section className="py-16 px-6 md:px-12 lg:px-32 bg-[#0b1622] text-[#d1d7d7] max-xs:text-center">
        <h2 className="text-3xl font-bold mb-6">
          Cross-Border Startup Investments Made Simple with Blockchain
        </h2>
        <div className="space-y-6">
          {/* Feature Items */}
          {["Secure & Transparent", "Global Reach", "Lower Fees"].map(
            (title, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4 duration-300  max-xs:flex-col max-xs:items-center max-xs:justify-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-10 h-10 bg-[#0b272d] rounded-full " />
                <div>
                  <h3 className="text-2xl font-semibold">{title}</h3>
                  <p>Feature description here.</p>
                </div>
              </motion.div>
            )
          )}
        </div>
        <button className="mt-10 bg-[#0b272d] hover:bg-[#4c7375] text-[#d1d7d7] font-semibold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105">
          Join the Marketplace Today
        </button>
      </section>

      {/* Section: Testimonials */}
      <section className="py-16 px-6 md:px-12 lg:px-32 bg-[#0b1622] text-center">
        <h2 className="text-3xl font-bold mb-6 text-[#d1d7d7]">
          What Our Users Say
        </h2>
        <motion.div
          className="space-y-4 max-w-lg mx-auto text-[#86bbb0]"
          animate={{ opacity: [0, 1], scale: [0.9, 1] }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <p>
            &quot;Blockchain transactions have never been this simple and
            secure!&quot;
          </p>
          <p>
            &quot;Angelsta&apos;s platform opens doors to cross-border
            opportunities.&quot;
          </p>
        </motion.div>
      </section>

      {/* Footer CTA */}
      <section className="text-center py-12 bg-gradient-to-b from-[#0b1622] to-[#0b272d] flex flex-col items-center space-y-4">
        <p className="text-xl text-[#d1d7d7] px-6 py-4">
          Empowering secure investments for the MENA region
        </p>
        <button className="bg-[#4c7375] hover:bg-[#86bbb0] text-[#ffffff] font-semibold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105">
          Get Started with Angelsta
        </button>
      </section>
    </div>
  );
};

export default BlockchainMarketplace;
