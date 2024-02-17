interface CricketCardProps {
  seriesName: string;
  matchHistory: string;
  matchStatus: string;
  team1Name: string;
  team1Runs: string;
  team2Name: string;
  team2Runs: string;
  matchCurrentInfo: string;
  player1: string;
  player2: string;
  player3: string;
}
export const CricketCard = ({ data }: { data: CricketCardProps }) => {
  return (
    <div className="p-2">
      <div className="flex justify-between">
        <div>
          <h1 className="text-xs">{data.seriesName}</h1>
        </div>
        <div className="text-xs">{data.matchStatus}</div>
      </div>
      <h1 className="text-xs flex justify-center space-y-2">
        {data.matchHistory}
      </h1>
      <div className="flex justify-between">
        <div className="text-sm ml-6">{data.team1Name}</div>
        <div className="text-sm mr-6">{data.team2Name}</div>
      </div>
      <div className="flex justify-between">
        <div className="text-sm ml-2">{data.team1Runs}</div>
        <div className="text-sm mr-2">{data.team2Runs}</div>
      </div>
      <div className="text-xs flex items-center justify-center mt-1">
        {data.matchCurrentInfo}
      </div>
    </div>
  );
};
