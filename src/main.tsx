import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { createTheme, CssBaseline, GlobalStyles, ThemeProvider } from '@mui/material'
import { routes } from './route.tsx'
import './index.css'

// #9ECAD6
// #748DAE
// #F5CBCB
// #FFEAEA
const theme = createTheme({
  palette: {
    primary: {
      main: '#9ECAD6',
    },
    secondary: {
      main: '#748DAE'
    },
    background: {
      default: "#FFEAEA"
    },
    // text: {
    //   primary: "#333333",
    //   secondary: "#ffffffff"
    // }
  }
})

const router = createBrowserRouter(routes);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <CssBaseline />
    <ThemeProvider theme={theme}>
      {/* Optional fallback to force body color if something overrides it */}
      <GlobalStyles styles={(theme) => ({ body: { backgroundColor: theme.palette.background.default } })} />
      <RouterProvider router={router} />
    </ThemeProvider>

  </StrictMode>,
)
