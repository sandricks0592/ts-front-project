import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import { BookStoreThemeProvider } from "./components/context/themeContext";

function App() {
  return (
    <BookStoreThemeProvider>
      <Layout>
        <Home/>
      </Layout>
    </BookStoreThemeProvider>
  );
}

export default App;
