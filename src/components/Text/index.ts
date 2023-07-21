import styled from "styled-components";

interface TextProps {
  variant?: "large" | "medium" | "small" | "emphasis";
  color?: string;
}

const Text = styled.p.withConfig({
  shouldForwardProp: (props) => !["variant", "color"].includes(props),
})<TextProps>`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  color: ${({ theme, color }) => color || theme.colors.neutral["050"]};

  @media screen and (min-width: 0px) {
    font-size: ${({ theme, variant = "medium" }) =>
      theme.typography.variants[`${variant}_xs`].size};
    font-weight: ${({ theme, variant = "medium" }) =>
      theme.typography.variants[`${variant}_xs`].weight};
  }
  @media screen and (min-width: 768px) {
    font-size: ${({ theme, variant = "medium" }) =>
      theme.typography.variants[`${variant}_md`].size};
    font-weight: ${({ theme, variant = "medium" }) =>
      theme.typography.variants[`${variant}_md`].weight};
  }
`;

export default Text;
