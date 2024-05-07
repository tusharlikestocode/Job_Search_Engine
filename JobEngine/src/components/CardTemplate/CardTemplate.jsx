/* eslint-disable no-unused-vars */
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Chip, Box, Button, AvatarGroup } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { useSelector } from "react-redux";
import SimpleDialog from "../DialogBox/DialogBox";
import "./CardTemplate.css";


export default function CardTemplate() {
  const [loading, setLoading] = React.useState(true);
  const [isLoadingMoreData, setIsLoadingMoreData] = React.useState(false);
  const [index, setIndex] = React.useState(1);
  const [data, setData] = React.useState([]);
  const [open,setOpen]= React.useState(false)
  //  accessing state present in the redux store
  const jobRole = useSelector((state) => state.filter.jobRole);
  const lowerCasedRoles = jobRole.map((e) => e.toLowerCase());
  const techStack = useSelector((state) => state.filter.techStack);
  const location = useSelector((state) => state.filter.location);
  const lowerCasedLocations = location.map((l) => l.toLowerCase());
  const mode = useSelector((state) => state.filter.mode);
  const lowerCasedMode = mode.map((el) => el.toLowerCase());
  const minBasePay = useSelector((state) => state.filter.minBasePay);
  const companyName = useSelector((state) =>
    state.filter.searchCompany.toLowerCase()
  );
  const minExperience = useSelector((state) => state.filter.minExperience);

  //fucntion to handle the dialog 
  const handleDialogBoxOpen = () => {
    setOpen(true);
  };

  const handleDialogBoxClose=()=>{
    setOpen(false)
  }
  //   UseEffect to fetch initial Data
  React.useEffect(() => {
    const fetchdata = async () => {
      let headersList = {
        "User-Agent": "Thunder Client (https://www.thunderclient.com)",
        Accept: "",
        "Content-Type": "application/json",
      };

      let bodyContent = JSON.stringify({
        limit: 20,
        offset: index,
      });
      let response;

      try {
        response = await fetch(
          "https://api.weekday.technology/adhoc/getSampleJdJSON?Content-Type=application%2Fjson",
          {
            method: "POST",
            body: bodyContent,
            headers: headersList,
          }
        );
      } catch (error) {
        console.log("Error Fetching data ", error);
      } finally {
        let data = await response.json();
        console.log(data.jdList);
        setData(data.jdList);
        setLoading(false);
      }
    };
    fetchdata();
  }, [index]);

  //Function to fetch more data by changing the values of the offset
  const fetchMoreData = React.useCallback(async () => {
    if (isLoadingMoreData) return;

    setIsLoadingMoreData(true);

    let headersList = {
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      Accept: "",
      "Content-Type": "application/json",
    };

    let bodyContent = JSON.stringify({
      limit: 10,
      offset: index,
    });
    let response;

    try {
      response = await fetch(
        "https://api.weekday.technology/adhoc/getSampleJdJSON?Content-Type=application%2Fjson",
        {
          method: "POST",
          body: bodyContent,
          headers: headersList,
        }
      );
    } catch (error) {
      console.log("Error Fetching data ", error);
    } finally {
      let data = await response.json();
      console.log(data.jdList);
      setData((prevData) => [...prevData, ...data.jdList]);
      setIndex((prevIndex) => prevIndex + 1);
      setIsLoadingMoreData(false);
    }
  }, [index, isLoadingMoreData]);

  //useEffect to call the fetchMoreData function once the end of the page is reached
  React.useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } =
        document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight - 20) {
        fetchMoreData();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [fetchMoreData]);

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography>Load</Typography>
        <CircularProgress />
      </Box>
    );
  }

  //function filter null values
  function filterNullValues(item) {
    if (
      item.maxExp == null ||
      item.minExp == null ||
      item.minJdSalary == null ||
      item.maxJdSalary == null
    ) {
      return false;
    } else {
      return true;
    }
  }

  function filteringByLocation(item) {
    if (lowerCasedLocations.length === 0) {
      return true;
    } else if (lowerCasedLocations.includes(item.location.toLowerCase())) {
      return true;
    } else {
      return false;
    }
  }
  // function to filter by Job Roles
  function filteringByRoles(item) {
    if (lowerCasedRoles.length === 0) {
      return true;
    } else if (lowerCasedRoles.includes(item.jobRole.toLowerCase())) {
      return true;
    } else {
      return false;
    }
  }
  // function to filter by Min Experience
  function filteringByExp(item) {
    if (minExperience == "All") {
      return true;
    } else if (item.minExp >= parseInt(minExperience)) {
      return true;
    } else {
      return false;
    }
  }
  //   function to filter by minBasePay
  function filteringByPay(item) {
    if (minBasePay == "All") {
      return true;
    } else if (item.minJdSalary >= parseInt(minBasePay.slice(0,-1))) {
      return true;
    } else {
      return false;
    }
  }
  //   function to search data by company name
  function search(item) {
    if (companyName == "") {
      return true;
    } else if (item.companyName.toLowerCase().includes(companyName)) {
      return true;
    } else {
      return false;
    }
  }

  //   function to filter data by mode
  function filteringByMode(item) {
    if (lowerCasedMode.length == 0 || lowerCasedMode.includes("in-office")) {
      return true;
    } else if (
      lowerCasedMode.includes("remote") &&
      lowerCasedMode.includes(item.location)
    ) {
      return true;
    } else {
      return false;
    }
  }

  //function ot combine filters
  const combineFilters =
    (...filters) =>
    (item) => {
      return filters.map((filter) => filter(item)).every((x) => x === true);
    };

  return (
    <>
      <Box
        sx={{
          mt: 2,
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        {data
          .filter(
            combineFilters(
              filterNullValues,
              filteringByExp,
              filteringByLocation,
              filteringByRoles,
              filteringByPay,
              search,
              filteringByMode
            )
          )
          .map((d) => (
            <Card
              key={d.jdUid}
              sx={{
                mt: 4,
                maxWidth: 345,
                boxShadow: 3,
                borderRadius: 5,
                height: "100%",
              }}
            >
              <CardContent>
                <Chip
                  label="⌛ Posted 10 days ago"
                  variant="outlined"
                  sx={{
                    borderColor: "lightgrey",
                    boxShadow: "0px 1px lightgrey",
                    borderRadius: 3,
                    padding: 0.1,
                  }}
                />
              </CardContent>
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Avatar alt="Remy Sharp" src={d.logoUrl} sx={{ mr: 1 }} />
                  <Box>
                    <Typography sx={{ color: "text.secondary", fontSize: 15 }}>
                      {d.companyName}
                    </Typography>
                    <Typography sx={{ fontSize: 20 }}>
                      {d.jobRole.toUpperCase()}
                    </Typography>
                  </Box>
                </Box>
                <Typography sx={{ ml: 6, fontSize: 14, fontWeight: "650" }}>
                  {d.location.toUpperCase()}
                </Typography>
                <Typography sx={{ mt: 2 }}>
                  Estimated Salary: {d.salaryCurrencyCode} {d.minJdSalary} -
                  {d.maxJdSalary} K ✅
                </Typography>
                <Typography className="fadedtext" sx={{ mt: 2, height: 200 }}>
                  <b> Job Description </b> <br />
                  {d.jobDetailsFromCompany}
                </Typography>
                <Button
                  sx={{
                    width: "100%",
                    textAlign: "center",
                    zIndex: 999,
                    mt: -0.5,
                    color: "#4943da",
                  }}
                  onClick={handleDialogBoxOpen}
                >
                  View Job
                </Button>
                <SimpleDialog
                jobDescription={d.jobDetailsFromCompany}
                op={open}
                handleClose={handleDialogBoxClose}
                />
                <Typography
                  sx={{
                    marginBottom: 1,
                    marginTop: 1,
                    color: "text.secondary",
                  }}
                >
                  Minimun Experience:
                  <Typography
                    sx={{
                      color: "text.primary",
                    }}
                  >
                    {d.minExp} years
                  </Typography>
                </Typography>
                <Button
                  variant="contained"
                  sx={{ width: "100%", backgroundColor: "#54efc3", mb: 1 }}
                >
                  <Typography color={"black"}>⚡ Easy Apply</Typography>
                </Button>
                <Button
                  variant="contained"
                  sx={{ width: "100%", backgroundColor: "#4943da" }}
                >
                  <AvatarGroup max={3} sx={{ mr: 1 }}>
                    <Avatar sizes="large" sx={{ width: 24, height: 24 }} />
                    <Avatar sizes="large" sx={{ width: 24, height: 24 }} />
                  </AvatarGroup>
                  <Typography>Unlock Referral asks</Typography>
                </Button>
              </CardContent>
            </Card>
          ))}
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "center", width: "100%", m: 3 }}
      >
        {isLoadingMoreData && <CircularProgress />}
      </Box>

    </>
  );
}
