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
import { formBox, menu } from "@frontEnd/styles/Style";



const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const EventsSearch = (props) => {
  const [userId, setUserId] = useState("");
  const handleChangeYear = (event) => {
    setUserId(event.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    props.onSearch(userId);
  };

  return (
    <>
      <DivLayout>
        <form onSubmit={submitHandler} style={{ marginTop: "100px" }}>
          <Box sx={formBox}>
            <Box>
              <FormControl sx={menu} size="small">
                <InputLabel id="demo-select-small" sx={{ color: "#fff" }}>
                  User ID
                </InputLabel>
                <Select
                  labelId="demo-select-small"
                  id="demo-select-small"
                  value={userId}
                  label="User ID"
                  MenuProps={MenuProps}
                  onChange={handleChangeYear}
                >
                  {props.list.map((item) => (
                    <MenuItem value={item.id} key={item.id}>
                      {item.id}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <Box>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                sx={{ height: "38px" }}
              >
                Find User
              </Button>
            </Box>
          </Box>
        </form>
      </DivLayout>
    </>
  );
};

export default EventsSearch;
