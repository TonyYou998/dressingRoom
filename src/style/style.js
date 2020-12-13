import { makeStyles } from "@material-ui/core/styles";
// viet css
const useStyle = makeStyles((theme) => ({
  content: {
    backgroundColor: "red",
    color: "ffffff",
    "& span": {
      fontSize: 15, //15px =>15"px"
    },
  },
  title: {
    fontSize: 50,
  },
}));
export default useStyle;
