import Form from "./components/form/Form";
import Layout from "./components/layout/Layout";
import ListFlexContainer from "./components/list/ListFlexContainer";
import { TodoContextProvider } from "./context/todo.context";

function App() {
  return (
    <>
      <TodoContextProvider>
        <Layout>
          <Form />
          <ListFlexContainer />
        </Layout>
      </TodoContextProvider>
    </>
  );
}

export default App;
