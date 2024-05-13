import styled from "styled-components";
import Image from "next/image";

const ArtPieceContainer = styled.li`
  margin: 1rem;
  text-align: center;
`;

const ArtPieceContainerHeadline = styled.h2`
  padding: 1rem;
  text-align: center;
  background: black;
  color: #fff;
  margin: 0;
`;

const StyledImage = styled(Image)`
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

function ArtPiecePreview({ id, image, title, artist }) {
  return (
    <ArtPieceContainer key={id}>
      <ArtPieceContainerHeadline>{title}</ArtPieceContainerHeadline>
      <StyledImage
        src={image}
        alt={title}
        layout="responsive"
        width={300}
        height={400}
      />
      <p>{artist}</p>
    </ArtPieceContainer>
  );
}

export default ArtPiecePreview;
