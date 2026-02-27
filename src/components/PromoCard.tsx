import styled from "styled-components";

type PromoCardProps = {
  title: string;
  description: string;
  ctaLabel: string;
};

const Card = styled.article`
  background: #ffffff;
  border-radius: 24px;
  padding: 28px;
  min-width: 260px;
  max-width: 320px;
  box-shadow: var(--shadow-soft);
  display: grid;
  gap: 16px;
`;

const Badge = styled.span`
  align-self: flex-start;
  background: #101117;
  color: #ffffff;
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  font-weight: 600;
  padding: 6px 12px;
  border-radius: 999px;
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
  padding: 10px 18px;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
`;

const ImageBlock = styled.div`
  height: 140px;
  border-radius: 18px;
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
