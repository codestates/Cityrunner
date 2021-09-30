const color = {
  withe: "#e9ecef",
  black: "#343a40",
  gray: "#495057",
  hovergray: "#ced4da",
  green: "#21c897",
  apricot: "#FEF7E5",
};

const line = {
  gray: "#e9ecef",
};

const size = {
  mobileS: "700px",
  tabletS: "1023px",
  tabletM: "1023px",
  tabletL: "1023px",
  laptop: "1023px",
  desktop: "1023px",
};

export const theme = {
  color,
  line,
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
};
