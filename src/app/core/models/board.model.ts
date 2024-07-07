import { Definition } from "./apiResponse.model";

export interface BoardState {
  word: string;
  definitions: Definition[],
  loading?: boolean,
}
