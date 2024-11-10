interface DropdownItem {
  name: string;
  path: string;
}

interface NavLink {
  name: string;
  path?: string;
  submenu?: boolean;
  sublinks?: DropdownItem[];
}

interface SidebarInvestorsLinks {
  label: string;
  path: string;
  imgURL: string;
}
interface SidebarStartupLinks {
  label: string;
  path: string;
  imgURL: string;
}

export const links: NavLink[] = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "For Investors",
    submenu: false,
    path: "/capital",
  },
  {
    name: "For Startups",
    path: "/startup",
    submenu: false,
  },
  {
    name: "Services",
    submenu: true,
    sublinks: [
      {
        name: "AI Startup Valuation",
        path: "/services/ai-powered-startup-valuation",
      },
      {
        name: "Blockchain Marketplace",
        path: "/services/blockchain-marketplace",
      },
      {
        name: "Market & Industry Analysis",
        path: "/services/market-industry-analysis",
      },
      {
        name: "Investor Portfolio Management",
        path: "/services/investor-portfolio-management",
      },
      {
        name: "Syndicate Funds",
        path: "/services/syndicate-funds",
      },
    ],
  },
  {
    name: "About Us",
    path: "/aboutUs",
    submenu: false,
  },
  // {
  //   name: "Login",
  //   path: "/auth/signin",
  //   submenu: false,
  // },
  // {
  //   name: "Sign Up",
  //   path: "/auth/signup",
  //   submenu: false,
  // },
];

export const SidebarInvestorsLinks = [
  {
    imgURL: "/icons/home.svg",
    path: "/portfolio/investments",
    label: "Investments",
  },
  {
    imgURL: "/icons/dollar-circle.svg",
    path: "/portfolio/following",
    label: "Following",
  },
  {
    imgURL: "/icons/transaction.svg",
    path: "/portfolio/analytics",
    label: "Analytics",
  },
  // {
  //   imgURL: "/icons/money-send.svg",
  //   path: "/portfolio/taxcenter",
  //   label: "Tax Center",
  // },
];
export const SidebarStartupLinks = [
  {
    imgURL: "/icons/home.svg",
    path: "\startup-portfolio\manual-valuation",
    label: "Manual valuation",
  },
  {
    imgURL: "/icons/dollar-circle.svg",
    path: "\startup-portfolio\ai-valuation",
    label: "Ai valuation",
  },
  // {
  //   imgURL: "/icons/transaction.svg",
  //   path: "/startup-portfolio/",
  //   label: "Analytics",
  // },
  // {
  //   imgURL: "/icons/money-send.svg",
  //   path: "/portfolio/taxcenter",
  //   label: "Tax Center",
  // },
];

// good_user / good_password - Bank of America
export const TEST_USER_ID = "6627ed3d00267aa6fa3e";

// custom_user -> Chase Bank
// export const TEST_ACCESS_TOKEN =
//   "access-sandbox-da44dac8-7d31-4f66-ab36-2238d63a3017";

// custom_user -> Chase Bank
export const TEST_ACCESS_TOKEN =
  "access-sandbox-229476cf-25bc-46d2-9ed5-fba9df7a5d63";

export const ITEMS = [
  {
    id: "6624c02e00367128945e", // appwrite item Id
    accessToken: "access-sandbox-83fd9200-0165-4ef8-afde-65744b9d1548",
    itemId: "VPMQJKG5vASvpX8B6JK3HmXkZlAyplhW3r9xm",
    userId: "6627ed3d00267aa6fa3e",
    accountId: "X7LMJkE5vnskJBxwPeXaUWDBxAyZXwi9DNEWJ",
  },
  {
    id: "6627f07b00348f242ea9", // appwrite item Id
    accessToken: "access-sandbox-74d49e15-fc3b-4d10-a5e7-be4ddae05b30",
    itemId: "Wv7P6vNXRXiMkoKWPzeZS9Zm5JGWdXulLRNBq",
    userId: "6627ed3d00267aa6fa3e",
    accountId: "x1GQb1lDrDHWX4BwkqQbI4qpQP1lL6tJ3VVo9",
  },
];

export const topCategoryStyles = {
  "Food and Drink": {
    bg: "bg-blue-25",
    circleBg: "bg-blue-100",
    text: {
      main: "text-blue-900",
      count: "text-blue-700",
    },
    progress: {
      bg: "bg-blue-100",
      indicator: "bg-blue-700",
    },
    icon: "/icons/monitor.svg",
  },
  Travel: {
    bg: "bg-success-25",
    circleBg: "bg-success-100",
    text: {
      main: "text-success-900",
      count: "text-success-700",
    },
    progress: {
      bg: "bg-success-100",
      indicator: "bg-success-700",
    },
    icon: "/icons/coins.svg",
  },
  default: {
    bg: "bg-pink-25",
    circleBg: "bg-pink-100",
    text: {
      main: "text-pink-900",
      count: "text-pink-700",
    },
    progress: {
      bg: "bg-pink-100",
      indicator: "bg-pink-700",
    },
    icon: "/icons/shopping-bag.svg",
  },
};

export const transactionCategoryStyles = {
  "Food and Drink": {
    borderColor: "border-pink-600",
    backgroundColor: "bg-pink-500",
    textColor: "text-pink-700",
    chipBackgroundColor: "bg-inherit",
  },
  Payment: {
    borderColor: "border-success-600",
    backgroundColor: "bg-green-600",
    textColor: "text-success-700",
    chipBackgroundColor: "bg-inherit",
  },
  "Bank Fees": {
    borderColor: "border-success-600",
    backgroundColor: "bg-green-600",
    textColor: "text-success-700",
    chipBackgroundColor: "bg-inherit",
  },
  Transfer: {
    borderColor: "border-red-700",
    backgroundColor: "bg-red-700",
    textColor: "text-red-700",
    chipBackgroundColor: "bg-inherit",
  },
  Processing: {
    borderColor: "border-[#F2F4F7]",
    backgroundColor: "bg-gray-500",
    textColor: "text-[#344054]",
    chipBackgroundColor: "bg-[#F2F4F7]",
  },
  Success: {
    borderColor: "border-[#12B76A]",
    backgroundColor: "bg-[#12B76A]",
    textColor: "text-[#027A48]",
    chipBackgroundColor: "bg-[#ECFDF3]",
  },
  default: {
    borderColor: "",
    backgroundColor: "bg-blue-500",
    textColor: "text-blue-700",
    chipBackgroundColor: "bg-inherit",
  },
};

export const servicesData = [
  {
    id: 1,
    title: "Valuation software",
    description:
      "Get precise and data-driven valuations for startups using AI technology.",
    details:
      "Our AI-driven valuation tool analyzes multiple data points and provides an objective valuation, empowering investors with deep insights into startup worth and potential.",
    link: "/services/ai-powered-startup-valuation",
  },
  {
    id: 2,
    title: "Blockchain Marketplace",
    description:
      "A secure platform to connect investors and startups via blockchain.",
    details:
      "Utilize blockchain technology for secure, transparent, and efficient transactions. Our marketplace is designed to foster trust and streamline the process of funding innovative startups.",
    link: "/services/blockchain-marketplace",
  },
  {
    id: 3,
    title: "Market & Industry Analysis",
    description:
      "Comprehensive analysis to guide investment decisions with confidence.",
    details:
      "Gain access to detailed market trends, industry growth data, and competitive insights tailored to help investors and startups make informed, strategic decisions.",
    link: "/services/market-industry-analysis",
  },
  {
    id: 4,
    title: "Investor Portfolio Management",
    description:
      "Optimize your portfolio with insights and performance tracking.",
    details:
      "A complete solution for tracking investment portfolios, providing real-time analytics, risk assessment, and tailored recommendations to maximize returns and reduce risks.",
    link: "/services/investor-portfolio-management",
  },
  {
    id: 5,
    title: "Syndicate Funds",
    description:
      "Join forces with other investors in structured syndicate funds.",
    details:
      "Our syndicate funds service allows investors to pool resources and collectively invest in high-potential startups, sharing risks and rewards for better investment outcomes.",
    link: "/services/syndicate-funds",
  },
];
