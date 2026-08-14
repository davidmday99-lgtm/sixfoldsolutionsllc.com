type BusinessInfo = {
  companyName: string;
  shortName: string;
  ownerName: string;
  phone: string;
  email: string;
  city: string;
  state: string;
  stateName: string;
  domain: string;
  businessHours: string;
};

export const businessInfo: BusinessInfo = {
  companyName: "Six Fold Solutions LLC",
  shortName: "Six Fold Solutions",
  ownerName: "Jason Thompson",
  phone: "618-974-1278",
  email: "JtThompson@6foldsolutions.com",
  city: "Alton",
  state: "IL",
  stateName: "Illinois",
  domain: "sixfoldsolutionsllc.com",
  businessHours: "",
};

export const siteUrl = `https://${businessInfo.domain}`;

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/service-area", label: "Service Area" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
] as const;
