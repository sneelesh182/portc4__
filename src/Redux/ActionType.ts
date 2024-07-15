// actiontype.ts fro themes
export enum BgType {
  SOLIDS = "SOLIDS",
  LINEAR_GRADIENT = "LINEAR_GRADIENT",
  RADIAL_GRADIENT = "RADIAL_GRADIENT",
  FOREGROUND = "FOREGROUND",
  BG_ACTION_TYPE = "BG_ACTION_TYPE",
  UPDATE_PROFILE = "UPDATE_PROFILE",
}
export interface bgState {
  solid: string;
  linear1: string;
  linear2: string;
  radial1: string;
  radial2: string;
  foreground: string;
  bgActionType: string;
  name: string;
  designation: string;
  location: string;
  bio: string;
  skills: string;
  projects: string;
}
export interface solidbg {
  type: BgType.SOLIDS;
  payload: string;
}
export interface linearbg {
  type: BgType.LINEAR_GRADIENT;
  payload1: string;
  payload2: string;
}
export interface radialbg {
  type: BgType.RADIAL_GRADIENT;
  payload1: string;
  payload2: string;
}
export interface foregroundbg {
  type: BgType.FOREGROUND;
  payload: string;
}
export interface updateProfile {
  type: BgType.UPDATE_PROFILE;
  payload: Partial<
    Pick<
      bgState,
      "name" | "designation" | "location" | "bio" | "skills" | "projects"
    >
  >;
}

export type bgtype =
  | solidbg
  | linearbg
  | radialbg
  | foregroundbg
  | updateProfile;
