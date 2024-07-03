import { Meaning } from "./ApiResponse.model";


export interface MeaningState {
  loading: boolean;
  meanings: ReadonlyArray<Meaning>;
}
