type changeComponentT = (st: boolean, r1: string, r2?: string) => string;
export const changeComponent: changeComponentT = (st, r1, r2) => {
  return st ? r1 : r2 ?? "";
};
