import { styled } from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 2em;
  background: whitesmoke;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  textarea {
    resize: none;
  }
`;

function Saying() {
  return (
    <Form>
      <label>저자</label>
      <input type="text" placeholder="author" />
      <textarea></textarea>
    </Form>
  );
}

export default Saying;
