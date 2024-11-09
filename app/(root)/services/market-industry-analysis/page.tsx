"use client";
import { useGuardVerifiedSession } from "@/server/clientUtils";
import { motion } from "framer-motion";
import { useSession } from "next-auth/react";
import React from "react";

const MarketIndustryAnalysis = () => {
  const session = useSession();
  useGuardVerifiedSession(session.data);
  return (
    <section className="relative px-8 py-32 bg-[#0a1622] h-screen">
      <div className="max-w-5xl mx-auto space-y-10 text-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <h1 className="text-4xl font-extrabold text-[#87bab3]">
            AI-Driven Market Intelligence Tailored for MENA Startups
          </h1>
          <p className="text-lg text-[#d1d7d7] max-w-2xl mx-auto lg:mx-auto">
            Angelsta provides in-depth AI-powered market analysis to help
            startups and investors stay ahead in the MENA region. Whether
            you&apos;re looking to scale your business or evaluate investment
            opportunities, our platform offers data-backed insights for better
            decision-making.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row justify-center lg:justify-start gap-6 mt-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="bg-[#0a272b] p-6 rounded-lg shadow-lg w-full lg:w-1/3"
          >
            <h3 className="text-xl font-semibold text-[#87bab3]">
              Real-Time Reports
            </h3>
            <p className="text-[#d1d7d7]">
              Get AI-driven market intelligence tailored to your business.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="bg-[#0a272b] p-6 rounded-lg shadow-lg w-full lg:w-1/3"
          >
            <h3 className="text-xl font-semibold text-[#87bab3]">
              Sector-Specific Insights
            </h3>
            <p className="text-[#d1d7d7]">
              Understand the trends in fintech, e-commerce, energy, and more in
              the MENA market.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="bg-[#0a272b] p-6 rounded-lg shadow-lg w-full lg:w-1/3"
          >
            <h3 className="text-xl font-semibold text-[#87bab3]">
              Competitive Advantage
            </h3>
            <p className="text-[#d1d7d7]">
              Use AI to stay ahead of the competition.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="text-center mt-10"
        >
          <button className="px-8 py-3 text-lg font-semibold text-[#0a1622] bg-[#87bab3] rounded-full hover:bg-[#4d7374] transition-colors">
            Explore Market Insights
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default MarketIndustryAnalysis;
