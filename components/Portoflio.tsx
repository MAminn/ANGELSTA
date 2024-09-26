import React from 'react'

const Portoflio = () => {
  return (
    <section className="px-8 py-16 bg-slate-200">
                {/* <!-- portfolio entry --> */}
<div  className="max-w-4xl mx-auto">
    <div className="pb-12 space-y-3 text-center">
        <h2 className="text-4xl font-bold text-gray-700 ">Angelista Capital Fund</h2>
        <p className="text-2xl text-indigo-700 font-semi-bold">Access a portfolio of 100 startups with a single investment </p>
    </div>
</div>

{/* <!-- Portfolio Details --> */}
<div id="portfolioDetail" className="relative max-w-sm mx-auto space-y-4 portfolio-detail">
    
    <div id="portfolioPieChart" className="portfolio-pie-chart">
        <svg className="w-full" width="384" height="384" viewBox="0 0 384 384" fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask id="path-1-inside-1_0_1" fill="white">
        <path d="M192 0C222.3 3.61319e-07 252.169 7.17102 279.166 20.9267C306.163 34.6825 329.522 54.6323 347.331 79.1452C365.141 103.658 376.896 132.038 381.636 161.965C386.376 191.891 383.966 222.515 374.603 251.331L192 192V0Z"></path>
    </mask>
    <path d="M192 0C222.3 3.61319e-07 252.169 7.17102 279.166 20.9267C306.163 34.6825 329.522 54.6323 347.331 79.1452C365.141 103.658 376.896 132.038 381.636 161.965C386.376 191.891 383.966 222.515 374.603 251.331L192 192V0Z" fill="#4200FF" stroke="white" stroke-width="8" mask="url(#path-1-inside-1_0_1)"></path>
    <mask id="path-2-inside-2_0_1" fill="white">
        <path d="M9.08534 250.363C-0.12493 221.497 -2.37276 190.861 2.52565 160.96C7.42405 131.059 19.3296 102.742 37.2689 78.3238C55.2082 53.9056 78.6719 34.0798 105.741 20.4673C132.811 6.8548 162.718 -0.15785 193.017 0.00269524L192 192L9.08534 250.363Z"></path>
    </mask>
    <path d="M9.08534 250.363C-0.12493 221.497 -2.37276 190.861 2.52565 160.96C7.42405 131.059 19.3296 102.742 37.2689 78.3238C55.2082 53.9056 78.6719 34.0798 105.741 20.4673C132.811 6.8548 162.718 -0.15785 193.017 0.00269524L192 192L9.08534 250.363Z" fill="#97DEBC" stroke="#F4F6F8" stroke-width="8" mask="url(#path-2-inside-2_0_1)"></path>
    <mask id="path-3-inside-3_0_1" fill="white">
        <path d="M374.62 251.28C362.101 289.845 337.694 323.458 304.898 347.3C272.102 371.141 232.6 383.989 192.054 384C151.507 384.011 111.998 371.186 79.1888 347.363C46.3794 323.54 21.9542 289.941 9.41381 251.383L192 192L374.62 251.28Z"></path>
    </mask>
    <path d="M374.62 251.28C362.101 289.845 337.694 323.458 304.898 347.3C272.102 371.141 232.6 383.989 192.054 384C151.507 384.011 111.998 371.186 79.1888 347.363C46.3794 323.54 21.9542 289.941 9.41381 251.383L192 192L374.62 251.28Z" fill="#5CBC8E" stroke="white" stroke-width="8" mask="url(#path-3-inside-3_0_1)"></path>
</svg>    </div>

    {/* <!-- legend --> */}
    <p className="text-sm font-semibold text-gray-600 uppercase lg:hidden">Legend</p>
    
    {/* <!-- portfolio seed --> */}
    <div id="portfolioSeed" className="flex flex-shrink-0 gap-4 lg:max-w-[17rem] lg:mr-3 lg:absolute lg:text-right lg:right-full lg:w-full lg:top-10 portfolio-detail__item">
        <div className="w-4 h-4 mt-1.5 lg:hidden border border-white bg-emerald-300"></div>
        <div className="block w-full">
            <div className="space-y-0">
                <p className="mt-0 text-xl font-semibold">Seed Stage (30%)</p>
                <p className="text-lg">$50K Check Size</p>
                <p className="text-lg">60 Companies</p>
            </div>
            <p>$3M</p>
        </div>
    </div>
    
    {/* <!-- portfolio reserve --> */}
    <div id="portfolioReserve" className="flex flex-shrink-0 gap-4 lg:max-w-[17rem] lg:absolute lg:ml-3 lg:left-full lg:top-10 lg:w-full portfolio-detail__item">
        <div className="w-4 h-4 mt-1.5 lg:hidden border border-white bg-indigo-700"></div>
        <div className="block w-full">
            <div className="space-y-0">
                <p className="mt-0 text-xl font-semibold">Reserve Capital (30%)</p>
                <p className="text-lg">Follow on investments ($250K-$500K) to double down on 6 - 12 winners</p>
            </div>
            <p>$3M</p>
        </div>
    </div>

    {/* <!-- portfolio stage --> */}
    <div id="portfolioStage" className="flex flex-shrink-0 gap-4 lg:px-10 portfolio-detail__item">
        <div className="w-4 h-4 mt-1.5 lg:hidden border border-white bg-emerald-600"></div>
        <div className="block w-full lg:w-auto lg:mx-auto">
            <div className="space-y-0">
                <p className="text-xl font-semibold">Early Stage (40%)</p>
                <p className="text-lg">$100K Check Size</p>
                <p className="text-lg">40 Companies</p>
            </div>
            <p>$4M</p>
        </div>
    </div>
</div>            </section>
  )
}

export default Portoflio