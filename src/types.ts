export type userDetails = {
  username: string,
  daysForWorkout: string,
  level: string,
  expYears: string,
  expMonths: string,
  gender: string,
  location: string,
  primaryConcern: string,
  weight: string,
  height: string,
  age: string,
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
