'use client'
import { motion } from "framer-motion";
import React from "react";

const InvestorPortfolioManagement = () => {
  return (
    <section className='px-8 py-28 bg-[#0a1622]'>
      <div className='max-w-7xl mx-auto space-y-20 text-center lg:text-left'>
        {/* Headline Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className='space-y-4'>
          <h1 className='text-4xl font-extrabold text-[#87bab3] text-center'>
            Manage and Grow Your Startup Portfolio with AI-Powered Insights
          </h1>
          <h2 className='text-xl font-medium text-[#d1d7d7] text-center'>
            Optimize your portfolio strategy, assess new investment
            opportunities, and track startup performance with Angelsta’s
            comprehensive portfolio management solutions.
          </h2>
        </motion.div>

        {/* Sections */}
        <div className='space-y-16'>
          {/* Section 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className='bg-[#0a272b] p-8 rounded-xl shadow-lg space-y-4'>
            <h3 className='text-3xl font-bold text-[#87bab3]'>
              AI-Powered Portfolio Valuation & Management
            </h3>
            <p className='text-lg text-[#d1d7d7]'>
              Regular Valuation of Your Startup Portfolio
            </p>
            <p className='text-[#d1d7d7]'>
              Angelsta provides investors with an AI-powered SaaS portfolio
              management solution that helps you periodically valuate your
              entire portfolio...
            </p>
            <ul className='list-disc list-inside text-[#d1d7d7] space-y-2'>
              <li>
                <strong>Periodic Valuation:</strong> Receive automated,
                AI-driven assessments...
              </li>
              <li>
                <strong>Real-Time Adjustments:</strong> Our valuation tools
                allow you to stay ahead...
              </li>
              <li>
                <strong>Strategic Insights:</strong> Use AI-generated reports to
                align...
              </li>
            </ul>
            <button className='px-8 py-3 mt-4 text-lg font-semibold text-[#0a1622] bg-[#87bab3] rounded-full hover:bg-[#4d7374] transition-colors'>
              Start Managing Your Portfolio
            </button>
          </motion.div>

          {/* Repeat similar structure for each section but vary the animation and layout slightly */}
          {/* Section 2 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className='p-8 bg-[#4d7374] text-white rounded-xl shadow-lg space-y-4'>
            <h3 className='text-3xl font-bold'>
              New Startup Valuation & Portfolio Alignment
            </h3>
            <p className='text-lg'>
              Evaluate New Startups and Align Them with Your Portfolio Strategy
            </p>
            <p>
              Before making a new investment, Angelsta’s AI valuation tools help
              you understand...
            </p>
            <ul className='list-disc list-inside space-y-2'>
              <li>
                <strong>New Startup Valuation:</strong> Instantly evaluate...
              </li>
              <li>
                <strong>Portfolio Impact Analysis:</strong> Our tools compare...
              </li>
              <li>
                <strong>Risk Mitigation:</strong> Understand potential risks...
              </li>
            </ul>
            <button className='px-8 py-3 mt-4 text-lg font-semibold text-[#0a1622] bg-[#d1d7d7] rounded-full hover:bg-[#87bab3] transition-colors'>
              Evaluate New Investment Opportunities
            </button>
          </motion.div>

          {/* Additional Sections: Use varied animations and layouts for each */}
          {/* Section 3 */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className='bg-[#0a272b] p-8 rounded-xl shadow-lg space-y-4'>
            <h3 className='text-3xl font-bold text-[#87bab3]'>
              Due Diligence Services for New Investments
            </h3>
            <p className='text-lg text-[#d1d7d7]'>
              Comprehensive Due Diligence for Smarter Investments
            </p>
            <p className='text-[#d1d7d7]'>
              Angelsta offers due diligence services that provide investors with
              in-depth analysis...
            </p>
            <button className='px-8 py-3 mt-4 text-lg font-semibold text-[#0a1622] bg-[#87bab3] rounded-full hover:bg-[#4d7374] transition-colors'>
              Request Due Diligence Services
            </button>
          </motion.div>

          {/* Final CTA Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className='text-center mt-10 space-y-6'>
            <h3 className='text-4xl font-extrabold text-[#87bab3]'>
              Take Control of Your Startup Portfolio with Angelsta&apos;s AI-Powered
              Tools
            </h3>
            <button className='px-10 py-4 text-xl font-semibold text-[#0a1622] bg-[#87bab3] rounded-full hover:bg-[#4d7374] transition-colors'>
              Sign Up for Portfolio Management
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InvestorPortfolioManagement;
