import React, { useContext, useState } from "react";
import { momentDateFormatUtil } from "../helpers/Util";
import { DateRange } from "@mui/lab";
const CommonContext = React.createContext({});

export const CommonProvider: React.FC<any> = ({ children }) => {
  const [chipList, setChipList] = useState<any>([]);

  const getChipList = (
    dateRangeFilter: DateRange<unknown>,
    selectedFilterItemList: any
  ) => {
    if (dateRangeFilter[0] !== null && dateRangeFilter[1] !== null) {
      const dateRange = {
        id: -1,
        name: `from: ${momentDateFormatUtil(
          dateRangeFilter[0]
        )} - to: ${momentDateFormatUtil(dateRangeFilter[1])}`,
      };

      const filters = [...selectedFilterItemList, dateRange] as [
        { id: number; name: string }
      ];

      return setChipList(filters);
    }
    return setChipList(selectedFilterItemList);
  };

  return (
    <CommonContext.Provider
      value={{
        chipList,
        getChipList,
      }}
    >
      {children}
    </CommonContext.Provider>
  );
};

export function userCommon() {
  const context: any = useContext(CommonContext);
  return context;
}
