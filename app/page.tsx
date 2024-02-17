import { CricketScore } from "@/components/cricketScore";

export default function Home() {
  return (
    <div className="flex  flex-col gap-y-4 h-full justify-center items-center text-3xl font-semibold">
      Sid55X
      <div className="">
        <CricketScore />
      </div>
    </div>
  );
}
