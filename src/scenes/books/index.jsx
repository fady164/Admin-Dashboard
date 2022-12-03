import React from "react";
import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useEffect } from "react";
import { booksActions } from "../../store/reducers/bookSlice";
import { deleteBook, getBooks } from "../../store/reducers/bookSlice";

export default function Books() {
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const { changeBookData } = booksActions;
   const { books } = useSelector((state) => state.books);

   useEffect(() => {
      dispatch(getBooks());
   }, []);
   const theme = useTheme();
   const colors = tokens(theme.palette.mode);
   const columns = [
      { field: "id", headerName: "ID" },
      {
         field: "title",
         headerName: "Title",
         flex: 1,
         cellClassName: "name-column--cell",
      },
      {
         field: "price",
         headerName: "Price",
         headerAlign: "left",
         align: "left",
      },
      {
         field: "desc",
         headerName: "Description",
         type: "text",
         flex: 1,
      },

      {
         field: "author",
         headerName: "Author",
         flex: 1,
      },
      {
         field: "category",
         headerName: "Category",
         flex: 1,
      },
      // {
      //    field: "accessLevel",
      //    headerName: "Package",
      //    headerAlign: "center",
      //    flex: 1,
      //    height: 550,
      //    cellClassName: "img-column--cell",
      //    renderCell: ({ row: { imageSrc } }) => {
      //       return (
      //          <Box height="80%" width="100%" sx={{ height: "100%" }}>
      //             <img src={imageSrc} alt="" />
      //          </Box>
      //       );
      //    },
      // },
      {
         field: "test",
         headerName: "Actions",
         headerAlign: "center",
         flex: 1,
         renderCell: (params) => {
            const actionHandler = (e) => {
               e.stopPropagation();
               const api = params.api;
               const thisRow = {};

               api.getAllColumns()
                  .filter((c) => c.field !== "__check__" && !!c)
                  .forEach(
                     (c) =>
                        (thisRow[c.field] = params.getValue(params.id, c.field))
                  );
               if (e.target.innerText == "DELETE") {
                  dispatch(deleteBook(thisRow));
               }
               if (e.target.innerText == "EDIT") {
                  dispatch(changeBookData(thisRow));
                  navigate(`/bookform/${thisRow.id}`);
               }
            };
            return (
               <Box>
                  <Button
                     variant="contained"
                     color="error"
                     name="id"
                     sx={{
                        mr: "5px",
                     }}
                     onClick={actionHandler}
                  >
                     <Typography color={colors.grey[100]}>Delete</Typography>
                  </Button>
                  <Button
                     sx={{
                        ml: "5px",
                     }}
                     variant="contained"
                     color="success"
                     onClick={actionHandler}
                  >
                     <Typography color={colors.grey[100]}>Edit</Typography>
                  </Button>
               </Box>
            );
         },
      },
   ];

   const addNewBook = () => {
      navigate("/bookform");
   };
   return (
      <Box m="20px">
         <Button
            onClick={addNewBook}
            variant="contained"
            sx={{
               m: "20px",
               color: colors.primary[900],
               backgroundColor: colors.blueAccent[400],
            }}
         >
            Add New Book
         </Button>
         <Box
            m="40px 0 0 0"
            height="85vh"
            sx={{
               "& .MuiDataGrid-root": {
                  border: "none",
               },
               "& .MuiDataGrid-cell": {
                  borderBottom: "none",
               },
               "& .name-column--cell": {
                  color: colors.greenAccent[300],
               },
               "& .img-column--cell": {},
               "& .MuiDataGrid-columnHeader": {
                  backgroundColor: colors.blueAccent[700],
                  borderBottom: "none",
               },
               "& .MuiDataGrid-virtualScroller": {
                  backgroundColor: colors.primary[400],
               },
               "& .MuiDataGrid-footerContainer": {
                  borderTop: "none",
                  backgroundColor: colors.blueAccent[700],
               },
               "& .MuiCheckbox-root": {
                  color: `${colors.greenAccent[200]} !important`,
               },
               "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                  color: `${colors.grey[100]} !important`,
               },
            }}
         >
            <DataGrid
               rows={books}
               columns={columns}
               components={{
                  Toolbar: GridToolbar,
               }}
            />
         </Box>
      </Box>
   );
}
