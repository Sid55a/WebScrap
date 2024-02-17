"use client";

import { useEffect, useState } from "react";
import { CricketCard } from "./cricketCard";
import { Button } from "./ui/button";
import axios from "axios";

export const CricketScore = () => {
  let data = {
    seriesName: "",
    matchHistory: "",
    matchStatus: "",
    team1Name: "",
    team1Runs: "",
    team2Name: "",
    team2Runs: "",
    matchCurrentInfo: "",
    player1: "",
    player2: "",
    player3: "",
  };

  const [cricData, setCricData] = useState(data);

  const getData = async () => {
    const res = await axios.get("/api/cricData");
    setCricData(res.data);
    console.log(res.data);
  };

  return (
    <>
      <div className="h-[109px] w-[290px]  border border-sky-500">
        {cricData && <CricketCard data={cricData} />}
      </div>
      <Button onClick={getData}>Refresh</Button>
    </>
  );
};
