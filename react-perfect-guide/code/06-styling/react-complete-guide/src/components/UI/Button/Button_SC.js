import styled from 'styled-components';

const Button = styled.button`
  padding: 0.5rem 1.5rem;
  width: 100%;
  border: 1px solid #8b005d;
  font: inherit;
  color: white;
  background-color: #8b005d;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;

  @media (min-width: 768px) {
    width: auto;
  }

  &:focus {
    outline: none;
  }

  &:hover,
  &:active {
    border-color: #ac0e77;
    background-color: #ac0e77;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
  }
`;

export default Button;
