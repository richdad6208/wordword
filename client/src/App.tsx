import Heading from "./component/Heading";
import styled from "styled-components";

const Container = styled.div`
  --max-width: 1200px;
  --padding: 1rem;

  width: min(var(--max-width), 100% - var(--padding) * 2);
  margin-inline: auto;
`;
function App() {
  return (
    <Container>
      <Heading />
    </Container>
  );
}

export default App;
