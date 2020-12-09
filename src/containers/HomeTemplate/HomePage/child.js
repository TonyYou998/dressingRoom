import React, { memo } from "react";

function Child() {
  console.log("child");
  return (
    <div>
      <h3>child</h3>
    </div>
  );
}
export default memo(Child);
