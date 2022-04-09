import * as React from 'react';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import CustomizedSwitch from '../Toogle';
import "./styles.css"

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function MyTheme() {

  const [toggleDark, settoggleDark] = useState(false);
  const darkTheme = createTheme({
    palette: {
      type: toggleDark ? "dark" : "light",
    },
  });


}

 function ToggleColorMode({ 
  toggleDark, settoggleDark }) {
  const [mode, setMode] = React.useState('dark');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
      <IconButton sx={{ ml: 1 }} className="btn-dark" onClick={colorMode.toggleColorMode} color="inherit">
        {theme.palette.mode === 'dark' ? <CustomizedSwitch /> : <CustomizedSwitch />}
      </IconButton>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default ToggleColorMode;