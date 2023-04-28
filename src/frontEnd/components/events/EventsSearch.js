import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

import { DivLayout } from "@frontEnd/helpers";


const EventsSearch = (props) => {
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const handleChangeYear = (event) => {
    setYear(event.target.value);
  };
  const handleChangeMonth = (event) => {
    setMonth(event.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    props.onSearch(year, month);
  };
  const formBox = {
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    flexDirection: "row",
    backgroundColor: "#9e9e9e",
    height: "90px",
    borderRadius: "8px",
    m: "0 10px",
  };

  return (
    <>
      <DivLayout>
        <form onSubmit={submitHandler} style={{ marginTop: "100px" }}>
          <Box sx={formBox}>
            <Box>
              <FormControl sx={{ minWidth: "300px", m: "0 20px" }} size="small">
                <InputLabel id="demo-select-small">Year</InputLabel>
                <Select
                  labelId="demo-select-small"
                  id="demo-select-small"
                  value={year}
                  label="Year"
                  onChange={handleChangeYear}
                >
                  <MenuItem>
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="2021">2021</MenuItem>
                  <MenuItem value="2022">2022</MenuItem>
                </Select>
              </FormControl>

              <FormControl sx={{ minWidth: "300px", m: "0 20px" }} size="small">
                <InputLabel id="demo-select-small">Month</InputLabel>
                <Select
                  labelId="demo-select-small"
                  id="demo-select-small"
                  value={month}
                  label="Month"
                  onChange={handleChangeMonth}
                >
                  <MenuItem>
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="1">January</MenuItem>
                  <MenuItem value="2">February</MenuItem>
                  <MenuItem value="3">March</MenuItem>
                  <MenuItem value="4">April</MenuItem>
                  <MenuItem value="5">May</MenuItem>
                  <MenuItem value="6">June</MenuItem>
                  <MenuItem value="7">July</MenuItem>
                  <MenuItem value="8">August</MenuItem>
                  <MenuItem value="9">September</MenuItem>
                  <MenuItem value="10">October</MenuItem>
                  <MenuItem value="11">November</MenuItem>
                  <MenuItem value="12">December</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box>
              <Button
                variant="contained"
                color="secondary"
                type="submit"
                sx={{ height: "38px" }}
              >
                Find Event
              </Button>
            </Box>
          </Box>
        </form>
      </DivLayout>
    </>
  );
};

export default EventsSearch;
