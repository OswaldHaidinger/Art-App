import useSWR from "swr";
import ArtPieces from "../Components/ArtPieces";
import styled from "styled-components";

const ArtAppContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100vw;
  list-style-type: none;
  background: #;
`;

const ArtHeadline = styled.h1`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100vw;
  list-style-type: none;
`;

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function Index() {
  const { data, error } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  console.log(data);
  return (
    <>
      <ArtAppContainer>
        <ArtHeadline>Art App</ArtHeadline>
        <ArtPieces pieces={data} />
      </ArtAppContainer>
    </>
  );
}

export default Index;
