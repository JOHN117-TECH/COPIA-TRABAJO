const colorClasses = [
  "border-(--input-border-default)",
  "focus:border-(--input-border-active)",
  "text-(--input-text-default)",
];

export const textButtonClass: string = "text-(--gray-30) text-sm mb-0";
export const textButtonClassHeader: string = "text-(--fg-header) text-sm mb-0";
export const spgLinkClass: string = "flex items-center px-3 py-2";
export const iconChevronDown: string = "text-(--gray-60) icon-chevron-down text-xl ml-1 relative inline-block top-[-1px] group-[.is-opened]:rotate-180 group-[.is-opened]:top-[-2px]";
export const iconChevronDownHeader: string = "text-(--fg-header) icon-chevron-down text-xl ml-1 relative inline-block top-[-1px] group-[.is-opened]:rotate-180 group-[.is-opened]:top-[-2px]";

const selectWrapperClasses = ["relative", "w-fit", "rounded-[6px]", "shadow"];

const selectButtonClasses = [
  "px-[12px]",
  "py-[7px]",
  "text-normal",
  "bg-white",
  "font-normal",
  "text-(--select-default-text)",
  "min-w-10",
  "rounded-[6px]",
  "border",
  "border-(--select-default-border)",
  "focus:border-(--select-active-border)",
  "active:border-(--select-active-border)",
];

const selectDropdownListClasses = [
  "min-w-[200px]",
  "w-fit",
  "overflow-y-scroll",
  "h-28",
  "top-11",
  "absolute",
  "left-0",
  "w-full",
  "bg-white",
  "border",
  "border-slate-200",
  "rounded-md",
  "shadow-lg",
  "z-10",
];

const selectDropdownItemClasses = [
  "px-4",
  "py-2",
  "text-slate-600",
  "hover:bg-slate-50",
  "text-sm",
  "cursor-pointer",
];

export const selectDefaultClasses = {
  color: colorClasses.join(" "),
  button: selectButtonClasses.join(" "),
  wrapper: selectWrapperClasses.join(" "),
  dropdownList: selectDropdownListClasses.join(" "),
  dropdownItem: selectDropdownItemClasses.join(" "),
};
export const SLIDES_BANNER_ABOUT_US = [
  {
    type: "image",
    src: "https://proquinal-my.sharepoint.com/:i:/g/personal/vivian_garzon_spradling_group/ERLixgkX6IhMq_rs38dI6zoBz7AqGCK3ie6aMerto8oang?e=b9wlzh",
    title: "AboutUs.WeAreSpradling.bannerTitle",
    description: "AboutUs.WeAreSpradling.bannerDesc",
  },
  {
    type: "image",
    src: "/weAreSpradling/weAreSpradling-2.jpg",
    title: "AboutUs.WeAreSpradling.bannerTitle",
    description: "AboutUs.WeAreSpradling.bannerDesc",
  },
  {
    type: "image",
    src: "/weAreSpradling/weAreSpradling-3.jpg",
    title: "AboutUs.WeAreSpradling.bannerTitle",
    description: "AboutUs.WeAreSpradling.bannerDesc",
  },
];

export const sustainability = {
  "Materials and product lifecycle": [
    "Raw materials extraction/production",
    "Raw materials used related to health",
    "Raw materials used related to the environment",
    "Raw materials consumption management",
    "Design of product sustainability and life cycle management",
    "Product life cycle",
    "Durability and quality of the product: 'fit for use'",
    "Product safety (VOCs) - Internal air quality",
    "Waste generation at the end of service life",
    "Product packaging"
  ],
  "Climate impact": [
    "Emissions from the transportation of raw materials and finished products",
    "Energy management",
    "Water and wastewater management",
    "Greenhouse gas emissions",
    "Waste management and recovery",
    "Impacts on biodiversity"
  ],
  "People and community": [
    "Health and safety",
    "Work practices (positive value for employees)",
    "Employee commitment and inclusion",
    "Impact on communities"
  ],
  "Corporate responsibility": [
    "Cargo safety (spills, fires, illegal activities)",
    "Compliance with standards and certifications",
    "Product sales and labeling practices",
    "Business ethics",
    "Competitive behavior"
  ]
};

export const INFO_CARDS = [
  {
    type: "image",
    src: "/banner1.png",
    title: "Environmental impact",
    description: "Learn more about our dedication to minimize ecological footprint through sustainable product innovation and responsible production processes.",
    buttonText: "Explore iniciatives",
    buttonLink: "/sustainability/environmental-impact",
  },
  {
    type: "image",
    src: "/banner2.png",
    title: "Social impact",
    description: "Learn more about our commitment to social impact. Empowering communities and improving lives through our iniciatives.",
    buttonText: "Explore iniciatives",
    buttonLink: "/sustainability/social-impact",
  }
];

export const ECOSENSE_CARDS = [
  {
    type: "image",
    src: "/banner1.png",
    title: "Valencia® Biosense",
    description: "Incorporating sophistication and sustainability, its natural leather appearance remains, even after years of use and requires minimal maintenance.",
  },
  {
    type: "image",
    src: "/banner2.png",
    title: "Masiala",
    description: "This collection assures durability and safety, contributing a product that is safer and more respectful for the environment.",
  }
];

export const TABS = [
  {
    title: "Process certifications",
    description: "Learn more about our commitment to efficient, responsible, and high-quality manufacturing.",
    src: "/banner1.png",
    content: [
      {
        title: "ISO 50001",
        description: "Enhancing our commitment to superior energy management, this certification promotes efficient, sustainable energy practices across our operations.",
        src: "/banner1.png",
        urls: "https://www.aenor.com/certificacion/certificacion-iso-50001"
      },
      {
        title: "ISO 14001",
        description: "Strengthening our environmental consciousness, this international standard validates our focused efforts to reduce ecological impact.",
        src: "/banner2.png",
        urls: "https://www.aenor.com/certificacion/certificacion-iso-14001"
      },
      {
        title: "ISO 45001",
        description: "Safeguarding employee wellbeing, this global standard verifies our pledge to maintain a safe and optimal working environment for all.",
        src: "/banner1.png",
        urls: "https://www.aenor.com/certificacion/certificacion-iso-45001"
      },
      {
        title: "Carbon Neutral",
        description: "We support clean energy initiatives, unconventional energy programs, and reforestation projects to protect fauna and flora.",
        src: "/banner2.png",
        urls: "https://www.carbontrust.com/what-we-do/liderazgo-de-pensamiento/publicaciones/carbon-neutral-certification"
      },
    ],
  },
  {
    title: "Compliances",
    description: "Learn about our compliance with industry standards and legal obligations, a commitment to meeting regulatory requirements.",
    src: "/banner2.png",
    content: [
      {
        title: "REACH",
        description: "We ensure compliance with EU chemical safety regulations, demonstrating the safe handling and usage of chemicals in our products.",
        src: "/banner1.png",
        urls: "https://echa.europa.eu/regulations/reach/understanding-reach"
      },
      {
        title: "ROHS",
        description: "Our commitment to consumer safety underlines our adherence to regulations limiting hazardous substances.",
        src: "/banner2.png",
        urls: "https://www.rohsguide.com/"
      },
      {
        title: "PROP 65",
        description: "Adhering to California’s safety regulations, for chemical transparency, we provide clear warnings about exposures to chemicals in our products.",
        src: "/banner1.png",
        urls: "https://oehha.ca.gov/proposition-65"
      },
    ],
  },
  {
    title: "Product certifications",
    description: "Certifying our performance: discover our product certifications for quality you can trust.",
    src: "/banner1.png",
    content: [
      {
        title: "Greenguard",
        description: "Our products contribute to healthier indoor environments, meeting stringent indoor air quality requirements.",
        src: "/banner2.png",
        urls: "https://www.ul.com/resources/greenguard-certification-program"
      },
      {
        title: "Indoor Air Quality",
        description: "Complying with rigorous air quality criteria, ensuring a healthier indoor environment.",
        src: "/banner1.png",
        urls: "https://www.epa.gov/indoor-air-quality-iaq"
      },
      {
        title: "Global Recycled Standard",
        description: "Showcasing our products' recycled content, this certification highlights our environmental responsibility.",
        src: "/banner2.png",
        urls: "https://textileexchange.org/standards/recycled-content-standards/global-recycled-standard/"
      },
      {
        title: "FSC",
        description: "This ensures our materials come from responsibly managed forests, supporting conservation and communities.",
        src: "/banner1.png",
        urls: "https://fsc.org/en"
      },
    ],
  },
  {
    title: "Manufacturing processes",
    description: "Sustainable by design: Learn how we manufacture for quality while committing to sustainable processes.",
    src: "/banner2.png",
    content: [
      {
        title: "BASC / Business Alliance for Secure Commerce",
        description: "We demonstrate our dedication to secure international trade practices, while building legitimate trade relationships.",
        src: "/banner1.png",
        urls: "https://www.basc.org/"
      },
      {
        title: "MED / Marine Equipment Directive",
        description: "Our commitment to essential safety, standards for marine equipment guarantee their safe operation for all parts of our maritime applications.",
        src: "/banner2.png",
        urls: "https://ec.europa.eu/growth/sectors/maritime-industry/marine-equipment-directive_en"
      },
      {
        title: "AEO / Authorized Economic Operator",
        description: "Our Customs’ facility demonstrates our commitment to secure international trade and customs compliance, ensuring smoother procedures.",
        src: "/banner1.png",
        urls: "https://taxation-customs.ec.europa.eu/customs-4/customs-security/authorised-economic-operator-aeo_en"
      },
      {
        title: "IATF 16949",
        description: "This certification solidifies our dedication to high-quality production for the automotive industry standards.",
        src: "/banner2.png",
        urls: "https://iatfglobaloversight.org/"
      },
      {
        title: "ISO 9001",
        description: "We verify our quality management and customer satisfaction, by adhering to regulations for leading customer requirements and operational excellence.",
        src: "/banner1.png",
        urls: "https://www.iso.org/iso-9001-quality-management.html"
      },
      {
        title: "UCA",
        description: "The UCA Certification ensures that products meet the necessary standards for their commercialization in the Spanish market.",
        src: "/banner2.png",
        urls: "https://www.uca.es/"
      },
    ],
  },
  {
    title: "Certifications we contribute to",
    description: "We contribute to building a better world: learn about the certifications we support, promoting sustainable building practices.",
    src: "/banner1.png",
    content: [
      {
        title: "LEED",
        description: "Strengthening our commitment to superior energy management, this certification promotes efficient, sustainable energy practices across our operations.",
        src: "/banner2.png",
        urls: "https://www.usgbc.org/leed"
      },
      {
        title: "WELL",
        description: "Our dedication to sustainable building practices improves human health and wellbeing.",
        src: "/banner1.png",
        urls: "https://www.wellcertified.com/"
      },
    ],
  },
];

export const categories = [
  {
    name: "Light Vehicles",
    subcategories: ["ATV", "Golf cars", "Snow mobile", "PWC"],
    content: {
      ATV: {
        title: "ATV",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Aliquam sit nullam neque. Elit mattis sit phasellus mollis sit aliquam.",
        image: "/banner1.png",
        buttonText: "Discover products",
      },
      "Golf cars": {
        title: "Golf cars",
        description: "Golf cars are electric vehicles designed to carry golfers and their equipment.",
        image: "/banner1.png",
        buttonText: "Explore",
      },
      "Snow mobile": {
        title: "Snow mobile",
        description: "Snow mobiles are used for winter travel and recreation on snow.",
        image: "/banner1.png",
        buttonText: "Learn more",
      },
      PWC: {
        title: "PWC",
        description: "Personal watercraft (PWC) are fun and fast water vehicles.",
        image: "/banner1.png",
        buttonText: "Check out",
      },
    },
  },
  {
    name: "Trucks",
    subcategories: ["Heavy", "Light", "Utility"],
    content: {
      Heavy: {
        title: "Heavy Trucks",
        description: "Heavy trucks are designed for transporting large loads over long distances.",
        image: "/banner1.png",
        buttonText: "See more",
      },
      Light: {
        title: "Light Trucks",
        description: "Light trucks are ideal for local transportation and delivery services.",
        image: "/banner1.png",
        buttonText: "See more",
      },
      Utility: {
        title: "Utility Trucks",
        description: "Utility trucks are specialized for tasks like electrical line maintenance.",
        image: "/banner1.png",
        buttonText: "See more",
      },
    },
  },
  {
    name: "RV",
    subcategories: ["Heavy", "Light", "Utility"],
    content: {
      Heavy: {
        title: "Heavy Trucks",
        description: "Heavy trucks are designed for transporting large loads over long distances.",
        image: "/banner1.png",
        buttonText: "See more",
      },
      Light: {
        title: "Light Trucks",
        description: "Light trucks are ideal for local transportation and delivery services.",
        image: "/banner1.png",
        buttonText: "See more",
      },
      Utility: {
        title: "Utility Trucks",
        description: "Utility trucks are specialized for tasks like electrical line maintenance.",
        image: "/banner1.png",
        buttonText: "See more",
      },
    },
  },
  {
    name: "Powersports",
    subcategories: ["Heavy", "Light", "Utility"],
    content: {
      Heavy: {
        title: "Heavy Trucks",
        description: "Heavy trucks are designed for transporting large loads over long distances.",
        image: "/banner1.png",
        buttonText: "See more",
      },
      Light: {
        title: "Light Trucks",
        description: "Light trucks are ideal for local transportation and delivery services.",
        image: "/banner1.png",
        buttonText: "See more",
      },
      Utility: {
        title: "Utility Trucks",
        description: "Utility trucks are specialized for tasks like electrical line maintenance.",
        image: "/banner1.png",
        buttonText: "See more",
      },
    },
  },
  {
    name: "Motorcycles",
    subcategories: ["Heavy", "Light", "Utility"],
    content: {
      Heavy: {
        title: "Heavy Trucks",
        description: "Heavy trucks are designed for transporting large loads over long distances.",
        image: "/banner1.png",
        buttonText: "See more",
      },
      Light: {
        title: "Light Trucks",
        description: "Light trucks are ideal for local transportation and delivery services.",
        image: "/banner1.png",
        buttonText: "See more",
      },
      Utility: {
        title: "Utility Trucks",
        description: "Utility trucks are specialized for tasks like electrical line maintenance.",
        image: "/banner1.png",
        buttonText: "See more",
      },
    },
  },
  {
    name: "Mass Transportation",
    subcategories: ["Heavy", "Light", "Utility"],
    content: {
      Heavy: {
        title: "Heavy Trucks",
        description: "Heavy trucks are designed for transporting large loads over long distances.",
        image: "/banner1.png",
        buttonText: "See more",
      },
      Light: {
        title: "Light Trucks",
        description: "Light trucks are ideal for local transportation and delivery services.",
        image: "/banner1.png",
        buttonText: "See more",
      },
      Utility: {
        title: "Utility Trucks",
        description: "Utility trucks are specialized for tasks like electrical line maintenance.",
        image: "/banner1.png",
        buttonText: "See more",
      },
    },
  },
  {
    name: "Light Comercial Vehicles",
    subcategories: ["Heavy", "Light", "Utility"],
    content: {
      Heavy: {
        title: "Heavy Trucks",
        description: "Heavy trucks are designed for transporting large loads over long distances.",
        image: "/banner1.png",
        buttonText: "See more",
      },
      Light: {
        title: "Light Trucks",
        description: "Light trucks are ideal for local transportation and delivery services.",
        image: "/banner1.png",
        buttonText: "See more",
      },
      Utility: {
        title: "Utility Trucks",
        description: "Utility trucks are specialized for tasks like electrical line maintenance.",
        image: "/banner1.png",
        buttonText: "See more",
      },
    },
  },
  {
    name: "Industrial Vehicles",
    subcategories: ["Heavy", "Light", "Utility"],
    content: {
      Heavy: {
        title: "Heavy Trucks",
        description: "Heavy trucks are designed for transporting large loads over long distances.",
        image: "/banner1.png",
        buttonText: "See more",
      },
      Light: {
        title: "Light Trucks",
        description: "Light trucks are ideal for local transportation and delivery services.",
        image: "/banner1.png",
        buttonText: "See more",
      },
      Utility: {
        title: "Utility Trucks",
        description: "Utility trucks are specialized for tasks like electrical line maintenance.",
        image: "/banner1.png",
        buttonText: "See more",
      },
    },
  },
];

export const projects = [
  {
    id: 1,
    title: "Winter’s Spring: An Ältere Garten, for Leslie Iwai",
    location: "Hospitality / Hotel / Cancún, México",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/banner1.png",
    href: "#",
  },
  {
    id: 2,
    title: "Project name",
    location: "Market / Submarket / Location",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/banner2.png",
    href: "#",
  },
];

export const PURPOSEFUL_CARDS = [
  {
    imageThumbMedium: "/banner1.png",
    title: "Socio-economic value",
    description: "We are deeply committed to improving the quality of life for our employees and their families.",
  },
  {
    imageThumbMedium: "/banner2.png",  
    title: "Occupational health and safety",
    description: "Implementing practices that improve their quality of life and that enhance the workplace environment.",
  },
  {
    imageThumbMedium: "/banner1.png",
    title: "Training and development",
    description: "Providing all possible tools to drive growth through leadership and skills, for all roles and regions.",
  },
  {
    imageThumbMedium: "/banner2.png",  
    title: "Shared value",
    description: "Actively participating in volunteer work and supporting vulnerable communities through collaboration and donations.",
  },
  {
    imageThumbMedium: "/banner1.png",
    title: "Socio-economic value",
    description: "We are deeply committed to improving the quality of life for our employees and their families.",
  },
  {
    imageThumbMedium: "/banner2.png",  
    title: "Occupational health and safety",
    description: "Implementing practices that improve their quality of life and that enhance the workplace environment.",
  },
  {
    imageThumbMedium: "/banner1.png",
    title: "Training and development",
    description: "Providing all possible tools to drive growth through leadership and skills, for all roles and regions.",
  },
  {
    imageThumbMedium: "/banner2.png",  
    title: "Shared value",
    description: "Actively participating in volunteer work and supporting vulnerable communities through collaboration and donations.",
  },
];

export const TESTIMONIAL_CARDS = [
  {
    type: "image",
    src: "/banner1.png",
    title: "Olga Mojica, Industrial Chemist and Digital Design Technician",
    description: "Like many Spradling® Group employees, Olga benefited from our Housing Plan. She used her incentive to renovate her apartment, adding closets, doors, and a built-in kitchen.",
  },
  {
    type: "image",
    src: "/banner2.png",
    title: "",
    description: "“When I received the news, tears of happiness began to run down my cheeks, not only for myself, but also for my daughter. Our dream was to finish fixing up the apartment, and achieving it in such a short time is a blessing from God”",
  }
];
        
export const EnvironmentalImpact = {
  "Bio-attribution for the planet": [
    "We craft over 50% of our polymer using non-consumable, bio-attributed components from forestry, reducing fossil fuel dependence and ensuring no impact on human food supplies."
  ],
  "Giving new life to plastics": [
    "100% recycled backing made from PET* bottles.",
    "Our Hi-Loft²™️ RPET Backing is made from 100% recycled PET* bottles, diverting them from landfills. Each roll reduces CO2 emissions by 12.5 kg and eliminates 6.2 kg of landfill waste.",
    "*Polyethylene terephthalate"
  ]
};

export const SERVICES = {
  lamination:  {
    title: "Lamination.title",
    description: "Lamination.description",
    description2: "Lamination.description2",
    src: 'https://youtu.be/B4h_Oio4Ar8',
    image: "https://static.spradling.group/thumbs/uploads/services/1680x756/lamination.png",
    howIsMadeDesc: "Lamination.howIsMadeDesc",
    howIsMadeImage: "https://static.spradling.group/thumbs/uploads/services/1680x756/lamination.png",
    benefits: {
      edges: [
        {
          node: {
            title: "Acoustic quality",
            description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            image: "/banner1.png",
          },
        },
        {
          node: {
            title: "Acoustic quality",
            description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            image: "/banner2.png",
          },
        },
        {
          node: {
            title: "Acoustic quality",
            description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            image: "/banner1.png",
          },
        },
      ]
    },
    patternLibrary: "https://static.spradling.group/uploads/documents/164/file/Code_Of_Ethics-2.pdf"
  }
}

export const WAS_WHAT_WE_ARE = [
  {
    image: "/banner1.png",
    description: "card1",
  },
  {
    image: "/banner2.png",
    description: "card2",
  },
  {
    image: "/banner1.png",
    description: "card3",
  },
  {
    image: "/banner2.png",
    description: "card4",
  },
  {
    image: "/banner1.png",
    description: "card5",
  },
  {
    image: "/banner2.png",
    description: "card6",
  },
  {
    image: "/banner1.png",
    description: "card7",
  },
  {
    image: "/banner2.png",
    description: "card8",
  },
  {
    image: "/banner1.png",
    description: "card9",
  }
]

export const WAS_OUR_ESCENSE = [
  {
    type: 'video',
    videoType: 'youtube',
    src: 'https://youtu.be/B4h_Oio4Ar8'
  }
]

export const WCS_BANNER = [
  {
    type: 'video',
    videoType: 'youtube',
    src: 'https://youtu.be/B4h_Oio4Ar8',
    title: "AboutUs.WhyChooseSpradling.chooseSpradling",
  },
  {
    type: "image",
    src: "/weAreSpradling/weAreSpradling-1.jpg",
    title: "AboutUs.WhyChooseSpradling.chooseSpradling",
  },
   {
    type: 'video',
    videoType: 'youtube',
    src: 'https://youtu.be/B4h_Oio4Ar8',
    title: "AboutUs.WhyChooseSpradling.chooseSpradling",
  },
  {
    type: "image",
    src: "/weAreSpradling/weAreSpradling-3.jpg",
    title: "AboutUs.WhyChooseSpradling.chooseSpradling",
  },
]

export const TIMELINE = [
  {
    year: 1959,
    image: '/banner1.png',
    title: "SpradlingTimeline.timelineTitle1",
    summary: "SpradlingTimeline.timelineSummary1",
  },
  {
    year: 1981,
    image: '/banner1.png',
    title: "SpradlingTimeline.timelineTitle2",
    summary: "SpradlingTimeline.timelineSummary2",
  },
  {
    year: 1986,
    image: '/banner1.png',
    title: "SpradlingTimeline.timelineTitle3",
    summary: "SpradlingTimeline.timelineSummary3"
  },
  {
    year: 1997,
    image: '/banner1.png',
    title: "SpradlingTimeline.timelineTitle4",
    summary: "SpradlingTimeline.timelineSummary4",
  },
  {
    year: 2004,
    image: '/banner1.png',
    title: "SpradlingTimeline.timelineTitle5",
    summary: "SpradlingTimeline.timelineSummary5",
  },
  {
    year: 2004,
    image: '/banner1.png',
    title: "SpradlingTimeline.timelineTitle6",
    summary: "SpradlingTimeline.timelineSummary6",
  },
  {
    year: 2009,
    image: '/banner1.png',
    title: "SpradlingTimeline.timelineTitle7",
    summary: "SpradlingTimeline.timelineSummary7",
  },
  {
    year: 2009,
    image: '/banner1.png',
    title: "SpradlingTimeline.timelineTitle8",
    summary: "SpradlingTimeline.timelineSummary8",
  },
  {
    year: 2009,
    image: '/banner1.png',
    title: "SpradlingTimeline.timelineTitle9",
    summary: "SpradlingTimeline.timelineSummary9",
  },
  {
    year: 2010,
    image: '/banner1.png',
    title: "SpradlingTimeline.timeline2010_1",
    summary: "SpradlingTimeline.timelineSummary2010_1",
  },
  {
    year: 2014,
    image: '/banner1.png',
    title: "SpradlingTimeline.timelineTitle10",
    summary: "SpradlingTimeline.timelineSummary10",
  },
  {
    year: 2014,
    image: '/banner1.png',
    title: "SpradlingTimeline.timeline2014_2",
    summary: "SpradlingTimeline.timelineSummary2014_2",
  },
  {
    year: 2016,
    image: '/banner1.png',
    title: "SpradlingTimeline.timelineTitle11",
    summary: "SpradlingTimeline.timelineSummary11",
  },
  {
    year: 2018,
    image: '/banner1.png',
    title: "SpradlingTimeline.timeline2018_1",
    summary: "SpradlingTimeline.timelineSummary2018_1",
  },
  {
    year: 2019,
    image: '/banner1.png',
    title: "SpradlingTimeline.timelineTitle12",
    summary: "SpradlingTimeline.timelineSummary12",
  },
  {
    year: 2019,
    image: '/banner1.png',
    title: "SpradlingTimeline.timelineTitle2019_2",
    summary: "SpradlingTimeline.timelineSummary2019_2",
  },
  {
    year: 2020,
    image: '/banner1.png',
    title: "SpradlingTimeline.timelineTitle2020_1",
    summary: "SpradlingTimeline.timelineSummary2020_1",
  },
  {
    year: 2020,
    image: '/banner1.png',
    title: "SpradlingTimeline.timelineTitle2020_2",
    summary: "SpradlingTimeline.timelineSummary2020_2",
  },
  {
    year: 2021,
    image: '/banner1.png',
    title: "SpradlingTimeline.timelineTitle2021_1",
    summary: "SpradlingTimeline.timelineSummary2021_1",
  },
  {
    year: 2022,
    image: '/banner1.png',
    title: "SpradlingTimeline.timelineTitle2022_1",
    summary: "SpradlingTimeline.timelineSummary2022_1",
  },
  {
    year: 2022,
    image: '/banner1.png',
    title: "SpradlingTimeline.timelineTitle2022_2",
    summary: "SpradlingTimeline.timelineSummary2022_2",
  },
  {
    year: 2022,
    image: '/banner1.png',
    title: "SpradlingTimeline.timelineTitle2022_3",
    summary: "SpradlingTimeline.timelineSummary2022_3"
  },
  {
    year: 2023,
    image: '/banner1.png',
    title: "SpradlingTimeline.timelineTitle2023_1",
    summary: "SpradlingTimeline.timelineSummary2023_1",
  },
  // {
  //   year: 2023,
  //   image: '/banner1.png',
  //   title: "SpradlingTimeline.timelineTitle2023_2",
  //   summary: "SpradlingTimeline.timelineSummary2023_2",
  // },
  {
    year: 2024,
    image: '/banner1.png',
    title: "SpradlingTimeline.timelineTitle2024_1",
    summary: "SpradlingTimeline.timelineSummary2024_1",
  },
  {
    year: 2024,
    image: '/banner1.png',
    title: "SpradlingTimeline.timelineTitle2024_2",
    summary: "SpradlingTimeline.timelineSummary2024_2",
  },
];

export const WAS_LEADING = [
  {
    link: "https://static.spradling.group/uploads/documents/164/file/Code_Of_Ethics-2.pdf",
    buttonText: "qualityPolicy",
  },
  {
    link: "https://static.spradling.group/uploads/documents/164/file/Code_Of_Ethics-2.pdf",
    buttonText: "antiCorruptionPolicy",
  },
  {
    link: "https://static.spradling.group/uploads/documents/164/file/Code_Of_Ethics-2.pdf",
    buttonText: "managementPolicy",
  },
  {
    link: "https://static.spradling.group/uploads/documents/164/file/Code_Of_Ethics-2.pdf",
    buttonText: "environmentalPolicy",
  }
];

export const WCS_WHY_CHOOSE_US = [
  {
    type: "image",
    src: "/banner1.png",
    title: "cardDesignTitle",
    description: "cardDesignDesc",
    buttonText: "learnMore",
    buttonLink: "/sustainability/environmental-impact",
  },
  {
    type: "image",
    src: "/banner2.png",
    title: "cardMaterialTitle",
    description: "cardMaterialDesc",
    buttonText: "learnMore",
    buttonLink: "/sustainability/social-impact",
  }
];

export const WCS_CARDS_PERSPECTIVE = [
  {
    image: "https://s3-us-west-2.amazonaws.com/spradling-misc/images-for-django-fixtures/why-choose-us/design-1.jpg",
    title: "hasNoLimits",
    description: "hasNoLimitsDesc",
  },
  {
    image: "https://s3-us-west-2.amazonaws.com/spradling-misc/images-for-django-fixtures/why-choose-us/design-2.jpg",
    title: "crossBorders",
    description: "crossBordersDesc",
  },
  {
    image: "https://s3-us-west-2.amazonaws.com/spradling-misc/images-for-django-fixtures/why-choose-us/design-3.jpg",
    title: "sourcesOfInpiration",
    description: "sourcesOfInpirationDesc",
  },
]

export const WCS_CARDS_COATED_FABRICS = [
  {
    image: "/banner2.png",
    title: "waterproof",
    description: "waterproofDesc",
  },
  {
    image: "https://s3-us-west-2.amazonaws.com/spradling-misc/images-for-django-fixtures/why-choose-us/design-1.jpg",
    title: "easyToClean",
    description: "easyToCleanDesc",
  },
  {
    image: "/banner2.png",
    title: "durability",
    description: "durabilityDesc",
  },
  {
    image: "/banner1.png",
    title: "stainResisistance",
    description: "stainResisistanceDesc",
  },
  {
    image: "/banner2.png",
    title: "competitivePrice",
    description: "competitivePriceDesc",
  },
  {
    image: "https://s3-us-west-2.amazonaws.com/spradling-misc/images-for-django-fixtures/why-choose-us/design-1.jpg",
    title: "highestQuality",
    description: "highestQualityDesc",
  },{
    image: "https://s3-us-west-2.amazonaws.com/spradling-misc/images-for-django-fixtures/why-choose-us/design-1.jpg",
    title: "innovativeLooks",
    description: "innovativeLooksDesc",
  },
  {
    image: "/banner1.png",
    title: "flameRetardancy",
    description: "flameRetardancyDesc",
  },
  {
    image: "/banner2.png",
    title: "ecoFriendly",
    description: "ecoFriendlyDesc",
  },
]

export const WCS_AROUND_THE_WORLD = [
  {
    title: "usa",
    buttonLink: "https://spradling.group/en-us",
  },
  {
    title: "europe",
    buttonLink: "https://spradling.group/en-eu",
  },
  {
    title: "mexico",
    buttonLink: "https://spradling.group/es-mx",
  },
  {
    title: "latam",
    buttonLink: "https://spradling.group/es-la",
  }
]

export const OPU_BANNER = [
  {
    type: 'video',
    videoType: 'youtube',
    src: 'https://youtu.be/B4h_Oio4Ar8',
    title: "AboutUs.OurProductionUnits.magicOfManufacturing",
  },
  {
    type: "image",
    src: "/weAreSpradling/weAreSpradling-1.jpg",
    title: "AboutUs.OurProductionUnits.magicOfManufacturing",
  },
   {
    type: 'video',
    videoType: 'youtube',
    src: 'https://youtu.be/B4h_Oio4Ar8',
    title: "AboutUs.OurProductionUnits.magicOfManufacturing",
  },
  {
    type: "image",
    src: "/weAreSpradling/weAreSpradling-3.jpg",
    title: "AboutUs.OurProductionUnits.magicOfManufacturing",
  },
]

export const OPU_INSPIRATION = [
  {
    type: "image",
    src: "/banner1.png",
    title: "colombiaPlant",
    subtitle: "colombiaPlantSubtitle",
    description: "colombiaPlantDesc",
    buttonText: "learnMore",
    buttonLink: "/sustainability/environmental-impact",
  },
  {
    type: "image",
    src: "/banner2.png",
    title: "costaRicaPlant",
    subtitle: "costaRicaPlantSubtitle",
    description: "costaRicaPlantDesc",
    buttonText: "learnMore",
    buttonLink: "/sustainability/social-impact",
  }
];

export const OPU_PURPOSE_TABS = {
  environment: [
    { key: "wasteOptimization", imageSrc: "https://spradling.group/static/media/resources-optimization-costa-rica.eaf71bc2.png" },
    { key: "energyEfficiency", imageSrc: "https://spradling.group/static/media/energetic-eficient-costa-rica.923fa9fe.png" },
    { key: "waterCare", imageSrc: "https://spradling.group/static/media/careful-water-master.88241b48.png" },
    { key: "carbonEmission", imageSrc: "https://spradling.group/static/media/reduction-emissions-master.e478457d.png" },
  ],
  innovation: [
    { key: "newCalender", imageSrc: "https://spradling.group/static/media/costa-rica-plant.e0eb3e4d.png" },
    { key: "cedi", imageSrc: "https://spradling.group/static/media/CEDI.c409bed0.png" },
  ],
};

export const BRANDS = {
  "permablok3-2": {
    title: "title",
    description: "description",
    subtitle: "subtitle",
    textSubtitle: "textSubtitle",
    src: 'https://youtu.be/B4h_Oio4Ar8',
    image: "https://static.spradling.group/thumbs/uploads/services/1680x756/lamination.png",
    howItWorksDesc: "howItWorksDesc",
    howItWorksImage: "https://static.spradling.group/thumbs/uploads/services/1680x756/lamination.png",
    patternsBrands: {
      "edges": [
                {
                  "node": {
                    "id": "UGF0dGVybk5vZGU6MTA5",
                    "name": "Hitch 32 Hl",
                    "imageThumbSmall": "https://static.stage.spradling.group/thumbs/uploads/patterns/669430/093656/image/500x500/hitch__0010_alloy.jpg",
                    "products": {
                      "edges": [
                        {
                          "node": {
                            "id": "UHJvZHVjdE5vZGU6NDc1Nw=="
                          }
                        },
                        {
                          "node": {
                            "id": "UHJvZHVjdE5vZGU6NDc1Ng=="
                          }
                        },
                        {
                          "node": {
                            "id": "UHJvZHVjdE5vZGU6MTA0Mw=="
                          }
                        },
                        {
                          "node": {
                            "id": "UHJvZHVjdE5vZGU6MzUzMw=="
                          }
                        },
                        {
                          "node": {
                            "id": "UHJvZHVjdE5vZGU6MzUzNA=="
                          }
                        },
                        {
                          "node": {
                            "id": "UHJvZHVjdE5vZGU6MzUzNQ=="
                          }
                        },
                        {
                          "node": {
                            "id": "UHJvZHVjdE5vZGU6MzUzNg=="
                          }
                        },
                        {
                          "node": {
                            "id": "UHJvZHVjdE5vZGU6MzUzNw=="
                          }
                        },
                        {
                          "node": {
                            "id": "UHJvZHVjdE5vZGU6MzUzOA=="
                          }
                        },
                        {
                          "node": {
                            "id": "UHJvZHVjdE5vZGU6MzUzOQ=="
                          }
                        },
                        {
                          "node": {
                            "id": "UHJvZHVjdE5vZGU6MzU0MA=="
                          }
                        },
                        {
                          "node": {
                            "id": "UHJvZHVjdE5vZGU6MzU0MQ=="
                          }
                        },
                        {
                          "node": {
                            "id": "UHJvZHVjdE5vZGU6NDc1OA=="
                          }
                        },
                        {
                          "node": {
                            "id": "UHJvZHVjdE5vZGU6MzU0Mg=="
                          }
                        },
                        {
                          "node": {
                            "id": "UHJvZHVjdE5vZGU6MzU0Mw=="
                          }
                        },
                        {
                          "node": {
                            "id": "UHJvZHVjdE5vZGU6MzU0NA=="
                          }
                        },
                        {
                          "node": {
                            "id": "UHJvZHVjdE5vZGU6MzU0NQ=="
                          }
                        },
                        {
                          "node": {
                            "id": "UHJvZHVjdE5vZGU6MzU0Ng=="
                          }
                        },
                        {
                          "node": {
                            "id": "UHJvZHVjdE5vZGU6NTM4MA=="
                          }
                        }
                      ]
                    }
                  }
                },
                {
                  "node": {
                    "id": "UGF0dGVybk5vZGU6MjIy",
                    "name": "Simtex Met",
                    "imageThumbSmall": "https://static.stage.spradling.group/thumbs/uploads/patterns/667956/087354/image/500x500/simtex__0012_carbon.jpg",
                    "products": {
                      "edges": [
                        {
                          "node": {
                            "id": "UHJvZHVjdE5vZGU6MjM2Mw=="
                          }
                        },
                        {
                          "node": {
                            "id": "UHJvZHVjdE5vZGU6NDE4NQ=="
                          }
                        },
                        {
                          "node": {
                            "id": "UHJvZHVjdE5vZGU6MjM1OQ=="
                          }
                        },
                        {
                          "node": {
                            "id": "UHJvZHVjdE5vZGU6MjM2MA=="
                          }
                        },
                        {
                          "node": {
                            "id": "UHJvZHVjdE5vZGU6MjU2Mw=="
                          }
                        },
                        {
                          "node": {
                            "id": "UHJvZHVjdE5vZGU6MjM2MQ=="
                          }
                        },
                        {
                          "node": {
                            "id": "UHJvZHVjdE5vZGU6MjM2Mg=="
                          }
                        },
                        {
                          "node": {
                            "id": "UHJvZHVjdE5vZGU6MjM2NA=="
                          }
                        },
                        {
                          "node": {
                            "id": "UHJvZHVjdE5vZGU6MjM2NQ=="
                          }
                        },
                        {
                          "node": {
                            "id": "UHJvZHVjdE5vZGU6NDE4Ng=="
                          }
                        },
                        {
                          "node": {
                            "id": "UHJvZHVjdE5vZGU6MjM2Ng=="
                          }
                        },
                        {
                          "node": {
                            "id": "UHJvZHVjdE5vZGU6MjM2Nw=="
                          }
                        },
                        {
                          "node": {
                            "id": "UHJvZHVjdE5vZGU6NDg1NQ=="
                          }
                        },
                        {
                          "node": {
                            "id": "UHJvZHVjdE5vZGU6MjM2OA=="
                          }
                        },
                        {
                          "node": {
                            "id": "UHJvZHVjdE5vZGU6MjM2OQ=="
                          }
                        },
                        {
                          "node": {
                            "id": "UHJvZHVjdE5vZGU6MjM3MA=="
                          }
                        },
                        {
                          "node": {
                            "id": "UHJvZHVjdE5vZGU6MjM3Mg=="
                          }
                        },
                        {
                          "node": {
                            "id": "UHJvZHVjdE5vZGU6MjM3Mw=="
                          }
                        },
                        {
                          "node": {
                            "id": "UHJvZHVjdE5vZGU6MjM3NA=="
                          }
                        },
                        {
                          "node": {
                            "id": "UHJvZHVjdE5vZGU6NDg1Ng=="
                          }
                        },
                        {
                          "node": {
                            "id": "UHJvZHVjdE5vZGU6NDg1Nw=="
                          }
                        },
                        {
                          "node": {
                            "id": "UHJvZHVjdE5vZGU6NDE4Nw=="
                          }
                        },
                        {
                          "node": {
                            "id": "UHJvZHVjdE5vZGU6MjM3NQ=="
                          }
                        },
                        {
                          "node": {
                            "id": "UHJvZHVjdE5vZGU6MjM3Ng=="
                          }
                        },
                        {
                          "node": {
                            "id": "UHJvZHVjdE5vZGU6MjM4NA=="
                          }
                        },
                        {
                          "node": {
                            "id": "UHJvZHVjdE5vZGU6MjM3Nw=="
                          }
                        },
                        {
                          "node": {
                            "id": "UHJvZHVjdE5vZGU6MjM3OA=="
                          }
                        },
                        {
                          "node": {
                            "id": "UHJvZHVjdE5vZGU6MjM3OQ=="
                          }
                        },
                        {
                          "node": {
                            "id": "UHJvZHVjdE5vZGU6MjM4MA=="
                          }
                        },
                        {
                          "node": {
                            "id": "UHJvZHVjdE5vZGU6MjM4MQ=="
                          }
                        },
                        {
                          "node": {
                            "id": "UHJvZHVjdE5vZGU6MjM4Mg=="
                          }
                        },
                        {
                          "node": {
                            "id": "UHJvZHVjdE5vZGU6MjM4Mw=="
                          }
                        },
                        {
                          "node": {
                            "id": "UHJvZHVjdE5vZGU6NDE4OA=="
                          }
                        },
                        {
                          "node": {
                            "id": "UHJvZHVjdE5vZGU6MjM4NQ=="
                          }
                        },
                        {
                          "node": {
                            "id": "UHJvZHVjdE5vZGU6MjM4Ng=="
                          }
                        },
                        {
                          "node": {
                            "id": "UHJvZHVjdE5vZGU6MjM4Nw=="
                          }
                        },
                        {
                          "node": {
                            "id": "UHJvZHVjdE5vZGU6MjM4OA=="
                          }
                        },
                        {
                          "node": {
                            "id": "UHJvZHVjdE5vZGU6MjM5MQ=="
                          }
                        },
                        {
                          "node": {
                            "id": "UHJvZHVjdE5vZGU6MjM4OQ=="
                          }
                        },
                        {
                          "node": {
                            "id": "UHJvZHVjdE5vZGU6MjM5MA=="
                          }
                        },
                        {
                          "node": {
                            "id": "UHJvZHVjdE5vZGU6MjM5Mg=="
                          }
                        },
                        {
                          "node": {
                            "id": "UHJvZHVjdE5vZGU6MjM5Mw=="
                          }
                        },
                        {
                          "node": {
                            "id": "UHJvZHVjdE5vZGU6MjM5NA=="
                          }
                        },
                        {
                          "node": {
                            "id": "UHJvZHVjdE5vZGU6MjM0OQ=="
                          }
                        },
                        {
                          "node": {
                            "id": "UHJvZHVjdE5vZGU6MjM5NQ=="
                          }
                        },
                        {
                          "node": {
                            "id": "UHJvZHVjdE5vZGU6MjM5Ng=="
                          }
                        },
                        {
                          "node": {
                            "id": "UHJvZHVjdE5vZGU6MjM1MQ=="
                          }
                        },
                        {
                          "node": {
                            "id": "UHJvZHVjdE5vZGU6MjM5Nw=="
                          }
                        },
                        {
                          "node": {
                            "id": "UHJvZHVjdE5vZGU6MjM5OA=="
                          }
                        },
                        {
                          "node": {
                            "id": "UHJvZHVjdE5vZGU6MjM5OQ=="
                          }
                        },
                        {
                          "node": {
                            "id": "UHJvZHVjdE5vZGU6MjQwMA=="
                          }
                        },
                        {
                          "node": {
                            "id": "UHJvZHVjdE5vZGU6NDE4OQ=="
                          }
                        },
                        {
                          "node": {
                            "id": "UHJvZHVjdE5vZGU6MjQwMQ=="
                          }
                        },
                        {
                          "node": {
                            "id": "UHJvZHVjdE5vZGU6MjQwMg=="
                          }
                        },
                        {
                          "node": {
                            "id": "UHJvZHVjdE5vZGU6MjQwMw=="
                          }
                        },
                        {
                          "node": {
                            "id": "UHJvZHVjdE5vZGU6MjQwNA=="
                          }
                        },
                        {
                          "node": {
                            "id": "UHJvZHVjdE5vZGU6NTM4MQ=="
                          }
                        },
                        {
                          "node": {
                            "id": "UHJvZHVjdE5vZGU6NDE5MA=="
                          }
                        }
                      ]
                    }
                  }
                }
              ]
    },
  }
};

export const LINKS_NOT_FOUND = [
  { label: "products", ButtonLink: "/products", ButtonText: "exploreCatalog" },
  { label: "sustainability", ButtonLink: "/sustainability", ButtonText: "readReport" },
  { label: "whereToBuy", ButtonLink: "/where-to-buy", ButtonText: "exploreLocations" },
];
export const LISTS = {
  "edges": [
    {
      "node": {
        "id": "UHJvZHVjdE5vZGU6MjM0NQ==",
        "name": "List #1",
        totalCount: 10,
        "patterns":{
          edges: [
            {
              node: {
                products:{
                  edges:{
                    node: {
                      imageThumbSmall: "/banner1.png"
                    }
                  }
                }
              }
            }
          ]
        },
        "products": {
            edges: [{
              node: {
                imageThumbSmall: "/banner1.png"
              }
            }]
        }
      }
    },
    {
      "node": {
        "id": "UHJvZHVjdE5vZGU6MjM0Ng==",
        "name": "List #2",
        totalCount: 20,
        "patterns":null,
        "products": {
            edges: [{
              node: {
                imageThumbSmall: "/banner2.png"
              }
            }]
        }
      }
    },
    {
      "node": {
        "id": "UHJvZHVjdE5vZGU6MjM0Nw==",
        "name": "List #3",
        totalCount: 30,
        "patterns":{
          edges: [
            {
              node: {
                products:{
                  edges:{
                    node: {
                      imageThumbSmall: "/banner1.png"
                    }
                  }
                }
              }
            }
          ]
        },
        "products": {
            edges: [{
              node: {
                imageThumbSmall: "/banner1.png"
              }
            }]
        }
      }
    },
    {
      "node": {
        "id": "UHJvZHVjdE5vZGU6MjM0OA==",
        "name": "List #4",
        totalCount: 40,
        "patterns":null,
        "products": {
            edges:[ {
              node: {
                imageThumbSmall: "https://spradling.group/static/media/resources-optimization-costa-rica.eaf71bc2.png"
              }
            }]
        }
      }
    },
  ]
}
