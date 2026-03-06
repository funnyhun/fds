import styled from "styled-components";

type PromoCardProps = {
  title: string;
  description: string;
  ctaLabel: string;
};

const Card = styled.article`
  background: #ffffff;
  border-radius: 1.5rem;
  padding: 1.75rem;
  min-width: 16.25rem;
  max-width: 20rem;
  box-shadow: var(--shadow-soft);
  display: grid;
  gap: 1rem;
`;

const Badge = styled.span`
  align-self: flex-start;
  background: #101117;
  color: #ffffff;
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  font-weight: 600;
  padding: 0.375rem 0.75rem;
  border-radius: 999rem;
`;

const Title = styled.h3`
  margin: 0;
  font-family: var(--font-display);
  font-size: 1.4rem;
`;

const Description = styled.p`
  margin: 0;
  color: var(--ink-60);
  line-height: 1.5;
`;

const Cta = styled.button`
  border: none;
  background: #101117;
  color: #ffffff;
  padding: 0.625rem 1.125rem;
  border-radius: 0.75rem;
  font-weight: 600;
  cursor: pointer;
`;

const ImageBlock = styled.div`
  height: 8.75rem;
  border-radius: 1.125rem;
  background: linear-gradient(135deg, #ffe8d2, #c6f0f7);
`;

export function PromoCard({ title, description, ctaLabel }: PromoCardProps) {
  return (
    <Card>
      <Badge>FEATURED</Badge>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <ImageBlock />
      <Cta type="button">{ctaLabel}</Cta>
    </Card>
  );
}
