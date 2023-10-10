import { Error, Help } from "./icons";

function App() {
  return (
    <>
      <h1>Hello</h1>
      <p>This is a test</p>

      <Error width={60} color="orange" />

      <br />

      <Help width={65} color="lightblue" />
    </>
  );
}

export default App;
