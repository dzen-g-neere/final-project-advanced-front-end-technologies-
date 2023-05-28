import compareStrings from "./Comparators/compareStrings";
import States from './States.json'

export class ComparatorByState {
  static [States.TaskAsc] = (a, b) => compareStrings(a.task, b.task);
  static [States.TaskDec] = (a, b) => -compareStrings(a.task, b.task);
}
