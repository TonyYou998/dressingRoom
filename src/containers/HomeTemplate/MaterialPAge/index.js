import React from "react";
import Button from "@material-ui/core/Button";
//import framework moi chay dc
//phai la rfc moi chay dc material ui
import useStyle from "./../../../style/style";

export default function MaterialPage() {
  const classes = useStyle();
  //   tao hang classes =useStyle()
  return (
    <div className={classes.content}>
      {/* goi content tu classes */}
      <h3>Material page</h3>
      <Button variant="contained" color="secondary">
        Default
      </Button>
    </div>
  );
}
