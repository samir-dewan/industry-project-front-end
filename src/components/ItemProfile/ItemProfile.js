import React, {useEffect, useState} from "react";
import axios from 'axios';

export default function ItemProfile() {
  const [data, setData] = useState("nothing");
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const get = await axios.get(
    `http://localhost:5050/items/test`
  );
  const data = {
    ...get.data
  }
  console.log(data);
  setData(data);
    }
  return (
    <div>
      <div>
        <img src="" alt="" />
        <p>HARD CODE THIS IMAGE</p>
      </div>
      <h1>{data.clothesName}</h1>
      <ul>
        <li>{data.material}</li>
        <li>{data.colour}</li>
      </ul>
      <div>LABELS</div>
      <div>ADDITIONAL INFO</div>
    </div>
  );
}
