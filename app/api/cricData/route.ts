import { NextResponse } from "next/server";
// import { JSDOM } from "jsdom";

import { JSDOM } from "jsdom";

export async function GET(req: Request) {
  try {
    const res = await fetch(
      "https://www.bing.com/cricketdetails?q=IND%20vs%20ENG%20cricket&IsCricketV3=1&QueryTimeZoneId=India%20Standard%20Time&ResponseType=FullScore&Intent=Scores&Provider=SI&Lang=English&ScenarioName=SingleGame&TeamId0=4&GameId=230531&GameStartTimeInMilliseconds=63828086400000&GameEndTimeInMilliseconds=63851414400000&form=ANNTA1&"
    );
    const html = await res.text();

    const dom = new JSDOM(html);
    const doc = dom.window.document;
    // b_floatR team_score ckt_won b_promtxt
    const battingTeamRuns = doc.querySelectorAll(".team_score")[1].textContent;
    const bowlingTeamRuns = doc.querySelectorAll(".team_score")[0].textContent;

    const MatchStatus = doc.querySelector(".b_floatR")?.textContent;

    const battingTeamName = doc.querySelector(".ckt_won")?.textContent;
    const bowlingTeamName = doc.querySelector(
      ".ckt_match_teamname"
    )?.textContent;
    const needDetails = doc.querySelector(".ckt_match_statustxt")?.textContent;
    const playername = doc.querySelectorAll(".ckt_player_name");
    const playername1 =
      doc.querySelectorAll(".ckt_player_name")[0]?.textContent;
    const playerScore1 =
      doc.querySelectorAll(".ckt_player_perfm")[0]?.textContent;
    const playername2 =
      doc.querySelectorAll(".ckt_player_name")[1]?.textContent;
    const playerScore2 =
      doc.querySelectorAll(".ckt_player_perfm")[1]?.textContent;
    const playername3 =
      doc.querySelectorAll(".ckt_player_name")[2]?.textContent;
    const playerScore3 =
      doc.querySelectorAll(".ckt_player_perfm")[2]?.textContent;

    // console.log(needDetails);
    // console.log(playername1, " : ", playerScore1);
    // console.log(playername2, " : ", playerScore2);
    // console.log(playername3, " : ", playerScore3);

    // const stadium = doc.querySelectorAll(".ckt_tournamentname")[0].textContent;
    const stadium = doc.querySelector(".ckt_match_sbtl");
    const dData = stadium?.querySelectorAll("div");
    let d1;
    let d2;
    if (dData) {
      d1 = dData[0]?.textContent;
      d2 = dData[1]?.textContent;
      console.log(d1);
      console.log(d2);
    }
    console.log("MatchStatus", MatchStatus);
    console.log(bowlingTeamName, " : ", bowlingTeamRuns);
    console.log(battingTeamName, " : ", battingTeamRuns);

    console.log(needDetails);
    console.log(playername1, " : ", playerScore1);
    console.log(playername2, " : ", playerScore2);
    console.log(playername3, " : ", playerScore3);

    const data = {
      seriesName: d1,
      matchHistory: d2,
      matchStatus: MatchStatus,
      team1Name: bowlingTeamName,
      team1Runs: bowlingTeamRuns,
      team2Name: battingTeamName,
      team2Runs: battingTeamRuns,
      matchCurrentInfo: needDetails,
      player1: `${playername1} : ${playerScore1}`,
      player2: `${playername2} : ${playerScore2}`,
      player3: `${playername3} : ${playerScore3}`,
    };
    return NextResponse.json(data);
  } catch (error) {
    return new NextResponse("Error ho gaya hai");
  }
}

// let batData = <any>[];
// playername.forEach((p) => {
//   batData.push({ "name": p.textContent });
// });
// console.log(batData);
