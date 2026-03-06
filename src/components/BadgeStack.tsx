import styled from "styled-components";

type BadgeStackProps = {
  labels: string[];
};

const Stack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.625rem;
`;

const Chip = styled.span`
  padding: 0.5rem 0.875rem;
  border-radius: 999rem;
  background: #ffffff;
  border: 0.0625rem solid rgba(16, 17, 23, 0.1);
  font-weight: 600;
  font-size: 0.85rem;
  color: #2a2b33;
  box-shadow: 0 0.75rem 1.25rem rgba(16, 17, 23, 0.08);
`;

export function BadgeStack({ labels }: BadgeStackProps) {
  return (
    <Stack>
      {labels.map((label) => (
        <Chip key={label}>{label}</Chip>
      ))}
    </Stack>
  );
}
