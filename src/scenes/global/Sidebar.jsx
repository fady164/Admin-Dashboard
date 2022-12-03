import { React, useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CreateIcon from "@mui/icons-material/Create";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import BookIcon from "@mui/icons-material/Book";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import FilterIcon from "@mui/icons-material/Filter";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import StyleIcon from "@mui/icons-material/Style";
import GroupIcon from "@mui/icons-material/Group";

const Item = ({ title, to, icon, selected, setSelected }) => {
   const theme = useTheme();
   const colors = tokens(theme.palette.mode);
   return (
      <MenuItem
         active={selected === title}
         style={{
            color: colors.grey[100],
         }}
         onClick={() => setSelected(title)}
         icon={icon}
      >
         <Typography>{title}</Typography>
         <Link to={to} />
      </MenuItem>
   );
};

export default function Sidebar() {
   const theme = useTheme();
   const colors = tokens(theme.palette.mode);
   const [isCollapsed, setIsCollapsed] = useState(false);
   const [selected, setSelected] = useState("Dashboard");

   return (
      <div>
         <Box
            sx={{
               "& .pro-sidebar-inner": {
                  background: `${colors.primary[400]} !important `,
               },
               "& .pro-icon-wrapper": {
                  backgroundColor: "transparent !important",
               },
               "& .pro-inner-item": {
                  padding: "5px 35px 5px 20px !important",
               },
               "& .pro-inner-item:hover": {
                  color: "#868dfb !important",
               },
               "& .pro-menu-item.active": {
                  color: "#6870fa !important",
               },
            }}
         >
            <ProSidebar collapsed={isCollapsed}>
               <Menu iconShape="square">
                  {/* LOGO AND MENU ICON */}
                  <MenuItem
                     onClick={() => setIsCollapsed(!isCollapsed)}
                     icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                     style={{
                        margin: "10px 0 20px 0",
                        color: colors.grey[100],
                     }}
                  >
                     {!isCollapsed && (
                        <Box
                           display="flex"
                           justifyContent="space-between"
                           alignItems="center"
                           ml="15px"
                        >
                           <Typography variant="h3" color={colors.grey[100]}>
                              Admin
                           </Typography>
                           <IconButton
                              onClick={() => setIsCollapsed(!isCollapsed)}
                           >
                              <MenuOutlinedIcon />
                           </IconButton>
                        </Box>
                     )}
                  </MenuItem>

                  {/* LOGO */}
                  {!isCollapsed && (
                     <Box mb="25px">
                        <Box
                           display="flex"
                           justifyContent="center"
                           alignItems="center"
                        >
                           <img
                              alt="porfile-user"
                              width="100px"
                              height="100px"
                              // src="https://raw.githubusercontent.com/ed-roh/react-admin-dashboard/master/public/assets/user.png"
                              src="./logo.jpg"
                              style={{
                                 objectFit: "cover",
                                 cursor: "pointer",
                                 borderRadius: "10%",
                              }}
                           />
                        </Box>
                     </Box>
                  )}
                  {/* HOUSES */}
                  <Box paddingLeft={isCollapsed ? undefined : "10%"}>
                     <Typography
                        variant="h6"
                        color={colors.grey[300]}
                        sx={{ m: "15px 0 5px 20px" }}
                     >
                        Houses
                     </Typography>
                     <Item
                        title="Authors House"
                        to="/authorshouse"
                        icon={<CreateIcon />}
                        selected={selected}
                        setSelected={setSelected}
                     />
                     <Item
                        title="Books House"
                        to="/bookshouse"
                        icon={<BookIcon />}
                        selected={selected}
                        setSelected={setSelected}
                     />
                     <Item
                        title="Readers House"
                        to="/readershouse"
                        icon={<LocalLibraryIcon />}
                        selected={selected}
                        setSelected={setSelected}
                     />
                     {/* CONTROLLERS */}
                     <Typography
                        variant="h6"
                        color={colors.grey[300]}
                        sx={{ m: "15px 0 5px 20px" }}
                     >
                        Controllers
                     </Typography>
                     <Item
                        title="Slider Control"
                        to="/slidercontrol"
                        icon={<FilterIcon />}
                        selected={selected}
                        setSelected={setSelected}
                     />
                     <Item
                        title="Packages Control"
                        to="/packagescontrol"
                        icon={<LocalOfferIcon />}
                        selected={selected}
                        setSelected={setSelected}
                     />
                     {/* ECOMMERCE */}
                     <Typography
                        variant="h6"
                        color={colors.grey[300]}
                        sx={{ m: "15px 0 5px 20px" }}
                     >
                        Store
                     </Typography>
                     <Item
                        title="Books"
                        to="/books"
                        icon={<StyleIcon />}
                        selected={selected}
                        setSelected={setSelected}
                     />
                     <Item
                        title="Users"
                        to="/users"
                        icon={<GroupIcon />}
                        selected={selected}
                        setSelected={setSelected}
                     />

                     {/* PAGES */}
                     <Typography
                        variant="h6"
                        color={colors.grey[300]}
                        sx={{ m: "15px 0 5px 20px" }}
                     >
                        Pages
                     </Typography>
                     <Item
                        title="Profile Form"
                        to="/form"
                        icon={<PersonOutlinedIcon />}
                        selected={selected}
                        setSelected={setSelected}
                     />
                     <Item
                        title="Calendar"
                        to="/calendar"
                        icon={<CalendarTodayOutlinedIcon />}
                        selected={selected}
                        setSelected={setSelected}
                     />
                     <Item
                        title="FAQ Page"
                        to="/faq"
                        icon={<HelpOutlineOutlinedIcon />}
                        selected={selected}
                        setSelected={setSelected}
                     />
                  </Box>
               </Menu>
            </ProSidebar>
         </Box>
      </div>
   );
}
