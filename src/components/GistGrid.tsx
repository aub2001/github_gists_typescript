import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { RootStore } from "../state/store";
import SingleCard from "./CardComponent";
import { Container } from "./Container";
import { useState } from "react";

import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { GistType } from "../state/actions/gistActionTypes";


const GistGrid = () => {

  const cardsPerPage = 6;
  const [page, setPage] = useState(1);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage);
  };


  const theme = useSelector((state: RootStore) => state.theme)
  const gistState = useSelector((state: RootStore) => state.gist.gist);
  const loadingState = useSelector((state: RootStore) => state.gist.loading)

  const renderedGrid =  
    <Grid container>
        {gistState && !loadingState &&
            (gistState.length > 1 ? gistState.slice((page-1) * cardsPerPage, (page - 1) * cardsPerPage + cardsPerPage).map((gist: GistType) => (
            <Grid item key={gist.id} xs={12} md={6} lg={4}>
                <SingleCard 
                  image={gist.owner.avatar_url} 
                  id={gist.id}
                  login={gist.owner.login}
                  filename={Object.values(gist.files)[0].filename}
                  type={Object.values(gist.files)[0].type}
                 />
            </Grid>    
        ))
        :
        <Grid item key={gistState.id} xs={12} md={6} lg={4}>
        <SingleCard 
          image={gistState.owner.avatar_url} 
          id={gistState.id}
          login={gistState.owner.login}
          filename={Object.values(gistState.files)[0].filename}
          type={Object.values(gistState.files)[0].type}
         />
        </Grid>
        )}
    </Grid>
  
  return (
    <Container>
      {renderedGrid}
      <Stack sx={{position: 'absolute',  left: '50%', translate: ('-50%') , }}>
        <Pagination 
          showFirstButton 
          showLastButton 
          count={Math.ceil( gistState.length / cardsPerPage )} 
          page={page}
          onChange={handleChangePage}
        />
      </Stack>
    </Container>
  )
}

export default GistGrid