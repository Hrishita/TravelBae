import React, { useEffect, useState } from "react";
import { Grid, Divider } from "@mui/material";
import NavBar from "../containers/NavBar";
import { Box } from "@material-ui/core";
import Footer from "../containers/Footer";
// import Pagination from "../containers/Pagination";
import AccommodationSearchBoxComp from "../components/AccommodationSearch";
import HorizontralCardComp from "../components/HorizontalCard";
import Filter from "../containers/Filter";
// import data from "../containers/Filter/mockData";
import FilterMenu from "../containers/FilterMenu";
import accommodationFilter from "../containers/AccommodationFIlters";
import axios from "axios";
import { BACKEND_URL } from "../config/index";
import AccommodationSortDropdown from "../components/AccommodationSortDropdown";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import usePagination from "../containers/UsePagination";

function AccommodationListPage() {
  const [allHotels, setAllHotels] = useState([]);

  let [keyword, setKeyword] = useState({
    keyword:"",
    cinDate:"",
    coutDate:""
  });
  let [sort, setSort] = useState(0);

  const [filtering, setFiltering] = useState({});

  const handleChange = (checkedItems) => {
    setFiltering({
      tags: checkedItems,
    });
  };

  const handleClearAll = () => {
  };

  // use effect for calling SearchAccommodation Service in Backend. Here, I'm passing hotel name which we are getting from
  // search component and Sort which we are getting from AccommodationSortDropdown Component.
  useEffect(() => {
    axios
      .post(`${BACKEND_URL}/acc/searchAccommodation`, {
        hotel_name: keyword.keyword,
        cin: keyword.cinDate,
        cout: keyword.coutDate,
        sort_type: sort,
        tags: filtering,
      })
      .then((res) => {
        setAllHotels(res.data.data);
      });
  },[filtering,keyword,sort]);

  const [page, setPage] = useState(1);
  const PER_PAGE = 9;
  const count = Math.ceil(allHotels.length / PER_PAGE);

  const handleChange1 = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };

  const _DATA = usePagination(allHotels, PER_PAGE);

  return (
    <Grid container spacing={0.5}>
      <Grid item xs={12}>
        <NavBar />
      </Grid>
      <Grid item xs={12}>
            <Box
              component="img"
              sx={{
                height: 600,
                width: "100%", 
                borderRadius: 2,
                p:4
              }}
              title="main image accommodation"
              alt="The house from the offer."
              src="https://images.pexels.com/photos/594077/pexels-photo-594077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
      </Grid>
      <Grid item xs={12}>
        <Box pt={4} pb={4}>
          <AccommodationSearchBoxComp keyword={setKeyword} />
          <Grid
            item
            sx={{ display: { xs: "block", md: "none" } }}
            md={0}
            xs={12}
            className="text-align-center"
          >
            <FilterMenu filterProperties={accommodationFilter}></FilterMenu>
          </Grid>
        </Box>
      </Grid>

      <Grid item xs={12}>
        <Box>
          <Divider />
        </Box>
      </Grid>

      <Grid item xs={12}>
        <Grid container justifyContent="center" alignItems="center">
          <Box
            component="span"
            sx={{
              fontSize: 24,
              fontFamily: "Arial",
              fontWeight: "bold",
              pt: 2,
            }}
          >
            Our top picked hotels for you...
          </Box>
        </Grid>
      </Grid>

      <Grid container>
        <Box sx={{flexGrow:1}}></Box>
        <Box sx={{pr:20}}>
          <AccommodationSortDropdown sortingType={setSort} />
        </Box>
      </Grid>

      <Grid item>
        <Box sx={{ display: { xs: "none", md: "block" } }} md={2} xs={0}>
          <Filter
            filterProperties={accommodationFilter}
            handleChange={handleChange}
            handleClearAll={handleClearAll}
          ></Filter>
        </Box>
      </Grid>

      <Grid item xs={10}>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {/* {hotelList.map((myVariable) => {
            return (
              <HorizontralCardComp
                name={myVariable.name}
                address={myVariable.address}
                image={myVariable.image}
                price={myVariable.price}
                desc={myVariable.desc}
              />
            );
          })} */}
          {_DATA.currentData().map((myVariable, index) => {
            return (
              <HorizontralCardComp
                key={index}
                name={myVariable.hotel_name}
                address={myVariable.address}
                image={myVariable.hotel_image}
                price={myVariable.price}
                desc={myVariable.hotel_desc}
                city={myVariable.city}
              />
            );
          })}
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Grid container alignItems="center" justifyContent="center">
          <Grid container justifyContent="center" sx={{ mt: 3, mb: 2 }}>
            <Stack spacing={2}>
              <Pagination
                count={count}
                color="primary"
                page={page}
                variant="outlined"
                shape="rounded"
                onChange={handleChange1}
              />
            </Stack>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Grid container alignItems="center" justifyContent="center">
          <Footer />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default AccommodationListPage;
