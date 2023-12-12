import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../../components/Layout";
import { ThemeProvider, createTheme } from "@mui/material";
import { Inter } from 'next/font/google'
import { blue } from "@mui/material/colors";

const inter = Inter({ subsets: ['latin'] })

const theme = createTheme({
  typography: {
    fontFamily: inter.style.fontFamily
  },
  palette: {
    primary: {
      main: blue[900]
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            textDecoration: 'underline',
          },
        }
      }
    }
  }
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
