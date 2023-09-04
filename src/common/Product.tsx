"use client";
import { NextPage } from "next";
import Addition from "../assets/Ico/Addition";
import Check from "../assets/Ico/Check";
import Minus from "../assets/Ico/Minus";
import { useState } from "react";
interface Props {
  dir: string;
  cuantity: number;
}
const Product: NextPage<Props> = ({ dir, cuantity }) => {
  const [pack, setPack] = useState(cuantity);
  const [color, setColor] = useState("#C7FFB1");
  return (
    <div className="product  mx-2 mt-2 mb-3">
      <div className="flex flex-row">
        <div
          className="ml-3 my-auto"
          onClick={() => {
            color == "#C7FFB1" ? setColor("") : setColor("#C7FFB1");
          }}
        >
          <Check bg={color} check={color == "" ? "" : "#3D1DF3"} />
        </div>
        <div className="infoCont ">
          <p className="dir ml-3">{dir}</p>
        </div>
      </div>
      <div className="flex cuantity my-auto mx-2">
        <div
          className="my-auto"
          onClick={() => {
            pack > 0 ? setPack(pack - 1) : setPack(pack);
          }}
        >
          <Minus />
        </div>
        <p className="number">{pack}</p>
        <div
          className="my-auto"
          onClick={() => {
            pack < cuantity ? setPack(pack + 1) : setPack(pack);
          }}
        >
          <Addition />
        </div>
      </div>
    </div>
  );
};
export default Product;
