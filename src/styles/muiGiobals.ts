import "@fontsource/roboto/900.css";
import { alpha, createTheme } from "@mui/material/styles";

// Palette extensions
declare module "@mui/material/styles" {}

// Typography extensions
declare module "@mui/material/styles" {
  interface TypographyVariants {
    title: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    title?: React.CSSProperties;
  }
}
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    title: true;
  }
}

// Components extensions
declare module "@mui/material/TextField" {
  interface TextFieldPropsColorOverrides {
    disabled: true;
  }
}

declare module "@mui/material/OutlinedInput" {
  interface OutlinedInputPropsColorOverrides {
    disabled: true;
  }
}

declare module "@mui/material/InputBase" {
  interface InputBasePropsColorOverrides {
    disabled: true;
  }
}

declare module "@mui/material/FormLabel" {
  interface FormLabelPropsColorOverrides {
    disabled: true;
  }
}

const crucisPalette = {
  primary: {
    50: "#FFE9E9",
    light: "#FFCFCF",
    200: "#FFA8A8",
    300: "#FF7C7C",
    400: "#FF5555",
    main: "#FF3535", // base
    600: "#E22E2E",
    700: "#C32626",
    800: "#9E1F1F",
    900: "#721515",
    contrastText: "#FFFFFF",
  },

  secondary: {
    50: "#E0F7F9",
    light: "#B3ECEF",
    200: "#80E0E4",
    300: "#4DD3D8",
    400: "#26C8CE",
    main: "#008087",
    600: "#006E73",
    700: "#00595D",
    800: "#004448",
    dark: "#002F32",
    contrastText: "#FFFFFF",
  },

  success: {
    50: "#E6F7E8",
    light: "#C3EAC8",
    200: "#9EDC9E",
    300: "#6FCF70",
    400: "#4DC058",
    main: "#34A853", // base
    600: "#2E8B47",
    700: "#256E3A",
    800: "#1D572E",
    900: "#133D20",
    contrastText: "#FFFFFF",
  },

  warning: {
    50: "#FFFCE6",
    light: "#FFF8C4",
    200: "#FFF59D",
    300: "#FFF176",
    400: "#FCEB52",
    main: "#F9FBA2",
    600: "#F4E64F",
    700: "#E1D647",
    800: "#BDB336",
    900: "#9E952C",
    contrastText: "#FFFFFF",
  },

  info: {
    50: "#E9F6FF",
    light: "#D4EEFF",
    200: "#BAE3FF",
    300: "#97D9FF",
    400: "#63C5FF",
    main: "#2196F3",
    600: "#1E88E5",
    700: "#1976D2",
    800: "#1565C0",
    900: "#0D47A1",
    contrastText: "#FFFFFF",
  },

  error: {
    50: "#FFEBEE",
    light: "#FFCDD2",
    200: "#EF9A9A",
    300: "#E57373",
    400: "#EF5350",
    main: "#C62828", // base
    600: "#B71C1C",
    700: "#A01818",
    800: "#801313",
    900: "#5C0E0E",
    contrastText: "#FFFFFF",
  },

  disabled: {
    light: "#F5F5F5",
    100: "#E0E0E0",
    200: "#CCCCCC",
    300: "#BDBDBD",
    400: "#A6A6A6",
    500: "#999999",
    600: "#8C8C8C",
    700: "#7A7A7A",
    800: "#6B6B6B",
    main: "#5C5C5C",
    dark: "#222222",
    contrastText: "#FFFFFF",
  },
};

//Base configuration
export const rootTheme = createTheme({
  palette: { ...crucisPalette! },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    title: {
      fontSize: "6.5rem",
      fontFamily: "Roboto",
      fontWeight: 900,
      color: crucisPalette.primary.contrastText,
    },
  },

  components: {
    MuiContainer: {
      defaultProps: {
        sx: {
          display: "flex",
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontWeight: 700,
          fontSize: "1rem",
          opacity: 1,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          height: "60px",
          width: "300px",
          borderRadius: "0.5rem",
          backgroundColor: "#f8f8f8",
          boxShadow: "none",
        },
        input: {
          padding: "1.25rem 1rem",
          opacity: 1,
          fontSize: "1rem",
          "&::placeholder": {
            color: crucisPalette.disabled?.[600],
            opacity: 1,
          },
        },

        notchedOutline: {
          borderColor: crucisPalette.disabled[600],
        },
        sizeSmall: {
          height: "50px",
          width: "250px",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "0.5rem",
          height: "60px",
          textAlign: "center",
          padding: "0 2rem",
          fontSize: "1.25rem",
          maxWidth: 300,
          fontWeight: 700,
          textTransform: "none",
          ":disabled": {
            backgroundColor: crucisPalette.disabled[600],
            color: crucisPalette.disabled.contrastText,
          },
        },
        outlined: {
          border: "2px solid",
          fontWeight: 700,
          "&.MuiButton-outlinedPrimary": {
            color: crucisPalette.primary[600],
            borderColor: crucisPalette.primary.main,
            backgroundColor: alpha(crucisPalette.primary.main, 0.1),
            "&:hover": {
              backgroundColor: alpha(crucisPalette.primary.main, 0.2),
            },
          },

          "&.MuiButton-outlinedSecondary": {
            color: crucisPalette.secondary[600],
            borderColor: crucisPalette.secondary.main,
            backgroundColor: alpha(crucisPalette.secondary.main, 0.1),
            "&:hover": {
              backgroundColor: alpha(crucisPalette.secondary.main, 0.2),
            },
          },

          "&.MuiButton-outlinedSuccess": {
            color: crucisPalette.success[600],
            borderColor: crucisPalette.success.main,
            backgroundColor: alpha(crucisPalette.success.main, 0.1),
            "&:hover": {
              backgroundColor: alpha(crucisPalette.success.main, 0.2),
            },
          },
        },
      },
    },
    MuiStack: {
      defaultProps: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        gap: 4,
      },
    },
  },
});
