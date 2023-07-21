import styled from "styled-components";

const FormBox = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 16px;
`;

export const Input = styled.input`
  width: 100%;
  height: ${({ theme }) => theme.sizes.height.formComponents};
  padding: ${({ theme }) => theme.sizes.padding.formComponents};
  border-radius: ${({ theme }) => theme.sizes.radius};

  text-align: center;

  color: ${({ theme }) => theme.colors.neutral["100"]};
  font-family: ${({ theme }) => theme.typography.fontFamily};

  @media screen and (min-width: 0px) {
    font-size: ${({ theme }) => theme.typography.variants["medium_xs"].size};
    font-weight: ${({ theme }) =>
      theme.typography.variants["medium_xs"].weight};
  }

  @media screen and (min-width: 0px) {
    font-size: ${({ theme }) => theme.typography.variants["medium_md"].size};
    font-weight: ${({ theme }) =>
      theme.typography.variants["medium_md"].weight};
  }
`;

export const Button = styled.button`
  width: 100%;

  height: ${({ theme }) => theme.sizes.height.formComponents};
  padding: ${({ theme }) => theme.sizes.padding.formComponents};
  border-radius: ${({ theme }) => theme.sizes.radius};

  background-color: ${({ theme }) => theme.colors.main};
  cursor: pointer;
`;

export default FormBox;
