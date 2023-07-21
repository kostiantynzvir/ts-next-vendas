import styled from "styled-components";

const AboutBox = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  @media screen and (min-width: 0px) {
    flex-direction: column;
    padding: ${({ theme }) => theme.sizes.padding.section["xs"]};
  }
  @media screen and (min-width: 768px) {
    flex-direction: row;
    padding: ${({ theme }) => theme.sizes.padding.section["md"]};
  }
`;

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (min-width: 0px) {
    width: 100%;
  }
  @media screen and (min-width: 768px) {
    align-items: flex-start;
    width: 50%;
  }
`;

export const TopImage = styled.img`
  @media screen and (min-width: 0px) {
    display: none;
  }
  @media screen and (min-width: 768px) {
    display: block;
    width: 100%;
  }
`;

export const SideImage = styled.img`
  max-width: 400px;

  @media screen and (min-width: 0px) {
    width: 100%;
  }
  @media screen and (min-width: 768px) {
    width: 40%;
  }
`;

export default AboutBox;
