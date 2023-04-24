import Link from "next/link";
import Image from "next/image";

import { Box, Grid, Typography } from "@mui/material";

import dateSVG from "@frontEnd/assets/date.svg";
import locationSVG from "@frontEnd/assets/location.svg";
import descriptionSVG from "@frontEnd/assets/description.svg";
import backSVG from "@frontEnd/assets/back.svg";

import useStyles from "@frontEnd/styles/Style";


export const EventLogistics = (props) => {
  const classes = useStyles();
  const { date, address, image, imageAlt, description } = props;

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <Link href={"/"} style={{ textDecoration: "none" }}>
        <Box className={classes.arrowBox}>
          <Box className={classes.arrowBoxIcon}>
            <Image src={backSVG} alt="date" width={50} height={50} />
          </Box>
        </Box>
      </Link>
      <Grid container className={classes.root}>
        <Grid item xs={12} sm={12} md={6}>
          <Box className={classes.image}>
            <img src={image} alt={imageAlt} className={classes.img} />
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6} className={classes.gridFlex}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Image src={dateSVG} alt="date" width={50} height={50} />
            <Typography variant="h4" sx={{ mx: "10px" }}>
              {humanReadableDate}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", mt: "30px" }}>
            <Image src={locationSVG} alt="date" width={50} height={50} />
            <Typography variant="h4" sx={{ mx: "10px" }}>
              {address}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "start", mt: "30px" }}>
            <Image src={descriptionSVG} alt="date" width={50} height={50} />
            <Typography variant="h5" sx={{ mx: "10px" }}>
              {description}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
