import Backing from "./tabs/Backing";
import General from "./tabs/General";
import AdditionalTest from "./tabs/AdditionalTest";
import FlameRetardancy from "./tabs/FlameRetardancy";
import OtherAttributes from "./tabs/OtherAttributes";
import ApprovedCleaners from "./tabs/ApprovedCleaners";
import { PatternNode } from "@/graphql/generated/types";
import SustainableProfile from "./tabs/SustainableProfile";
import TermsAndConditions from "./tabs/TermsAndConditions";

export const buildSpecifications = (product: PatternNode) => ([
    { 
      title: 'Specifications.general',
      data: <General product={product!} /> ,
      hasData: product.specsSheetData.general
    },
    { 
      title: 'Specifications.sustainableProfile',
      data: <SustainableProfile product={product!} /> ,
      hasData: product.sustainability
    },
    { 
      title: 'Specifications.backing',
      data: <Backing product={product!} /> ,
      hasData: product.specsSheetData.backing
    },
    { 
      title: 'Specifications.flameRetardancy',
      data: <FlameRetardancy product={product!} /> ,
      hasData: product.specsSheetData.flame_retardancies
    },
    { 
      title: 'Specifications.otherAttributes',
      data: <OtherAttributes product={product!} /> ,
      hasData: product.specsSheetData.other_attributes
    },
    { 
      title: 'Specifications.additionalTest',
      data: <AdditionalTest product={product!} /> ,
      hasData: product.specsSheetData.additional_tests
    },
    { 
      title: 'Specifications.approvedCleaners',
      data: <ApprovedCleaners product={product!} /> ,
      hasData: product.specsSheetData.approved_cleaners
    },
    { 
      title: 'Specifications.terms',
      data: <TermsAndConditions /> ,
      hasData: true
    },
  ])

export const buildSustainableAttributes = (sustainability: any) => ([
  {
    title: 'pvcBioAttributed',
    value: sustainability?.biobasedPvcBioAttributed,
  },
  {
    title: 'phthalateFree',
    value: sustainability?.phthalateFreeProduct,
  },
  {
    title: 'frFree',
    value: sustainability?.frFree,
  },
  {
    title: 'antimicrobial',
    value: sustainability?.antimicrobial,
  },
  {
    title: 'backingProfile',
    value: sustainability?.antimicrobial,
    logo: sustainability?.backingProfileLogo
  },
])