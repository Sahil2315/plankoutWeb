export type userDetails = {
  username: string,
  userid: string
  daysForWorkout: string,
  level: string,
  expYears: number,
  expMonths: number,
  gender: string,
  location: string,
  primaryConcern: string,
  weight: number,
  height: number,
  age: number,
  specificAilment: string
}

export type Exercise = {
  exName: string;
  exDesc: string;
  exSets: number;
  exReps: number;
  exWeight: string;
};

export type Workout = {
  weekDay: string;
  workout: Exercise[];
};
