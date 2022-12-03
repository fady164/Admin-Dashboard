import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import AuthorsHouse from "./scenes/authorshouse";
import ReadersHouse from "./scenes/readershouse";
import Form from "./scenes/userform";
import Calender from "./scenes/calender";
import FAQ from "./scenes/faq";
import BooksHouse from "./scenes/bookshouse";
import Books from "./scenes/books";
import BookForm from "./scenes/bookform/BookForm";
import SliderControl from "./scenes/sliderControl";
import PackagesControl from "./scenes/packagesControl";
import UsersStore from "./scenes/usersStore";

function App() {
   const [theme, colorMode] = useMode();

   return (
      <ColorModeContext.Provider value={colorMode}>
         <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className="app">
               <Sidebar />
               <main className="content">
                  <Topbar />
                  <Routes>
                     <Route path="/" element={<AuthorsHouse />} />
                     <Route path="/authorshouse" element={<AuthorsHouse />} />
                     <Route path="/bookshouse" element={<BooksHouse />} />
                     <Route path="/readershouse" element={<ReadersHouse />} />
                     <Route path="/slidercontrol" element={<SliderControl />} />
                     <Route
                        path="/packagescontrol"
                        element={<PackagesControl />}
                     />
                     <Route path="/books" element={<Books />} />
                     <Route path="/users" element={<UsersStore />} />
                     <Route path="/bookform" element={<BookForm />} />
                     <Route path="/bookform/:id" element={<BookForm />} />
                     <Route path="/form" element={<Form />} />
                     <Route path="/calendar" element={<Calender />} />
                     <Route path="/faq" element={<FAQ />} />
                  </Routes>
               </main>
            </div>
         </ThemeProvider>
      </ColorModeContext.Provider>
   );
}

export default App;
