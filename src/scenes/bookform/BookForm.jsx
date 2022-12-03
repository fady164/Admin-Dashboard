import React, { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBook, updateBook } from "../../store/reducers/bookSlice";
import { useEffect } from "react";

const initialValues = {
   title: "",
   price: "",
   author: "",
   desc: "",
   category: "",
   imageSrc: "",
};

const userSchema = yup.object().shape({
   title: yup.string(),
   price: yup.string(),
   author: yup.string(),
   desc: yup.string(),
   category: yup.string(),
   imageSrc: yup.string(),
});

export default function BookForm() {
   const [formValue, setFormValue] = useState({});
   const { id } = useParams();

   const { dataEditBook } = useSelector((state) => state.books);
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const isNonMobile = useMediaQuery("(min-width:600px)");
   const handleFormSubmit = (book) => {
      if (id) {
         dispatch(updateBook({ id, formValue }));
      } else {
         dispatch(addBook(book));
      }
      navigate("/books");
   };

   useEffect(() => {
      if (id) {
         setFormValue(dataEditBook);
      }
   }, []);
   const operationHandler = (e) => {
      setFormValue({
         ...formValue,
         [e.target.name]: e.target.value,
      });
   };

   return (
      <Box m="20px">
         <Header title="BOOK FORM" subTitle="" />
         <Formik
            onSubmit={handleFormSubmit}
            initialValues={initialValues}
            validationSchema={userSchema}
         >
            {({
               values,
               errors,
               touched,
               handleBlur,
               handleChange,
               handleSubmit,
            }) => (
               <form onSubmit={handleSubmit} onChange={operationHandler}>
                  <Box
                     display="grid"
                     gap="30px"
                     gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                     sx={{
                        "& > div": {
                           gridColumn: isNonMobile ? undefined : "span 4",
                        },
                     }}
                  >
                     <TextField
                        fullWidth
                        variant="filled"
                        type="text"
                        label="Title"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.title}
                        placeholder={id ? dataEditBook.title : ""}
                        name="title"
                        error={!!touched.title && !!errors.title}
                        helperText={touched.title && errors.title}
                        sx={{ gridColumn: "span 2" }}
                     />
                     <TextField
                        fullWidth
                        variant="filled"
                        type="text"
                        label="Price"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.price}
                        placeholder={id ? dataEditBook.price : ""}
                        name="price"
                        error={!!touched.price && !!errors.price}
                        helperText={touched.price && errors.price}
                        sx={{ gridColumn: "span 2" }}
                     />
                     <TextField
                        fullWidth
                        variant="filled"
                        type="text"
                        label="Author"
                        onBlur={handleBlur}
                        placeholder={id ? dataEditBook.author : ""}
                        onChange={handleChange}
                        value={values.author}
                        name="author"
                        error={!!touched.author && !!errors.author}
                        helperText={touched.author && errors.author}
                        sx={{ gridColumn: "span 4" }}
                     />
                     <TextField
                        fullWidth
                        variant="filled"
                        type="text"
                        label="Description"
                        placeholder={id ? dataEditBook.desc : ""}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.desc}
                        name="desc"
                        error={!!touched.desc && !!errors.desc}
                        helperText={touched.desc && errors.desc}
                        sx={{ gridColumn: "span 4" }}
                     />
                     <TextField
                        fullWidth
                        variant="filled"
                        type="text"
                        label="Category"
                        placeholder={id ? dataEditBook.category : ""}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.category}
                        name="category"
                        error={!!touched.category && !!errors.category}
                        helperText={touched.category && errors.category}
                        sx={{ gridColumn: "span 4" }}
                     />
                     <TextField
                        fullWidth
                        variant="filled"
                        type="text"
                        label="Image Source"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.imageSrc}
                        name="imageSrc"
                        error={!!touched.imageSrc && !!errors.imageSrc}
                        helperText={touched.imageSrc && errors.imageSrc}
                        sx={{ gridColumn: "span 4" }}
                     />
                  </Box>
                  <Box display="flex" justifyContent="end" mt="20px">
                     {id ? (
                        <Button
                           type="submit"
                           color="secondary"
                           variant="contained"
                        >
                           Edit User
                        </Button>
                     ) : (
                        <Button
                           type="submit"
                           color="secondary"
                           variant="contained"
                        >
                           Add New Book
                        </Button>
                     )}
                  </Box>
               </form>
            )}
         </Formik>
      </Box>
   );
}
