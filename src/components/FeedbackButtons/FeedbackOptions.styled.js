import styled from 'styled-components';

export const ButtonsWrapp = styled.div`
  display: inline-flex;
  gap: ${p => p.theme.space[3]}px;
`;

export const FeedbackButtons = styled.button`
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: ${p => p.theme.shadows.buttonsShadow};
  padding: 5px 10px;
  cursor: pointer;
  transition: transform 150ms linear;

  :hover {
    transform: scale(1.2);
  }
`;
