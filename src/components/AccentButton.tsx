import styled from "styled-components";

type AccentButtonProps = {
  label: string;
  hint?: string;
};

const ButtonShell = styled.button`
  border: none;
  background: linear-gradient(135deg, #ff8f4a 0%, #ffb37c 45%, #8edce6 100%);
  color: #101117;
  padding: 14px 28px;
  border-radius: 999px;
  font-weight: 600;
  font-size: 1rem;
  letter-spacing: 0.02em;
  box-shadow: 0 18px 30px rgba(255, 143, 74, 0.3);
  cursor: pointer;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px) scale(1.01);
    box-shadow: 0 24px 36px rgba(255, 143, 74, 0.35);
  }

  &:active {
    transform: translateY(1px) scale(0.99);
  }
`;

const Hint = styled.p`
  margin: 10px 0 0;
  font-size: 0.9rem;
  color: #4a4d58;
`;

const Stack = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
`;

export function AccentButton({ label, hint }: AccentButtonProps) {
  return (
    <Stack>
      <ButtonShell type="button">{label}</ButtonShell>
      {hint ? <Hint>{hint}</Hint> : null}
    </Stack>
  );
}
