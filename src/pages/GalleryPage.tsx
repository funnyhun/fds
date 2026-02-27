import styled from "styled-components";
import { Link } from "react-router-dom";
import catalogData from "../catalog/catalog.json";
import type { CatalogEntry } from "../catalog/types";
import { previewRegistry } from "../catalog/registry";

const entries = catalogData as CatalogEntry[];

const Page = styled.section`
  display: grid;
  gap: 32px;
`;

const Hero = styled.div`
  display: grid;
  gap: 12px;
  max-width: 720px;
`;

const Title = styled.h1`
  font-family: var(--font-display);
  font-size: clamp(2.4rem, 4vw, 3.6rem);
  margin: 0;
`;

const Subtitle = styled.p`
  margin: 0;
  font-size: 1.1rem;
  color: var(--ink-60);
`;

const Grid = styled.div`
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;

const Card = styled(Link)`
  background: #ffffff;
  border-radius: 24px;
  padding: 20px;
  box-shadow: var(--shadow-strong);
  display: grid;
  gap: 18px;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 30px 50px rgba(16, 17, 23, 0.22);
  }
`;

const CardHeader = styled.div`
  display: grid;
  gap: 6px;
`;

const CardTitle = styled.h3`
  margin: 0;
  font-size: 1.2rem;
`;

const CardDesc = styled.p`
  margin: 0;
  color: var(--ink-60);
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Tag = styled.span`
  background: var(--paper-90);
  padding: 6px 12px;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 600;
`;

const PreviewFrame = styled.div`
  background: #fdfbf7;
  border-radius: 18px;
  padding: 18px;
  min-height: 140px;
  display: grid;
  place-items: center;
  border: 1px solid rgba(16, 17, 23, 0.08);
`;

export default function GalleryPage() {
  return (
    <Page>
      <Hero>
        <Title>UI Catalog</Title>
        <Subtitle>사용을 원하는 UI를 선택하고 미리보기를 확인하세요.</Subtitle>
      </Hero>
      <Grid>
        {entries.map((entry) => {
          const preview = previewRegistry[entry.componentId];
          const PreviewComponent = preview?.component;
          return (
            <Card key={entry.id} to={`/preview/${entry.id}`}>
              <CardHeader>
                <CardTitle>{entry.name}</CardTitle>
                <CardDesc>{entry.description}</CardDesc>
              </CardHeader>
              <PreviewFrame>{PreviewComponent ? <PreviewComponent {...preview.props} /> : null}</PreviewFrame>
              <Tags>
                {entry.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </Tags>
            </Card>
          );
        })}
      </Grid>
    </Page>
  );
}
