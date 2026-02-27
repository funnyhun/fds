import styled from "styled-components";

type BadgeStackProps = {
  labels: string[];
};

const Stack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Chip = styled.span`
  padding: 8px 14px;
  border-radius: 999px;
  background: #ffffff;
  border: 1px solid rgba(16, 17, 23, 0.1);
  font-weight: 600;
  font-size: 0.85rem;
  color: #2a2b33;
  box-shadow: 0 12px 20px rgba(16, 17, 23, 0.08);
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
