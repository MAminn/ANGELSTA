import React from "react";
import Link from "next/link";

const InvestorPortfolioManagement: React.FC = () => {
  return (
    <div className='bg-[#0a1622] text-[#d1d7d7] min-h-screen py-12'>
      <div className='container mx-auto px-6 lg:px-12 space-y-16 pt-6 max-md:text-center'>
        {/* Headline and Subheadline */}
        <header className='text-center'>
          <h1 className='text-4xl lg:text-5xl font-bold text-[#87bab3] mb-4'>
            Manage and Grow Your Startup Portfolio with AI-Powered Insights
          </h1>
          <p className='text-xl lg:text-2xl text-[#d1d7d7] max-w-3xl mx-auto'>
            Optimize your portfolio strategy, assess new investment
            opportunities, and track startup performance with Angelsta’s
            comprehensive portfolio management solutions.
          </p>
        </header>

        {/* Section 1 */}
        <section className='bg-[#0a272b] p-8 rounded-lg shadow-lg'>
          <h2 className='text-3xl font-semibold text-[#4d7374] mb-4'>
            AI-Powered Portfolio Valuation & Management
          </h2>
          <p className='text-lg mb-6'>
            Angelsta provides investors with an AI-powered SaaS portfolio
            management solution that helps you periodically valuate your entire
            portfolio. With our tools, you can easily assess the current value
            of your startup investments and make informed decisions based on
            real-time data and market trends.
          </p>
          <ul className='space-y-2 list-disc list-inside'>
            <li>
              Periodic Valuation: Receive automated, AI-driven assessments of
              your portfolio’s value on a regular basis.
            </li>
            <li>
              Real-Time Adjustments: Our valuation tools help you stay ahead of
              market changes, enabling data-driven decisions.
            </li>
            <li>
              Strategic Insights: Use AI-generated reports to align your
              portfolio with investment goals.
            </li>
          </ul>
          <Link
            href='/services/portfolio-valuation'
            className='mt-6 inline-block bg-gradient-to-r from-[#87bab3] to-[#4d7374] text-[#0a1622] font-semibold py-3 px-6 rounded-full shadow-lg hover:scale-105 transition-transform'>
            Start Managing Your Portfolio
          </Link>
        </section>

        {/* Section 2 */}
        <section className='bg-[#0a272b] p-8 rounded-lg shadow-lg'>
          <h2 className='text-3xl font-semibold text-[#4d7374] mb-4'>
            New Startup Valuation & Portfolio Alignment
          </h2>
          <p className='text-lg mb-6'>
            Before making a new investment, Angelsta’s AI valuation tools help
            you understand how adding a new startup to your portfolio will
            impact your overall strategy.
          </p>
          <ul className='space-y-2 list-disc list-inside'>
            <li>
              New Startup Valuation: Instantly evaluate the value and potential
              of new startups.
            </li>
            <li>
              Portfolio Impact Analysis: Align new investments with your
              long-term portfolio strategy.
            </li>
            <li>
              Risk Mitigation: Identify potential risks and benefits before
              making new investments.
            </li>
          </ul>
          <Link
            href='/services/startup-valuation'
            className='mt-6 inline-block bg-gradient-to-r from-[#87bab3] to-[#4d7374] text-[#0a1622] font-semibold py-3 px-6 rounded-full shadow-lg hover:scale-105 transition-transform'>
            Evaluate New Investment Opportunities
          </Link>
        </section>

        {/* Section 3 */}
        <section className='bg-[#0a272b] p-8 rounded-lg shadow-lg'>
          <h2 className='text-3xl font-semibold text-[#4d7374] mb-4'>
            Due Diligence Services for New Investments
          </h2>
          <p className='text-lg mb-6'>
            Angelsta offers due diligence services that provide investors with
            in-depth analysis and insights into potential investments.
          </p>
          <ul className='space-y-2 list-disc list-inside'>
            <li>
              Financial Health Analysis: Review the startup’s financial
              standing.
            </li>
            <li>
              Market Validation: Check the startup&apos;s position within its
              industry.
            </li>
            <li>
              Operational Review: Assess the startup’s team, business model, and
              operations.
            </li>
          </ul>
          <Link
            href='/services/due-diligence'
            className='mt-6 inline-block bg-gradient-to-r from-[#87bab3] to-[#4d7374] text-[#0a1622] font-semibold py-3 px-6 rounded-full shadow-lg hover:scale-105 transition-transform'>
            Request Due Diligence Services
          </Link>
        </section>

        {/* Section 4 */}
        <section className='bg-[#0a272b] p-8 rounded-lg shadow-lg'>
          <h2 className='text-3xl font-semibold text-[#4d7374] mb-4'>
            Dashboard of Startup KPIs & Performance Tracking
          </h2>
          <p className='text-lg mb-6'>
            Keep track of your startup investments with Angelsta’s KPI
            dashboard, which allows you to monitor key performance indicators
            (KPIs) for each company in your portfolio.
          </p>
          <ul className='space-y-2 list-disc list-inside'>
            <li>
              KPI Tracking: Monitor revenue growth, user acquisition, and more.
            </li>
            <li>
              Automatic Updates: Get regular updates on startup performance.
            </li>
            <li>
              Portfolio Overview: Easily view trends and identify
              high-performing startups.
            </li>
          </ul>
          <Link
            href='/services/kpi-dashboard'
            className='mt-6 inline-block bg-gradient-to-r from-[#87bab3] to-[#4d7374] text-[#0a1622] font-semibold py-3 px-6 rounded-full shadow-lg hover:scale-105 transition-transform'>
            Monitor Your Investments
          </Link>
        </section>

        {/* Section 5 */}
        <section className='bg-[#0a272b] p-8 rounded-lg shadow-lg'>
          <h2 className='text-3xl font-semibold text-[#4d7374] mb-4'>
            Alerts & Reports
          </h2>
          <p className='text-lg mb-6'>
            Angelsta’s platform keeps you informed with real-time alerts and
            periodic reports on the status of your startup investments.
          </p>
          <ul className='space-y-2 list-disc list-inside'>
            <li>
              Performance Alerts: Stay updated with instant notifications.
            </li>
            <li>
              Customized Reports: Receive AI-generated summaries and portfolio
              checks.
            </li>
            <li>
              Stay Proactive: Use insights to make timely adjustments to your
              strategy.
            </li>
          </ul>
          <Link
            href='/services/alerts-reports'
            className='mt-6 inline-block bg-gradient-to-r from-[#87bab3] to-[#4d7374] text-[#0a1622] font-semibold py-3 px-6 rounded-full shadow-lg hover:scale-105 transition-transform'>
            Sign Up for Alerts
          </Link>
        </section>

        {/* Section 6 */}
        <section className='bg-[#0a272b] p-8 rounded-lg shadow-lg'>
          <h2 className='text-3xl font-semibold text-[#4d7374] mb-4'>
            Tailored Solutions for MENA Investors
          </h2>
          <p className='text-lg mb-6'>
            Angelsta’s portfolio management tools are designed to align with the
            unique dynamics of the MENA startup ecosystem.
          </p>
          <ul className='space-y-2 list-disc list-inside'>
            <li>Localized Insights: Focused on MENA market trends.</li>
            <li>
              Sector-Specific Analysis: Target key growth industries like
              fintech, e-commerce, and energy.
            </li>
            <li>
              Investment Strategy Alignment: Optimize your portfolio for the
              MENA region.
            </li>
          </ul>
          <Link
            href='/services/mena-portfolio-management'
            className='mt-6 inline-block bg-gradient-to-r from-[#87bab3] to-[#4d7374] text-[#0a1622] font-semibold py-3 px-6 rounded-full shadow-lg hover:scale-105 transition-transform'>
            Optimize Your Portfolio for MENA
          </Link>
        </section>

        {/* Final CTA */}
        <div className='text-center mt-12'>
          <h2 className='text-3xl font-semibold text-[#87bab3] mb-8'>
            Take Control of Your Startup Portfolio with Angelsta’s AI-Powered
            Tools
          </h2>
          <Link
            href='/sign-up'
            className='bg-gradient-to-r from-[#87bab3] to-[#4d7374] text-[#0a1622] font-semibold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition-transform'>
            Sign Up for Portfolio Management
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InvestorPortfolioManagement;
