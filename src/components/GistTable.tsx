import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow,
} from "@mui/material";
import TablePagination from "@mui/material/TablePagination";

import { useSelector } from "react-redux";
import { RootStore } from "../state/store";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GistType } from "../state/actions/gistActionTypes";


  const GistTable = () => {

    const theme = useSelector((state: RootStore) => state.theme)
    const gistState = useSelector((state: RootStore) => state.gist.gist);
    const loadingState = useSelector((state: RootStore) => state.gist.loading);
    const navigate = useNavigate();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);


    const handleChangePage = (
      event: React.MouseEvent<HTMLButtonElement> | null,
      newPage: number,
    ) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };

    const handleRowClick = (id: string) => {
        const path = `gist/${id}`;
        navigate(path);
    }




    // CONSOLING THE STORE 
    console.log("store: " , gistState)



    const tableHeaders: Array<string> = ["", "Name", "Date" , "FileName" , "FileType"];
    const renderedTable = gistState &&    
       <TableContainer
         component={Paper}
         sx={{height: "80vh" , width: "80vw"}}
       >
           <Table stickyHeader={true} >
              <TableHead sx={{ "& .MuiTableCell-stickyHeader": {backgroundColor: theme.primary_color_light} }}>
                <TableRow>
                  {tableHeaders.map(header => (
                    <TableCell scope="header" sx={{color : theme.font_color}}>{header}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                { gistState && 
                  (gistState.length > 1 ? gistState.slice(page*rowsPerPage, page * rowsPerPage + rowsPerPage).map((gist: GistType) => (
                  <TableRow key={gist.id} sx={{backgroundColor: theme.content}} onClick={() => handleRowClick(gist.id)}>
                    <TableCell scope="row">
                      <img src={gist.owner.avatar_url} alt="" style={{width: 50,  height: 50, borderRadius: '50%'}} />
                    </TableCell>
                    <TableCell scope="row" sx={{color : theme.font_color}}>
                      {gist.owner.login}
                    </TableCell>
                    <TableCell scope="row" sx={{color : theme.font_color}}>
                      {gist.updated_at}
                    </TableCell>
                    <TableCell scope="row" sx={{color : theme.font_color}}>
                      {Object.values(gist.files)[0].filename ? Object.values(gist.files)[0].filename.length > 15 ? Object.values(gist.files)[0].filename.slice(0,15) + "..." : Object.values(gist.files)[0].filename : "-"}
                    </TableCell>
                    <TableCell scope="row" sx={{color : theme.font_color}}>
                      {Object.values(gist.files)[0].type ? Object.values(gist.files)[0].type : "-"}
                    </TableCell>
                  </TableRow>
                ))
                :
                <TableRow key={gistState.id} sx={{backgroundColor: theme.content}} onClick={() => handleRowClick(gistState.id)}>
                    <TableCell scope="row">
                      <img src={gistState.owner.avatar_url} alt="" style={{width: 50,  height: 50, borderRadius: '50%'}} />
                    </TableCell>
                    <TableCell scope="row" sx={{color : theme.font_color}}>
                      {gistState.owner.login}
                    </TableCell>
                    <TableCell scope="row" sx={{color : theme.font_color}}>
                      {gistState.updated_at}
                    </TableCell>
                    <TableCell scope="row" sx={{color : theme.font_color}}>
                      {Object.values(gistState.files)[0].filename ? Object.values(gistState.files)[0].filename.length > 15 ? Object.values(gistState.files)[0].filename.slice(0,15) + "..." : Object.values(gistState.files)[0].filename : "-"}
                    </TableCell>
                    <TableCell scope="row" sx={{color : theme.font_color}}>
                      {Object.values(gistState.files)[0].type ? Object.values(gistState.files)[0].type : "-"}
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
              <TableFooter>
                
                  <TablePagination
                        rowsPerPageOptions={[5,10,20,30]}
                        component='div'
                        count={gistState.length}
                        page={page}
                        rowsPerPage={rowsPerPage}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                        showFirstButton
                        showLastButton
                  />     
              
              </TableFooter>
           </Table>      
       </TableContainer>
  

    return (
      <div style={{display: 'flex' , justifyContent: 'center', alignItems: 'center' , height: '90vh'}}>
        {renderedTable ? renderedTable : " NO DATA TO DISPLAY"}
      </div>
    )
  }
  
  export default GistTable