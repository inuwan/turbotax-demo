import { useMemo } from "react";
import useIndependentPro from "../../hooks/useIndependentPro";
import ItemList, { ListItem } from "./ItemList";

const ServicesOffered: React.FC = () => {
  const pro = useIndependentPro();
  const items: ListItem[] = useMemo(() => {
    return pro.services?.map((svc) => ({ children: svc })) || [];
  }, [pro]);

  if (items.length === 0) return null;
  return <ItemList items={items} title={"What I offer"} />;
};

export default ServicesOffered;