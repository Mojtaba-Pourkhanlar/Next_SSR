import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)",
    borderRadius: "100px 2px 100px 2px",
    backgroundColor: "#2b2b2b",
    padding: "2rem",
    margin: "-3rem auto",
    color: "#d5eeeb",
  },
  image: {
    width: "500px",
    height: "500px",
    borderRadius: "100px 2px 100px 2px",
    overflow: "hidden",
    border: "5px solid white",
  },
  img: {
    width: "500px",
    height: "500px",
    objectFit: "cover",
  },
  eventTitle: {
    width: "100%",
    height: "35vh",
    backgroundImage: "linear-gradient(to bottom left,  #008b79, #1180a1)",
  },
  gridFlex: {
    display: "flex",
    flexDirection: "column !important",
    alignItems: "start",
    justifyContent: "space-evenly",
  },
  arrowBox: {
    position: "fixed",
    left: "20px",
    top: "45%",
    cursor: "pointer",
  },
  arrowBoxIcon: {
    width: "60px",
    height: "60px",
    border: "1px solid #ccc",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    "&:hover": {
      border: "1px solid #fff",
      backgroundColor: "#616161",
    },
  },
  eventTitleTypo: {
    paddingTop: "6rem",
    color: "white",
    textAlign: "center",
    textShadow: " 0 3px 10px rgba(0, 0, 0, 0.5)",
  },
  cardContainer: {
    boxShadow:
      "0 1px 4px rgba(0, 0, 0, 0.3), 0 1px 12px 2px rgba(0, 0, 0, 0.2)",
    borderRadius: "8px",
    overflow: "hidden",
    margin: "1rem",
  },
}));

export default useStyles;
