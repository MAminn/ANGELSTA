import React from "react";
import Link from "next/link";
import auth from "@/auth";
import { guardVerifiedSession } from "@/server/utils";

const SyndicateFunds: React.FC = async () => {
  const session = await auth();
  guardVerifiedSession(session);
  return (
    <div className="bg-[#0a1622] text-[#d1d7d7] min-h-screen py-28">
      <div className="container mx-auto px-6 lg:px-12 space-y-10 pt-6 max-md:text-center">
        {/* Headline and Subheadline */}
        <header className="text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-[#87bab3] mb-4">
            Amplify Your Investment Power with Syndicate Funds
          </h1>
          <p className="text-xl lg:text-2xl font-light text-[#d1d7d7] mb-8">
            Join forces with other MENA investors to pool resources and back the
            region’s most promising startups.
          </p>
        </header>

        {/* Section 1: Why Create a Syndicate Fund? */}
        <section className="bg-[#0a272b] p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-[#4d7374] mb-4">
            Collaborate for Greater Investment Impact
          </h2>
          <p className="text-lg lg:text-xl mb-6">
            With Angelsta, investors can create or join syndicate funds, pooling
            resources with other accredited investors in the MENA region to back
            high-potential startups. Syndicate funds allow you to spread risk
            while gaining access to larger deals.
          </p>
          <ul className="space-y-3 list-disc list-inside text-lg">
            <li>
              Diversify Investments: Syndicate with other investors to build a
              well-rounded portfolio.
            </li>
            <li>
              Larger Opportunities: Gain access to deals that would be out of
              reach for solo investors.
            </li>
            <li>
              Low Management Fees: Angelsta ensures your syndicate runs smoothly
              with transparent fees.
            </li>
          </ul>
          <Link
            href="/services/start-syndicate-fund"
            className="mt-6 inline-block bg-gradient-to-r from-[#87bab3] to-[#4d7374] text-[#0a1622] font-semibold py-3 px-6 rounded-full shadow-lg hover:scale-105 transition-transform"
          >
            Start a Syndicate Fund
          </Link>
        </section>

        {/* Section 2: Blockchain-Powered Syndicates for MENA */}
        <section className="bg-[#0a272b] p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-[#4d7374] mb-4">
            Secure and Transparent Syndicate Fund Management
          </h2>
          <p className="text-lg lg:text-xl mb-6">
            Angelsta’s blockchain technology ensures full transparency for all
            syndicate transactions, protecting your investments from fraud and
            securing them across borders. Manage your fund with ease, knowing
            all financial operations are tamper-proof.
          </p>
          <ul className="space-y-3 list-disc list-inside text-lg">
            <li>
              Blockchain Security: Every transaction is recorded and verified
              for trust.
            </li>
            <li>
              Transparency in Operations: All syndicate activities are visible
              to its members, enhancing accountability.
            </li>
            <li>
              Cross-Border Flexibility: Make investments throughout the MENA
              region and beyond.
            </li>
          </ul>
          <Link
            href="/services/create-syndicate-fund"
            className="mt-6 inline-block bg-gradient-to-r from-[#87bab3] to-[#4d7374] text-[#0a1622] font-semibold py-3 px-6 rounded-full shadow-lg hover:scale-105 transition-transform"
          >
            Create a Syndicate Fund
          </Link>
        </section>
      </div>
    </div>
  );
};

export default SyndicateFunds;
