import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import catalogData from "../catalog/catalog.json";
import type { CatalogEntry } from "../catalog/types";
import { previewRegistry } from "../catalog/registry";

const entries = catalogData as CatalogEntry[];

const Page = styled.section`
  display: grid;
  gap: 28px;
`;

const BackLink = styled(Link)`
  font-weight: 600;
  color: var(--ink-60);
`;

const Header = styled.header`
  display: grid;
  gap: 10px;
`;

const Title = styled.h2`
  margin: 0;
  font-family: var(--font-display);
  font-size: clamp(2rem, 3vw, 2.6rem);
`;

const Description = styled.p`
  margin: 0;
  color: var(--ink-60);
  max-width: 640px;
`;

const PreviewStage = styled.div`
  min-height: 320px;
  border-radius: 32px;
  background: #ffffff;
  box-shadow: var(--shadow-strong);
  padding: 36px;
  display: grid;
  place-items: center;
`;

const Tags = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

const Tag = styled.span`
  background: var(--paper-90);
  padding: 6px 12px;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 600;
`;

const Empty = styled.div`
  padding: 32px;
  background: #ffffff;
  border-radius: 24px;
  box-shadow: var(--shadow-soft);
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
    </Page>
  );
}
