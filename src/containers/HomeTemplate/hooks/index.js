import React, { useState, useEffect, useCallback, useMemo } from "react";
import Child from "../HomePage/child";
// them useState de dung hook

export default function HookPage() {
  const [number, setNumber] = useState(0);
  // tao 1 mang co 2 phan tu vs gia tri ban dau la 0

  useEffect(() => {
    console.log("use effect");
    //useEffect nhu componentDidMount ben class khi tham so thu 2 la 1 mang rong
    //chay 1 lan duy nhat
  }, []);

  useEffect(() => {
    console.log(
      "useEffect nhu componentDidUpdate ben class khi tham so thu 2 la 1 mang khac rong"
    );
  }, [number]);
  //useEffect nhu componentDidUpdate ben class khi tham so thu 2 la 1 mang khac rong

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("hello");
    }, 1000);
    // cach 1 s chay 1 lan
    //   phai return moi chay
    return () => {
      console.log(
        "useEffect nhu componentWillUnmount ben class khi return arrow function"
      );
      clearInterval(interval);
    };
  }, []);
  //   useEffect nhu componentWillUnmount ben class khi return arrow function
  const handleTangSo = () => {
    // console.log("A");
    setNumber(number + 1);
    // set lai gi tri number
  };
  const showNumber = () => {
    console.log("showNumber");
  };
  const showNumberCallBack = useCallback(showNumber, []);
  //   => thay mang rong chay 1 lan duy nhat
  const numberUp = () => {
    let i = 0;
    while (i < 1000) i++;
    console.log(i);
    return i;
    // moi lan bam tnag se load laij ton tai nguyen => cache
  };
  const numberUpMemo = useMemo(() => numberUp(), []);
  return (
    <div>
      <h3>hook page</h3>
      <h1>number: {number}</h1>
      <h1>number up:{numberUpMemo}</h1>
      {/* ko con ton tai number */}
      <button className="btn btn-success  " onClick={handleTangSo}>
        tăng số
      </button>
      <Child showNumber={showNumberCallBack} />
    </div>
  );
}
