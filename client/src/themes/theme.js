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
	laptopS: "566px",
	mobileS: "710px",
	tabletS: "1023px",
	laptopXs: "503px",
	tabletL: "1023px",
	laptop: "710px",
	desktop: "1023px",
};

export const theme = {
	color,
	line,
	mobileS: `(max-width: ${size.mobileS})`,
	laptopXs: `(max-width: ${size.laptopXs})`,
	mobileL: `(max-width: ${size.mobileL})`,
	tablet: `(max-width: ${size.tablet})`,
	laptop: `(max-width: ${size.laptop})`,
	laptopS: `(max-width: ${size.laptopS})`,
	desktop: `(min-width: ${size.desktop})`,
	desktopL: `(min-width: ${size.desktop})`,
};
