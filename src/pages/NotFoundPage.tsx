import styled from "styled-components";
import { Link } from "react-router-dom";

const Page = styled.section`
  display: grid;
  place-items: center;
  min-height: 40vh;
  gap: 16px;
`;

const Title = styled.h2`
  margin: 0;
  font-family: var(--font-display);
  font-size: 2rem;
`;

const BackLink = styled(Link)`
  font-weight: 600;
`;

export default function NotFoundPage() {
  return (
    <Page>
      <Title>404 - Not Found</Title>
      <BackLink to="/">Back to gallery</BackLink>
    </Page>
  );
}
