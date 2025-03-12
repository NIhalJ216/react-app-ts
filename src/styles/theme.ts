import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#000",
        },
        background: {
            default: "#ffffff",
            paper: "#f5f5f5",
        },
    },
});

export const darkTheme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#fff",
        },
        background: {
            default: "#121212",
            paper: "#1e1e1e",
        },
    },
});
