import styled from "styled-components";

interface HighlighterProps {
  display?: "block" | "inline";
}

const Highlighter = styled.span.withConfig({
  shouldForwardProp: (props) => !["display"].includes(props),
})<HighlighterProps>`
  color: ${({ theme }) => theme.colors.main};

  display: ${({ display = "block" }) => display};
`;

export default Highlighter;
