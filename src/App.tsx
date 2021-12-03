import GlobalStyles from "@mui/material/GlobalStyles";

// DOES NOT WORK
function App() {
  return (
    <GlobalStyles
      styles={(theme) => {
        return {
          body: {
            backgroundColor: theme.palette.primary.main,
          },
        };
      }}
    />
  );
}
// WORKS
/* function App() {
  return (
    <GlobalStyles
      styles={(theme: any) => {
        return {
          body: {
            backgroundColor: theme.palette.primary.main,
          },
        };
      }}
    />
  );
} */

export default App;
