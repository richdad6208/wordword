import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 1.5rem;
  h1 {
    font-size: 30px;
    font-weight: 700;
  }
`;
const Nav = styled.nav`
  ul {
    display: flex;
    gap: 0.2em;
    a {
      padding: 1em;
      &:hover {
        color: dodgerblue;
      }
    }
  }
`;

function Heading() {
  return (
    <Header>
      <Link to="/">
        <h1>WORDWORD</h1>
      </Link>
      <Nav>
        <ul>
          <li>
            <Link to="/word">명언 등록</Link>
          </li>
          <li>
            <Link to="/solution">고민게시판</Link>
          </li>
          <li>
            <Link to="/">감동게시판</Link>
          </li>
          <li>
            <Link to="/">회원가입</Link>
          </li>
          <li>
            <Link to="/">로그인</Link>
          </li>
        </ul>
      </Nav>
    </Header>
  );
}

export default Heading;
