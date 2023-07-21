import styled from "styled-components";

const PresentationBox = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;

  @media screen and (min-width: 0px) {
    flex-direction: column;
    padding: ${({ theme }) => theme.sizes.padding.section["xs"]};
  }
  @media screen and (min-width: 768px) {
    flex-direction: row;
    padding: ${({ theme }) => theme.sizes.padding.section["md"]};
  }
`;

export const PresentationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (min-width: 0px) {
    width: 100%;
    align-items: center;
  }
  @media screen and (min-width: 768px) {
    align-items: flex-start;
    width: 50%;
  }
`;

export const Card = styled.li`
  background: ${({ theme }) => theme.colors.gradient.radial};
  border-radius: ${({ theme }) => theme.sizes.radius};

  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 16px 24px;
  gap: 16px;

  @media screen and (min-width: 0px) {
    flex-direction: column;
  }
  @media screen and (min-width: 500px) {
    flex-direction: row;
    height: 150px;
  }
`;

export const CardImage = styled.img`
  @media screen and (min-width: 0px) {
    width: 40px;
  }
  @media screen and (min-width: 768px) {
    width: 60px;
  }
`;

export default PresentationBox;
