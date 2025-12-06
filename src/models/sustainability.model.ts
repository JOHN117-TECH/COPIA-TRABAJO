export interface InfoHighlightCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  className?: string;
}


export interface TabContentItem {
  title: string;
  description: string;
  src: string; 
  urls: string
}

export interface TabData {
  title: string;
  src: string; 
  description: string;
  content: TabContentItem[];
}

type Orientation = "vertical" | "horizontal";

export interface CertificationsTabsProps {
  tabs: TabData[];
}

export interface CertificationCardProps {
  item: any, 
  translateKey?: string,
  orientation?: Orientation,
}
