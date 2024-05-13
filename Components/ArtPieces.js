import ArtPiecePreview from "./ArtPiecesPreview";
import styled from "styled-components";

const ArtPiecesContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 50vw;
  list-style-type: none;
`;

const ArtPieceImage = styled.img`
  width: 100%;
  height: auto;
`;

function ArtPieces({ pieces }) {
  return (
    <ArtPiecesContainer>
      {pieces.map((piece, index) => (
        <ArtPiecePreview
          key={index}
          image={piece.imageSource}
          title={piece.name}
          artist={piece.artist}
        />
      ))}
    </ArtPiecesContainer>
  );
}

export default ArtPieces;
