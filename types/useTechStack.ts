import { TechStackArray, TechStackRecord } from "~/types/techStackCard";

export interface UseTechStackInterface {
  toMap: () => TechStackRecord;
  toArray: () => TechStackArray;
}
