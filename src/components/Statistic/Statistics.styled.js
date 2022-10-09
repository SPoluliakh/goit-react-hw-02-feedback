import styled from 'styled-components';

export const StatList = styled.ul`
  margin-top: ${props => props.theme.space[0]}px;
  margin-bottom: ${props => props.theme.space[0]}px;
  list-style: none;
  padding: ${props => props.theme.space[0]}px;
  padding-left: ${props => props.theme.space[3]}px;
`;

export const StatItems = styled.li`
  margin-top: ${props => props.theme.space[2]}px;
  margin-bottom: ${props => props.theme.space[0]}px;
  padding: ${props => props.theme.space[0]}px;
  :first-child {
    margin-top: ${props => props.theme.space[0]}px;
  }
`;

export const StatItemsText = styled.p`
  margin-top: ${props => props.theme.space[0]}px;
  margin-bottom: ${props => props.theme.space[0]}px;
  padding: ${props => props.theme.space[0]}px;
`;
