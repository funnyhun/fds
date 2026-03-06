import styled from "styled-components";
import { Link, useParams } from "react-router-dom";

import catalogData from "../catalog/catalog.json";
import type { CatalogEntry } from "../catalog/types";
import { previewRegistry } from "../catalog/registry";

const entries = catalogData as CatalogEntry[];

const Page = styled.section`
  display: grid;
  gap: 1.75rem;
`;

const BackLink = styled(Link)`
  font-weight: 600;
  color: var(--ink-60);
`;

const Header = styled.header`
  display: grid;
  gap: 0.625rem;
`;

const Title = styled.h2`
  margin: 0;
  font-family: var(--font-display);
  font-size: clamp(2rem, 3vw, 2.6rem);
`;

const Description = styled.p`
  margin: 0;
  color: var(--ink-60);
  max-width: 40rem;
`;

const PreviewStage = styled.div`
  min-height: 20rem;
  border-radius: 2rem;
  background: #ffffff;
  box-shadow: var(--shadow-strong);
  padding: 2.25rem;
  display: grid;
  place-items: center;
`;

const Tags = styled.div`
  display: flex;
  gap: 0.625rem;
  flex-wrap: wrap;
`;

const Tag = styled.span`
  background: var(--paper-90);
  padding: 0.375rem 0.75rem;
  border-radius: 999rem;
  font-size: 0.75rem;
  font-weight: 600;
`;

const Empty = styled.div`
  padding: 2rem;
  background: #ffffff;
  border-radius: 1.5rem;
  box-shadow: var(--shadow-soft);
`;

const CodeSection = styled.section`
  display: grid;
  gap: 1rem;
`;

const CodeTitle = styled.h3`
  margin: 0;
  font-family: var(--font-display);
  font-size: 1.4rem;
  color: var(--ink-90);
`;

const CodeBlock = styled.pre`
  margin: 0;
  padding: 1.5rem;
  background: #1e1e1e;
  border-radius: 1rem;
  overflow-x: auto;
  box-shadow: var(--shadow-soft);
  font-family: "Monaco", "Menlo", "Ubuntu Mono", monospace;
  font-size: 0.875rem;
  line-height: 1.6;
  color: #d4d4d4;

  code {
    display: block;
    white-space: pre;
  }
`;

export default function PreviewPage() {
  const { id } = useParams();
  const entry = entries.find((item) => item.id === id);

  if (!entry) {
    return (
      <Page>
        <BackLink to="/">Back to gallery</BackLink>
        <Empty>존재하지 않는 프리뷰입니다.</Empty>
      </Page>
    );
  }

  const preview = previewRegistry[entry.componentId];
  const PreviewComponent = preview?.component;

  return (
    <Page>
      <BackLink to="/">Back to gallery</BackLink>
      <Header>
        <Title>{entry.name}</Title>
        <Description>{entry.description}</Description>
        <Tags>
          {entry.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </Tags>
      </Header>
      <PreviewStage>{PreviewComponent ? <PreviewComponent {...preview.props} /> : null}</PreviewStage>
      <CodeSection>
        <CodeTitle>Source Code</CodeTitle>
        <CodeBlock>
          <code>{preview?.sourceCode || "// No source code available"}</code>
        </CodeBlock>
      </CodeSection>
    </Page>
  );
}
