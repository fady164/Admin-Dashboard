import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { tokens } from "../../theme";
import { Box, Button, TextField, Typography, useTheme } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import Header from "../../components/Header";
import useMediaQuery from "@mui/material/useMediaQuery";

const initialValues = {
   title: "",
   subTitle: "",
   description: "",
   price: "",
};
const userSchema = yup.object().shape({
   title: yup.string(),
   subTitle: yup.string(),
   description: yup.string(),
   price: yup.string(),
});
export default function PackagesControl() {
   const theme = useTheme();
   const colors = tokens(theme.palette.mode);
   const [formValue, setFormValue] = useState({});
   const isNonMobile = useMediaQuery("(min-width:600px)");

   const handleFormSubmit = (book) => {
      console.log(formValue);
      console.log(selectorValue);
   };

   const operationHandler = (e) => {
      setFormValue({
         ...formValue,
         [e.target.name]: e.target.value,
      });
   };
   //SLECETOR LOGIC
   const [selectorValue, setSelectorValue] = React.useState("");
   const handleChange = (event) => {
      setSelectorValue(event.target.value);
   };
   return (
      <Box m="20px">
         <Header title="Edit Your Package" />
         <Typography>Choose your package:</Typography>
         <FormControl
            sx={{
               m: 2,
               ml: 5,
               mb: 5,
               minWidth: 120,
            }}
         >
            <Select
               sx={{
                  backgroundColor: colors.blueAccent[100],
                  color: colors.primary[900],
               }}
               value={selectorValue}
               onChange={handleChange}
               displayEmpty
               inputProps={{ "aria-label": "Without label" }}
            >
               <MenuItem value="">
                  <em>None</em>
               </MenuItem>
               <MenuItem value={1}>Package 1</MenuItem>
               <MenuItem value={2}>Package 2</MenuItem>
               <MenuItem value={3}>Package 3</MenuItem>
               <MenuItem value={4}>Package 4</MenuItem>
            </Select>
         </FormControl>
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
                        mx: "5",
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
                        name="title"
                        error={!!touched.title && !!errors.title}
                        helperText={touched.title && errors.title}
                        sx={{ gridColumn: "span 3  " }}
                     />
                     <TextField
                        fullWidth
                        variant="filled"
                        type="text"
                        label="Price"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.price}
                        name="price"
                        error={!!touched.price && !!errors.price}
                        helperText={touched.price && errors.price}
                        sx={{ gridColumn: "span 1" }}
                     />
                     <TextField
                        fullWidth
                        variant="filled"
                        type="text"
                        label="Sub Title"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.subTitle}
                        name="subTitle"
                        error={!!touched.subTitle && !!errors.subTitle}
                        helperText={touched.subTitle && errors.subTitle}
                        sx={{ gridColumn: "span 4" }}
                     />
                     <TextField
                        fullWidth
                        variant="filled"
                        type="text"
                        label="Description"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.description}
                        name="description"
                        error={!!touched.description && !!errors.description}
                        helperText={touched.description && errors.description}
                        sx={{ gridColumn: "span 4" }}
                     />
                  </Box>
                  <Box display="flex" justifyContent="end" mt="20px">
                     <Button
                        type="submit"
                        color="secondary"
                        variant="contained"
                     >
                        EDIT
                     </Button>
                  </Box>
               </form>
            )}
         </Formik>
      </Box>
   );
}
