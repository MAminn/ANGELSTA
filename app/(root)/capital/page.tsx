import auth from "@/auth";
import Capital from "@/components/Capital";
import CTA from "@/components/CTA";
import Funding from "@/components/Funding";
import InvestorFooter from "@/components/InvestorFooter";
import Portoflio from "@/components/Portoflio";
import SectionInvestment from "@/components/SectionInvestment";
import SectionSummary from "@/components/SectionSummary";
import { guardVerifiedSession } from "@/server/utils";

const Investor = async () => {
  const session = await auth();

  guardVerifiedSession(session);
  return (
    <div className="flex flex-col bg-gray-100 z-20">
      <SectionInvestment />
      <SectionSummary />
      <Funding />
      <Portoflio />
      <Capital />
      <CTA />
      <InvestorFooter />
    </div>
  );
};

export default Investor;

// import React from "react";

// const FundPage = () => {
//   return (
//     <div className='bg-[#f8f9fb] text-[#0a1622]'>
//       {/* Hero Section */}
//       <section className='bg-gradient-to-b from-[#87bab3] to-[#d1d7d7] text-center pt-28 pb-16'>
//         <h1 className='text-4xl font-bold mb-4'>
//           Grow Your Startup Portfolio with AI-Powered Insights and Blockchain
//           Security
//         </h1>
//         <p className='text-lg max-w-2xl mx-auto mb-8'>
//           Invest in the MENA region&apos;s most promising startups, backed by
//           advanced AI valuations and blockchain-powered marketplaces.
//         </p>
//         <button className='px-6 py-3 rounded-full bg-[#4d7374] text-white font-semibold hover:bg-[#87bab3] transition'>
//           Sign Up as an Investor
//         </button>
//       </section>

//       {/* Section 1 */}
//       <section className='py-12 px-6 md:px-12 lg:px-24'>
//         <h2 className='text-3xl font-semibold text-center mb-4'>
//           Unlock High-Quality Investments with AI-Driven Recommendations
//         </h2>
//         <p className='text-center max-w-3xl mx-auto mb-8'>
//           Angelsta gives investors access to curated startup opportunities
//           backed by AI-driven valuations and real-time market intelligence. Make
//           data-driven decisions with confidence.
//         </p>
//         <div className='grid md:grid-cols-3 gap-6'>
//           {[
//             {
//               title: "AI-Powered Recommendations",
//               description:
//                 "Leverage AI to discover startups with the highest growth potential in the MENA region.",
//             },
//             {
//               title: "Data-Driven Insights",
//               description:
//                 "Access detailed financial analysis and market trends to make informed decisions.",
//             },
//             {
//               title: "Real-Time Updates",
//               description:
//                 "Track your portfolio and receive instant alerts on important investment milestones.",
//             },
//           ].map((item, index) => (
//             <div
//               key={index}
//               className='bg-white p-6 rounded-lg shadow-lg text-center'>
//               <h3 className='text-lg font-semibold mb-2'>{item.title}</h3>
//               <p className='text-sm text-gray-600'>{item.description}</p>
//             </div>
//           ))}
//         </div>
//         <div className='text-center mt-8'>
//           <button className='px-6 py-3 rounded-full bg-[#4d7374] text-white font-semibold hover:bg-[#87bab3] transition'>
//             Start Building Your Portfolio
//           </button>
//         </div>
//       </section>

//       {/* Section 2 */}
//       <section className='bg-[#d1d7d7] py-12 px-6 md:px-12 lg:px-24'>
//         <h2 className='text-3xl font-semibold text-center mb-4'>
//           Secure Your Investments with Blockchain Transparency
//         </h2>
//         <p className='text-center max-w-3xl mx-auto mb-8'>
//           Angelsta’s blockchain-powered marketplace ensures that every
//           transaction is secure, tamper-proof, and fully transparent.
//         </p>
//         <div className='flex flex-col md:flex-row gap-6'>
//           {[
//             {
//               title: "Immutable Transactions",
//               description:
//                 "Every investment is recorded on the blockchain, ensuring complete transparency.",
//             },
//             {
//               title: "Reduced Risk",
//               description:
//                 "Blockchain mitigates the risk of fraud, ensuring that your investment is secure.",
//             },
//             {
//               title: "Cross-Border Access",
//               description:
//                 "Seamlessly invest across MENA countries with full confidence in secure, verified transactions.",
//             },
//           ].map((item, index) => (
//             <div
//               key={index}
//               className='bg-white p-6 rounded-lg shadow-lg text-center md:w-1/3'>
//               <h3 className='text-lg font-semibold mb-2'>{item.title}</h3>
//               <p className='text-sm text-gray-600'>{item.description}</p>
//             </div>
//           ))}
//         </div>
//         <div className='text-center mt-8'>
//           <button className='px-6 py-3 rounded-full bg-[#4d7374] text-white font-semibold hover:bg-[#87bab3] transition'>
//             Explore Secure Investment Opportunities
//           </button>
//         </div>
//       </section>

//       {/* Section 3 */}
//       <section className='py-12 px-6 md:px-12 lg:px-24'>
//         <h2 className='text-3xl font-semibold text-center mb-4'>
//           Amplify Your Investment Potential with Syndicate Funds
//         </h2>
//         <p className='text-center max-w-3xl mx-auto mb-8'>
//           Join or create syndicate funds to pool resources with other accredited
//           investors. Access high-quality startups with collective investment
//           power.
//         </p>
//         <div className='grid md:grid-cols-3 gap-6'>
//           {[
//             {
//               title: "Collaborative Investing",
//               description:
//                 "Co-invest with others and share high-quality opportunities.",
//             },
//             {
//               title: "Managed Risk",
//               description:
//                 "Spread risk across multiple investments while accessing bigger deals.",
//             },
//             {
//               title: "Low Fees",
//               description:
//                 "Enjoy low management fees and transparent blockchain transactions.",
//             },
//           ].map((item, index) => (
//             <div
//               key={index}
//               className='bg-white p-6 rounded-lg shadow-lg text-center'>
//               <h3 className='text-lg font-semibold mb-2'>{item.title}</h3>
//               <p className='text-sm text-gray-600'>{item.description}</p>
//             </div>
//           ))}
//         </div>
//         <div className='text-center mt-8'>
//           <button className='px-6 py-3 rounded-full bg-[#4d7374] text-white font-semibold hover:bg-[#87bab3] transition'>
//             Start a Syndicate Fund
//           </button>
//         </div>
//       </section>

//       {/* Section 4 */}
//       <section className='bg-[#d1d7d7] py-12 px-6 md:px-12 lg:px-24'>
//         <h2 className='text-3xl font-semibold text-center mb-4'>
//           Stay Ahead with AI-Driven Market Insights
//         </h2>
//         <p className='text-center max-w-3xl mx-auto mb-8'>
//           Access real-time AI-powered market analysis tailored for the MENA
//           region, and make smart investment decisions.
//         </p>
//         <div className='flex flex-col md:flex-row gap-6'>
//           {[
//             {
//               title: "Sector-Specific Insights",
//               description:
//                 "Get reports on the industries shaping the MENA startup ecosystem.",
//             },
//             {
//               title: "Competitive Analysis",
//               description:
//                 "Use AI to compare startups and identify the best investment opportunities.",
//             },
//             {
//               title: "Growth Forecasts",
//               description:
//                 "AI-powered predictive analytics provide insights into potential returns and risk factors.",
//             },
//           ].map((item, index) => (
//             <div
//               key={index}
//               className='bg-white p-6 rounded-lg shadow-lg text-center md:w-1/3'>
//               <h3 className='text-lg font-semibold mb-2'>{item.title}</h3>
//               <p className='text-sm text-gray-600'>{item.description}</p>
//             </div>
//           ))}
//         </div>
//         <div className='text-center mt-8'>
//           <button className='px-6 py-3 rounded-full bg-[#4d7374] text-white font-semibold hover:bg-[#87bab3] transition'>
//             Explore Market Insights
//           </button>
//         </div>
//       </section>

//       {/* Final CTA Section */}
//       <section className='bg-gradient-to-b from-[#87bab3] to-[#4d7374] text-center py-16'>
//         <h2 className='text-3xl font-semibold text-white mb-6'>
//           Start Growing Your Portfolio Today with Angelsta
//         </h2>
//         <button className='px-8 py-4 rounded-full bg-white text-[#4d7374] font-bold hover:bg-[#d1d7d7] transition'>
//           Sign Up as an Investor
//         </button>
//       </section>
//     </div>
//   );
// };

// export default FundPage;
