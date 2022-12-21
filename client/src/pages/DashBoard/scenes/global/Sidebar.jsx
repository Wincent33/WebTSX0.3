import { useState } from "react";
import { ProSidebarProvider, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
// import "react-pro-sidebar/dist/css/styles.css";
// import { tokens } from "../../theme";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { BiMenuAltLeft, BiHome, BiGroup } from "react-icons/bi";
import { RiMenuFoldLine, RiContactsBook2Line } from "react-icons/ri";
import { TbFileInvoice } from "react-icons/tb";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [selected, setSelected] = useState("Dashboard");

  const Item = ({ title, to, icon, selected, setSelected }) => {
    return (
      <NavLink to={to}>
        <MenuItem
          className="text-primary5"
          active={selected === title}
          onClick={() => setSelected(title)}
          icon={icon}
        >
          {!isCollapsed ? <Typography>{title}</Typography> : <></>}
        </MenuItem>
      </NavLink>
    );
  };
  return (
    <Box className="bg-white h-[100vh] sticky">
      <ProSidebarProvider collapsed={isCollapsed}>
        <Menu closeOnClick={true} className={isCollapsed ? "w-24" : "w-80"}>
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <BiMenuAltLeft size={60} /> : undefined}
            className="mt-2 mr-0 mb-5 ml-0 text-primary4"
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <RiMenuFoldLine size={30} className="text-primary4" />
                </IconButton>
                <Typography variant="h4" color={"gray"}>
                  Welcome, Josephine
                </Typography>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={`../../assets/user.png`}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={"grey"}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Josephine RL
                </Typography>
                <Typography variant="h5" color={"green"}>
                  Owner of Wincent's Heart
                </Typography>
              </Box>
            </Box>
          )}

          {/* This is the Start of the menus */}

          <Box>
            <Item
              title="Dashboard"
              to="/dashboard"
              icon={<BiHome />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="DashboardExample"
              to="/dashboard/dashexample"
              icon={<BiHome />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={"grey"}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Data
            </Typography>
            <Item
              title="Manage Team"
              to="/dashboard/team"
              icon={<BiGroup />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Contacts Information"
              to="/dashboard/contacts"
              icon={<RiContactsBook2Line />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Invoices Balances"
              to="/dashboard/invoices"
              icon={<TbFileInvoice />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={"grey"}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Pages
            </Typography>
            <Item
              title="Profile Form"
              to="/dashboard/form"
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Calendar"
              to="/dashboard/calendar"
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="FAQ Page"
              to="/dashboard/faq"
              icon={<HelpOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={"grey"}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Charts
            </Typography>
            <Item
              title="Bar Chart"
              to="/dashboard/bar"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Pie Chart"
              to="/dashboard/pie"
              icon={<PieChartOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Line Chart"
              to="/dashboard/line"
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Geography Chart"
              to="/dashboard/geography"
              icon={<MapOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebarProvider>
    </Box>
  );
};

export default Sidebar;
