import styled from "styled-components";

const InscriptionBox = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 0px) {
    padding: ${({ theme }) => theme.sizes.padding.section["xs"]};
  }
  @media screen and (min-width: 768px) {
    padding: ${({ theme }) => theme.sizes.padding.section["md"]};
  }
`;

export const InscriptionContainer = styled.div`
  width: 100%;
  height: 600px;
  text-align: center;
  padding: 8px;

  border-radius: ${({ theme }) => theme.sizes.radius};
  background: ${({ theme }) => theme.colors.gradient.radial};

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 16px;
`;

export const FormContainer = styled.div`
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`;

export default InscriptionBox;
