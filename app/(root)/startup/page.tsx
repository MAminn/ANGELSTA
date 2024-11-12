"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
const Page = () => {
  return (
    <div className="bg-[#0b1622] text-[#d1d7d7] font-sans w-full h-full">
      {/* Hero Section */}
      <motion.section
        className="flex flex-col items-center justify-center min-h-screen py-20 bg-gradient-to-b from-[#0b1622] to-[#0b272d] px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-center max-xs:text-3xl">
          Accelerate Your Startup’s Growth with AI-Driven Valuation & Investment
          Readiness
        </h1>
        <p className="text-lg lg:text-2xl text-[#86bbb0] text-center mb-10 max-xs:text-sm">
          Angelsta connects your startup with investors, providing the tools and
          insights you need to raise funds in the MENA region.
        </p>
        <Link href="/form/onboarding">
          <motion.button
            className="bg-[#4c7375] hover:bg-[#86bbb0] text-[#ffffff] font-semibold py-4 px-12 rounded-lg max-xs:py-3 max-xs:px-8 transition duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.1 }}
          >
            Sign Up as a Startup
          </motion.button>
        </Link>
      </motion.section>

      {/* Section 1: AI Valuation */}
      <section className="py-16 px-8 md:px-24 lg:px-48 bg-[#0b272d]">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-6 max-xs:text-center">
            Get Instant AI-Powered Valuation Tailored for the MENA Market
          </h2>
          <p className="text-[#86bbb0] mb-6 max-xs:text-center">
            Angelsta’s AI-powered valuation tool offers real-time assessments of
            your startup&apos;s value based on regional trends, financial data,
            and industry analysis.
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Instant AI Valuations: Accurate and MENA-focused</li>
            <li>Investment Readiness Checklist for better investor appeal</li>
            <li>Data-Driven Decisions for strategic business improvements</li>
          </ul>
          <motion.button
            className="bg-[#4c7375] hover:bg-[#86bbb0] text-[#ffffff] font-semibold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.1 }}
          >
            Get Your Free AI Valuation
          </motion.button>
        </motion.div>
      </section>

      {/* Section 2: Angelsta Marketplace */}
      <section className="py-16 px-8 md:px-24 lg:px-48 bg-[#0b1622]">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-6 max-xs:text-center">
            Showcase Your Startup to Global Investors
          </h2>
          <p className="text-[#86bbb0] mb-6 max-xs:text-center">
            List your startup on Angelsta’s blockchain-powered marketplace to
            connect with active investors in the MENA region.
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Investor Access: Reach global, accredited investors</li>
            <li>Blockchain Security for complete transparency</li>
            <li>AI-backed promotion for competitive advantage</li>
          </ul>
          <motion.button
            className="bg-[#4c7375] hover:bg-[#86bbb0] text-[#ffffff] font-semibold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.1 }}
          >
            List Your Startup
          </motion.button>
        </motion.div>
      </section>

      {/* Section 3: Market & Industry Analysis */}
      <section className="py-16 px-8 md:px-24 lg:px-48 bg-[#0b272d]">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-6 max-xs:text-center">
            Leverage AI-Powered Market Insights to Optimize Your Growth Strategy
          </h2>
          <p className="text-[#86bbb0] mb-6">
            Use AI-driven industry reports to understand your competitive
            landscape, market demand, and growth opportunities in the MENA
            region.
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6 max-xs:text-center">
            <li>Industry Trends analysis for strategic adjustments</li>
            <li>Competitor Analysis to identify strengths</li>
            <li>Actionable Insights for better fundraising</li>
          </ul>
          <motion.button
            className="bg-[#4c7375] hover:bg-[#86bbb0] text-[#ffffff] font-semibold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.1 }}
          >
            Access Market Intelligence
          </motion.button>
        </motion.div>
      </section>

      {/* Section 4: Get Investment-Ready */}
      <section className="py-16 px-8 md:px-24 lg:px-48 bg-[#0b1622]">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-6 max-xs:text-center">
            Prepare for Investment with Angelsta’s Startup Toolkit
          </h2>
          <p className="text-[#86bbb0] mb-6 max-xs:text-center">
            From refining your pitch to investor matchmaking, Angelsta provides
            essential tools for securing growth funding.
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Pitch Preparation guidance</li>
            <li>AI-powered investor matching</li>
            <li>Opportunities for partnerships in MENA</li>
          </ul>
          <motion.button
            className="bg-[#4c7375] hover:bg-[#86bbb0] text-[#ffffff] font-semibold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.1 }}
          >
            Get Investment-Ready
          </motion.button>
        </motion.div>
      </section>

      {/* Final CTA Section */}
      <motion.section
        className="py-16 text-center bg-[#4c7375] text-[#0b1622] flex justify-center items-center flex-col"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold mb-6 text-white max-md:text-lg max-md:max-w-[300px]">
          Take Your Startup to the Next Level with Angelsta
        </h2>
        <motion.button
          className="bg-[#0b1622] hover:bg-[#0b272d] text-[#d1d7d7] font-semibold py-4 px-12 rounded-lg transition duration-300 transform hover:scale-105"
          whileHover={{ scale: 1.1 }}
        >
          Sign Up as a Startup
        </motion.button>
      </motion.section>
    </div>
  );
};

export default Page;
