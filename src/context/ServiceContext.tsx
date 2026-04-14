"use client";
import { ReactNode, createContext, useContext, useState } from "react";

type ServiceContextProps = {
  serviceIdx: number | null;
  setServiceIdx: React.Dispatch<React.SetStateAction<number | null>>;
  serviceToggle: boolean;
  setServiceToggle: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ServiceContext = createContext({} as ServiceContextProps);

export const useServiceContext = () => useContext(ServiceContext);

export const ServiceContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [serviceIdx, setServiceIdx] = useState<number | null>(null);
  const [serviceToggle, setServiceToggle] = useState(false);
  return (
    <ServiceContext.Provider
      value={{
        serviceIdx,
        setServiceIdx,
        serviceToggle,
        setServiceToggle,
      }}
    >
      {children}
    </ServiceContext.Provider>
  );
};

export default ServiceContext;
