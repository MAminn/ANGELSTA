
import Capital from "@/components/Capital";
import CTA from "@/components/CTA";
import Funding from "@/components/Funding";
import InvestorFooter from "@/components/InvestorFooter";
import Portoflio from "@/components/Portoflio";
import SectionInvestment from "@/components/SectionInvestment";
import SectionSummary from "@/components/SectionSummary";

const Investor = () => {
  return (
    <div className='flex flex-col bg-gray-100 '>
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
