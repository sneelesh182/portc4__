// action.ts for themes
import { BgType } from "./ActionType";

export const setSolidBg = (payload: string) => ({
  type: BgType.SOLIDS,
  payload,
});

export const setLinearBg = (payload1: string, payload2: string) => ({
  type: BgType.LINEAR_GRADIENT,
  payload1,
  payload2,
});

export const setRadialBg = (payload1: string, payload2: string) => ({
  type: BgType.RADIAL_GRADIENT,
  payload1,
  payload2,
});

export const setForeGroundBg = (payload: string) => ({
  type: BgType.FOREGROUND,
  payload,
});

export const setSolids = (value: string) => {
  return (dispatch: (arg0: { type: BgType; payload: string; }) => void) => {
    dispatch(setSolidBg(value));
  };
};

export const setLinear = (value1: string, value2: string) => {
  return (dispatch: (arg0: { type: BgType; payload1: string; payload2: string; }) => void) => {
    dispatch(setLinearBg(value1, value2));
  };
};

export const setRadial = (value1: string, value2: string) => {
  return (dispatch: (arg0: { type: BgType; payload1: string; payload2: string; }) => void) => {
    dispatch(setRadialBg(value1, value2));
  };
};

export const setForeGround = (value: string) => {
  return (dispatch: (arg0: { type: BgType; payload: string; }) => void) => {
    dispatch(setForeGroundBg(value));
  };
};
