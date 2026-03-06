import styled from "styled-components";
import { Link } from "react-router-dom";
import { useMemo, useState } from "react";
import catalogData from "../catalog/catalog.json";
import { CATALOG_CATEGORIES, type CatalogCategory, type CatalogEntry } from "../catalog/types";
import { previewRegistry } from "../catalog/registry";

const entries = catalogData as CatalogEntry[];

const Page = styled.section`
  display: grid;
  gap: 2rem;
`;

const Hero = styled.div`
  display: grid;
  gap: 0.75rem;
  max-width: 45rem;
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

const FilterBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.625rem;
`;

const FilterButton = styled.button<{ $active: boolean; $disabled?: boolean }>`
  border: 0.0625rem solid
    ${({ $active, $disabled }) => {
      if ($active) return "#101117";
      if ($disabled) return "rgba(16, 17, 23, 0.18)";
      return "rgba(16, 17, 23, 0.14)";
    }};
  border-style: ${({ $disabled }) => ($disabled ? "dashed" : "solid")};
  background: ${({ $active, $disabled }) => {
    if ($active) return "#101117";
    if ($disabled) return "#f5f5f4";
    return "#ffffff";
  }};
  color: ${({ $active, $disabled }) => {
    if ($active) return "#ffffff";
    if ($disabled) return "rgba(16, 17, 23, 0.46)";
    return "#101117";
  }};
  border-radius: 999rem;
  padding: 0.5rem 0.875rem;
  font-size: 0.84rem;
  font-weight: 700;
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
  opacity: ${({ $disabled }) => ($disabled ? 0.72 : 1)};
  transition:
    transform 0.15s ease,
    background 0.15s ease,
    color 0.15s ease,
    border-color 0.15s ease;

  &:hover {
    transform: ${({ $disabled }) => ($disabled ? "none" : "translateY(-0.0625rem)")};
  }
`;

const Grid = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(15.625rem, 1fr));
`;

const Card = styled(Link)`
  background: #ffffff;
  border-radius: 1.5rem;
  padding: 1.25rem;
  box-shadow: var(--shadow-strong);
  display: grid;
  grid-template-rows: auto minmax(var(--preview-min-height), 1fr) auto;
  gap: 0.875rem;
  height: 100%;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-0.375rem);
    box-shadow: 0 1.875rem 3.125rem rgba(16, 17, 23, 0.22);
  }
`;

const CardHeader = styled.div`
  display: grid;
  gap: 0.375rem;
  align-content: start;
`;

const CardTitle = styled.h3`
  margin: 0;
  font-size: 1.2rem;
  line-height: 1.3;
  min-height: 1.6rem;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const CardDesc = styled.p`
  margin: 0;
  color: var(--ink-60);
  line-height: 1.45;
  min-height: 2.5rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  align-items: flex-start;
  align-self: end;
`;

const Tag = styled.span`
  background: var(--paper-90);
  padding: 0.375rem 0.75rem;
  border-radius: 999rem;
  font-size: 0.75rem;
  font-weight: 600;
  align-self: flex-start;
`;

const PreviewFrame = styled.div`
  background: #fdfbf7;
  border-radius: 1.125rem;
  padding: 1.125rem;
  min-height: var(--preview-min-height);
  height: 100%;
  display: grid;
  place-items: center;
  border: 0.0625rem solid rgba(16, 17, 23, 0.08);
`;

const CATEGORY_LABELS: Record<CatalogCategory, string> = {
  action: "Action",
  layout: "Layout",
  status: "Status",
  form: "Form",
  navigation: "Navigation",
  feedback: "Feedback",
  overlay: "Overlay",
  "data-display": "Data Display",
};

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<CatalogCategory | "all">("all");

  const categoriesWithState = useMemo(() => {
    const existing = new Set(entries.map((entry) => entry.category));
    return CATALOG_CATEGORIES.map((category) => ({
      category,
      disabled: !existing.has(category),
    }));
  }, []);

  const filteredEntries = useMemo(() => {
    if (activeCategory === "all") {
      return entries;
    }
    return entries.filter((entry) => entry.category === activeCategory);
  }, [activeCategory]);

  return (
    <Page>
      <Hero>
        <Title>UI Catalog</Title>
        <Subtitle>사용을 원하는 UI를 선택하고 미리보기를 확인하세요.</Subtitle>
      </Hero>
      <FilterBar>
        <FilterButton $active={activeCategory === "all"} onClick={() => setActiveCategory("all")}>
          All
        </FilterButton>
        {categoriesWithState.map(({ category, disabled }) => (
          <FilterButton
            key={category}
            $active={activeCategory === category}
            $disabled={disabled}
            disabled={disabled}
            onClick={() => setActiveCategory(category)}
          >
            {CATEGORY_LABELS[category]}
          </FilterButton>
        ))}
      </FilterBar>
      <Grid>
        {filteredEntries.map((entry) => {
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
