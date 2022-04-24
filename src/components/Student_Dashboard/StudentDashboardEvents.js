import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Button from "@mui/material/Button";
import { mainListItems, secondaryListItems } from "./listItems";

import { DataGrid, GridToolbar } from "@mui/x-data-grid";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://www.rnsit.ac.in/">
        RNSIT
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const mdTheme = createTheme();

function DashboardContentEvents() {
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const columns = [
    { field: "id", headerName: "No.", flex: 1, minWidth: 50 },
    {
      field: "Logo",
      headerName: "Logo",
      flex: 1,
      minWidth: 100,
    },
    {
      field: "Company",
      headerName: "Company",
      flex: 1,
      minWidth: 200,
    },
    {
      field: "DriveDate",
      headerName: "Drive Date",
      type: "date",
      flex: 1,
      minWidth: 100,
    },
    {
      field: "ApplicationEndDate",
      headerName: "Application End Date",
      type: "date",
      // sortable: false,
      flex: 1,
      minWidth: 170,
    },
    {
      field: "Description",
      headerName: "Description",
      flex: 1,
      minWidth: 120,
    },
    {
      field: "Sector",
      headerName: "Sector",
      flex: 1,
      minWidth: 100,
    },
    {
      field: "Venue",
      headerName: "Venue",
      flex: 1,
      minWidth: 100,
    },
    {
      field: "Stages",
      headerName: "Stages",
      flex: 1,
      minWidth: 100,
    },
    {
      field: "CTC",
      headerName: "C.T.C.",
      flex: 1,
      minWidth: 100,
    },
    {
      field: "Apply",
      headerName: "Apply",
      flex: 1,
      minWidth: 100,
      renderCell: (params) => {
        return (
          <Box textAlign="center">
            <Button
              variant="contained"
              color="success"
              size="small"
              style={{ marginLeft: 16 }}
              onClick={() => {
                console.log(params.row.Apply);
              }}
            >
              APPLY
            </Button>
          </Box>
        );
      },
    },
  ];

  const rows = [
    {
      id: 1,
      Logo: "{image}",
      Company: "Heptagon",
      DriveDate: "22-05-2022",
      ApplicationEndDate: "10-04-2022",
      Description: "890",
      Sector: "1",
      Venue: "Banglore",
      Stages: "2",
      Apply: "{link}",
      CTC: "4.5",
    },
    {
      id: 2,
      Logo: "{image}",
      Company: "Cognizant",
      DriveDate: "25-05-2022",
      ApplicationEndDate: "15-04-2022",
      Description: "890",
      Sector: "1",
      Venue: "Banglore",
      Stages: "3",
      Apply: "{link}",
      CTC: "5.5",
    },
    {
      id: 3,
      Logo: "{image}",
      Company: "TCS",
      DriveDate: "29-05-2022",
      ApplicationEndDate: "10-04-2022",
      Description: "890",
      Sector: "2",
      Venue: "Mumbai",
      Stages: "2",
      Apply: "{link}",
      CTC: "7.5",
    },
  ];

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />

        <AppBar position="absolute" open={open} elevation={0}>
          <Toolbar
            sx={{
              background: "#021B38",
              pr: "24px", // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Dashboard{" "}
              <Typography variant="p" color="#ffeb3b">
                Events
              </Typography>
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>

        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List>{mainListItems}</List>
          <Divider />
          <List>{secondaryListItems}</List>
        </Drawer>

        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            minHeight: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    minHeight: "75vh",
                  }}
                >
                  {/* Company Data-Grid */}
                  <div style={{ height: 400, width: "100%" }}>
                    <DataGrid
                      rows={rows}
                      columns={columns}
                      components={{
                        Toolbar: GridToolbar,
                      }}
                    />
                  </div>
                </Paper>
              </Grid>
            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function StudentDashboardEvents() {
  return <DashboardContentEvents />;
}
