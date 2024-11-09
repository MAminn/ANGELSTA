"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import aivaluation from "@/public/images/ai-valuation-graphic.png";
import React from "react";
import { useSession } from "next-auth/react";
import { useGuardVerifiedSession } from "@/server/clientUtils";

const AIValuationPage = () => {
  const session = useSession();
  useGuardVerifiedSession(session.data);
  return (
    <section className="px-8 py-28 bg-[#0a1622]">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center"
        >
          <h1 className="text-6xl font-extrabold text-[#87bab3] leading-tight">
            AI Valuation for Startups: Fast, Accurate, and Data-Driven
          </h1>
          <h2 className="mt-6 text-xl text-[#d1d7d7]  mx-auto lg:mx-0">
            Angelsta&apos;s cutting-edge AI algorithms provide real-time,
            precise valuations tailored specifically to the MENA market.
          </h2>
          <div className="mt-10 flex justify-center lg:justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 text-lg font-semibold text-[#0a1622] bg-[#87bab3] rounded-full shadow-xl hover:bg-[#4d7374] transition duration-300"
            >
              Get Your Free AI Valuation
            </motion.button>
          </div>
        </motion.div>

        {/* How Angelsta AI Works */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="bg-[#0a272b] p-12 rounded-3xl shadow-2xl"
        >
          <div className="max-w-5xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-[#87bab3]">
              Real-Time AI Valuations to Propel Your Startup’s Growth
            </h3>
            <p className="mt-6 text-lg text-[#d1d7d7]">
              Our advanced AI technology analyzes vast amounts of data to
              deliver instant, accurate startup valuations, tailored to regional
              market trends. Understand your company’s investment readiness with
              ease.
            </p>
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-10">
              <div className="space-y-4">
                <div className="flex justify-center">
                  <span className="text-5xl text-[#87bab3]">⚡</span>
                </div>
                <h4 className="text-xl font-semibold text-[#d1d7d7]">
                  Instant Assessments
                </h4>
                <p className="text-lg text-[#d1d7d7]">
                  Say goodbye to waiting weeks for traditional reviews. Get
                  immediate valuation results.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex justify-center">
                  <span className="text-5xl text-[#87bab3]">📊</span>
                </div>
                <h4 className="text-xl font-semibold text-[#d1d7d7]">
                  Data-Backed Insights
                </h4>
                <p className="text-lg text-[#d1d7d7]">
                  Thousands of data points are analyzed to ensure the highest
                  level of precision.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex justify-center">
                  <span className="text-5xl text-[#87bab3]">🌍</span>
                </div>
                <h4 className="text-xl font-semibold text-[#d1d7d7]">
                  Tailored for MENA
                </h4>
                <p className="text-lg text-[#d1d7d7]">
                  Angelsta’s AI integrates regional trends and market conditions
                  to provide a localized view.
                </p>
              </div>
            </div>
            <div className="mt-10 text-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 text-lg font-semibold text-[#0a1622] bg-[#87bab3] rounded-full shadow-xl hover:bg-[#4d7374] transition duration-300"
              >
                Get Your AI Valuation
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* AI Image & Benefits */}
        <div className="lg:flex lg:items-center lg:space-x-10">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.4 }}
            className="lg:w-1/2"
          >
            <Image
              src={aivaluation}
              alt="AI Valuation Graphic"
              width={700}
              height={400}
              className="rounded-3xl shadow-xl mx-auto"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.6 }}
            className="lg:w-1/2 space-y-8"
          >
            <h3 className="text-3xl font-bold text-[#87bab3]">
              Why MENA Investors Trust Angelsta&apos;s AI Valuations
            </h3>
            <p className="text-lg text-[#d1d7d7]">
              With Angelsta&apos;s AI-powered valuations, MENA investors gain
              critical insights into risk, growth potential, and sector-specific
              data, allowing for informed decisions and more secure investments.
            </p>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="text-3xl text-[#87bab3]">🔒</div>
                <div className="space-y-2">
                  <h4 className="text-xl font-semibold text-[#d1d7d7]">
                    Risk Mitigation
                  </h4>
                  <p className="text-lg text-[#d1d7d7]">
                    Our AI system evaluates the financial stability and market
                    opportunities of startups to reduce investment risk.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-3xl text-[#87bab3]">📈</div>
                <div className="space-y-2">
                  <h4 className="text-xl font-semibold text-[#d1d7d7]">
                    Growth Potential
                  </h4>
                  <p className="text-lg text-[#d1d7d7]">
                    Gain valuable insights into the projected success and
                    scalability of a startup.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-3xl text-[#87bab3]">💡</div>
                <div className="space-y-2">
                  <h4 className="text-xl font-semibold text-[#d1d7d7]">
                    Sector-Specific Insights
                  </h4>
                  <p className="text-lg text-[#d1d7d7]">
                    Detailed AI reports focusing on high-potential sectors like
                    fintech, healthcare, and energy in MENA.
                  </p>
                </div>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 text-lg font-semibold text-[#0a1622] bg-[#d1d7d7] rounded-full shadow-xl hover:bg-[#87bab3] transition duration-300"
            >
              Explore AI Valuation Reports
            </motion.button>
          </motion.div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-20">
          <h3 className="text-4xl font-extrabold text-[#87bab3]">
            Take Control of Your Startup’s Future with AI Valuation
          </h3>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 px-12 py-5 text-xl font-semibold text-[#0a1622] bg-[#87bab3] rounded-full shadow-xl hover:bg-[#4d7374] transition duration-300"
          >
            Sign Up for AI Valuation
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default AIValuationPage;
