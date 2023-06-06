import Layout from "./components/layout/Layout";
import MainContainer from "./components/main/MainContainer";
import { ThemeContextProvider } from "./context/theme.context";
import { TodoContextProvider } from "./context/todo.context";

function App() {
  return (
    <>
      <ThemeContextProvider>
        <TodoContextProvider>
          <Layout>
            <MainContainer />
          </Layout>
        </TodoContextProvider>
      </ThemeContextProvider>
    </>
  );
}

export default App;
