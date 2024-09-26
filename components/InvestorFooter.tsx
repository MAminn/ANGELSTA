import React from "react";

const InvestorFooter = () => {
  return (
    <footer className='px-8 py-24 text-gray-100 bg-[#001d21f3]'>
      <div className='mx-auto max-w-7xl '>
        <div className='grid grid-cols-1 gap-8 lg:grid-cols-12'>
          <div className='col-span-1 lg:col-span-8 lg:order-last'>
            <div className='space-y-4 text-sm text-center lg:text-left'>
              <p>
                Investing in venture capital funds is inherently risky and
                illiquid. It involves a high degree of risk and is suitable only
                for sophisticated and qualified investors. Past performance is
                not indicative of future results. Examples of portfolio
                companies are purely for illustrative purposes and selected
                based on name recognition. Examples provided are only partial,
                and readers should not assume that the investments identified
                were or will be profitable. There is no guarantee that any fund
                will achieve the same exposure to, or quality of, investments
                held by any existing fund or existing highly rated companies.{" "}
              </p>

              <p>
                Nothing on this page shall constitute an offer to sell or a
                solicitation of an offer to buy an interest in the partnership
                or other security. Any offer to sell or solicitation of an offer
                to buy an interest in the partnership may be made only by way of
                the partnerships final definitive confidential disclosure
                document.
              </p>

              <p>
                Any terms related to the provision of Kingscrowd services are
                subject to change without notice.
              </p>
            </div>
          </div>
          <div className='col-span-1 lg:col-span-4 lg:order-first'>
            <h2 className='font-bold text-5xl w-full max-md:text-center'>ANGELISTA</h2>
          </div>
        </div>
      </div>{" "}
    </footer>
  );
};

export default InvestorFooter;
