import Form from "./components/form/Form";
import Layout from "./components/layout/Layout";
import ListFlexContainer from "./components/list/ListFlexContainer";
import { ThemeContextProvider } from "./context/theme.context";
import { TodoContextProvider } from "./context/todo.context";

function App() {
  return (
    <>
      <ThemeContextProvider>
        <TodoContextProvider>
          <Layout>
            <Form />
            <ListFlexContainer />
          </Layout>
        </TodoContextProvider>
      </ThemeContextProvider>
    </>
  );
}

export default App;
