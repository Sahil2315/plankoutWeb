import type { Exercise } from "@/types";
import { useEffect, useState } from "react";
import Progress from "./Progress";

const Tracker = ({
  tVisible,
  tToggle,
  workout,
  finished,
  toggleFinished,
}: {
  tVisible: boolean;
  tToggle: (tog: boolean) => void;
  workout: Exercise[];
  finished: boolean;
  toggleFinished: (fin: boolean) => void;
}) => {
  if (workout.length == 0) {
    return <div />;
  }

  const [curExercise, setCurExercise] = useState<number>(0);
  const [setArr, resetSArr] = useState<number[]>([]);
  const [completed, setCompleted] = useState<number>(0);
  const [totalSets, setTotal] = useState<number>(0);

  useEffect(() => {
    resetSArr(new Array(workout.length).fill(0));
  }, []);

  useEffect(() => {
    let tempsets = 0;
    for (let i = 0; i < workout.length; i++) {
      tempsets += workout[i].exSets;
    }
    console.log(tempsets);
    setTotal(tempsets);
  }, [workout]);

  function proceed() {
    if (
      curExercise == workout.length - 1 &&
      setArr[curExercise] == workout[curExercise].exSets - 1
    ) {
      tToggle(false);
      toggleFinished(true);
      return;
    }
    let temp = [...setArr];
    temp[curExercise]++;
    if (temp[curExercise] == workout[curExercise].exSets) {
      setCurExercise(curExercise + 1);
    }
    resetSArr(temp);
    setCompleted(completed + 1);
    console.log(completed);
  }

  return (
    <div className={tVisible && !finished ? "flex flex-col" : "hidden"}>
      <div className="w-[400px] self-center bg-gray-200 rounded-full h-2 overflow-hidden">
        <div
          className="bg-blue-500 h-full transition-all duration-300 ease-in-out"
          style={{ width: `${(completed / totalSets) * 100}%` }}
        />
      </div>

      <div className={`flex flex-row w-full items-center px-8 my-4`}>
        <div className="w-[250px]">
          <Progress
            dimensions={200}
            perc={(setArr[curExercise] / workout[curExercise].exSets) * 100}
          />
        </div>
        <div className="flex flex-col ml-8 mb-4">
          <span>{workout[curExercise].exName}</span>
          <span className="mt-2">{workout[curExercise].exDesc}</span>
          <button
            onClick={proceed}
            className="bg-indigo-600 rounded-lg mt-4 py-1 w-max px-2"
          >
            Set Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tracker;
