import styled from "styled-components";

const CoverBox = styled.section`
  background-image: url("/img/cover-background.png");
  background-repeat: no-repeat;

  @media screen and (min-width: 0px) {
    background-size: 400px 400px;
    background-position: 50vw 50%;

    padding: ${({ theme }) => theme.sizes.padding.section["xs"]};
  }
  @media screen and (min-width: 768px) {
    background-size: 800px 800px;
    background-position: 120% -100%;

    padding: ${({ theme }) => theme.sizes.padding.section["md"]};
  }
`;

export const CoverContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  text-align: center;

  @media screen and (min-width: 0px) {
    width: 100%;
  }
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`;

export const CoverLogo = styled.img`
  width: 100%;
`;

export default CoverBox;
