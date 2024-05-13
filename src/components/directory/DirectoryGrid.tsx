import type { TaxProsMain } from "../../types/autogen";
import DirectoryCard from "../../components/directory/DirectoryCard";

interface DirectoryGridProps {
  directoryChildren: TaxProsMain[];
  relativePrefixToRoot: string;
}

const DirectoryGrid = (props: DirectoryGridProps) => {
  const { directoryChildren, relativePrefixToRoot } = props;
  const directoryChildrenSorted = directoryChildren.slice().sort((a, b) => {
    const nameA = a.c_taxProName || '';
    const nameB = b.c_taxProName || '';
    return nameA.localeCompare(nameB);
  });

  return (
    <div className="m-6 max-w-[1200px] s:mx-auto s:my-[50px]">
      <ul className="grid grid-cols-1 gap-4 place-items-center s:grid-cols-2 s:gap-8 s:place-items-start l:grid-cols-3">
        {directoryChildrenSorted.map((child, idx) => (
          <li className="relative overflow-hidden w-full max-w-[312px] h-full border border-pepper40 rounded-[16px] s:max-w-[356px]" key={idx}>
            <div className="absolute top-0 left-0 w-full h-[10px] bg-gray08" />
            <DirectoryCard profile={child} relativePrefixToRoot={relativePrefixToRoot} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DirectoryGrid;
