export const tokens = {
  grey: {
    100: "#ffffff", // Pure White
    200: "#f7f7f7", // Very Light White
    300: "#efefef", // Light Grayish White
    400: "#e7e7e7", // Grayish White
    500: "#dfdfdf", // Light Gray
    600: "#bfbfbf", // Mid Gray
    700: "#9f9f9f", // Darker Gray
    800: "#7f7f7f", // Dark Gray
    900: "#5f5f5f", // Very Dark Gray
  }
  
,
  primary: {
    // laser red
    100: "#ffcccc", // Light red
    200: "#ff9999", // Lighter red
    300: "#ff6666", // Soft red
    400: "#ff3333", // Bright red
    500: "#ff0000", // Laser red
    600: "#cc0000", // Darker red
    700: "#990000", // Dark red
    800: "#660000", // Very dark red
    900: "#330000", // Deep red
},
  secondary: {
    // yellow
    100: "#fcf0dd",
    200: "#fae1bb",
    300: "#f7d299",
    400: "#f5c377",
    500: "#f2b455",
    600: "#c29044",
    700: "#916c33",
    800: "#614822",
    900: "#302411",
  },
  tertiary: {
    // purple
    500: "#8884d8",
  },
  background: {
    light: "#2d2d34",
    main: "#1f2026",
  },
};

// mui theme settings
export const themeSettings = {
  palette: {
    primary: {
      ...tokens.primary,
      main: tokens.primary[500],
      light: tokens.primary[400],
    },
    secondary: {
      ...tokens.secondary,
      main: tokens.secondary[500],
    },
    tertiary: {
      ...tokens.tertiary,
    },
    grey: {
      ...tokens.grey,
      main: tokens.grey[500],
    },
    background: {
      default: tokens.background.main,
      light: tokens.background.light,
    },
  },
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),
    fontSize: 12,
    h1: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 32,
    },
    h2: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 24,
    },
    h3: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 20,
      fontWeight: 800,
      color: tokens.grey[200],
    },
    h4: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 14,
      fontWeight: 600,
      color: tokens.grey[300],
    },
    h5: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 12,
      fontWeight: 400,
      color: tokens.grey[500],
    },
    h6: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 10,
      color: tokens.grey[700],
    },
  },
};
