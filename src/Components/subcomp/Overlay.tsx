import type { Workout } from "@/types";
import { useState } from "react";
import Loader from "./Loader";
import { RiHome6Fill } from "react-icons/ri";
import Tracker from "./Tracker";
import WorkoutList from "./WorkoutList";

export const Overlay = ({
  visible,
  toggle,
  data,
}: {
  visible: boolean;
  toggle: (vis: boolean) => void;
  data: Workout[];
}) => {
  let [trackerVisible, toggleTracker] = useState<boolean>(false);
  let [workoutFinished, toggleFinished] = useState<boolean>(false);
  let today = new Date();

  return (
    <div
      className={
        visible
          ? "w-screen h-screen z-30 absolute left-0 top-0 backdrop-blur bg-zinc-950/70 flex justify-center items-center"
          : "hidden"
      }
    >
      <div className="w-[700px] min-h-[350px] rounded-lg bg-zinc-900 relative">
        {data.length > 0 ? (
          <div className="w-full h-full relative flex py-6 flex-col items-center justify-center">
            <button
              onClick={() => toggle(false)}
              className="px-1 py-1 rounded-md text-4xl bg-rose-600/55 absolute top-2 right-2 hover:bg-rose-600/80"
            >
              <RiHome6Fill />
            </button>
            <span className="text-xl font-semibold mb-8">
              Today&apos;s Workout
            </span>
            <WorkoutList
              finished={workoutFinished}
              tVisible={trackerVisible}
              tToggle={toggleTracker}
              data={data[today.getDay()].workout}
            />
            <Tracker
              tVisible={trackerVisible}
              tToggle={toggleTracker}
              workout={data[today.getDay()].workout}
              finished={workoutFinished}
              toggleFinished={toggleFinished}
            />
          </div>
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};
