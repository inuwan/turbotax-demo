import React, { useContext } from "react";
import type { DirectoryProfile } from "../types/entities";
import { TaxProsMain } from "../types/autogen";

export const DirectoryContext = React.createContext({} as DirectoryProfile<DirectoryProfile<never>> | DirectoryProfile<TaxProsMain>);

const useDirectory = (): DirectoryProfile<DirectoryProfile<never>> | DirectoryProfile<TaxProsMain> => {
  return useContext(DirectoryContext);
};

export default useDirectory;
