import type { DirectoryProfile } from "../../types/entities";
import Link from "../atoms/Link";
import { stateAbbrToName } from "../../utils/helpers";
import ArrowRightIcon from "../../assets/images/arrow-right.svg";
import classNames from "classnames";

interface DirectoryListProps {
  directoryChildren: DirectoryProfile<never>[];
  relativePrefixToRoot: string;
  isFooter?: boolean;
}

// Skip directory levels that would only render one option.
const getSkipLevelSlug = (child: DirectoryProfile<never>): string => {
  if (child.dm_directoryChildren?.length === 1) {
    return getSkipLevelSlug(child.dm_directoryChildren[0]);
  }
  return child.slug;
};

const DirectoryList = (props: DirectoryListProps) => {
  const { directoryChildren, relativePrefixToRoot, isFooter } = props;
  const directoryChildrenSorted = directoryChildren.slice().sort((a, b) => {
    const nameA = a.name || '';
    const nameB = b.name || '';
    return nameA.localeCompare(nameB);
  });

  return (
    <div className="flex flex-col">
      <ul className={classNames("flex flex-wrap s:py-[50px] s:gap-y-6", !isFooter ? "s:px-[150px]" : "s:pt-[32px]")} >
        {directoryChildrenSorted.map((child, idx) => (
          <li
            className="w-full border-b border-tofu110 s:w-1/2 s:p-0 s:border-0 m:w-1/3 l:w-1/4"
            key={idx}
          >
            <Link
              className={"flex justify-between p-4 s:inline-block s:p-0"}
              action={"engaged"}
              object={"directory list link"}
              href={relativePrefixToRoot + getSkipLevelSlug(child)}
              objectDetail={stateAbbrToName(child.name)}
            >
              <div>
                <span className={classNames("text-blueberry80 font-medium mr-2 s:hover:underline", isFooter ? "text-2" : "text-base")}>
                  {stateAbbrToName(child.name)}
                </span>
                <span className={classNames("text-pepper120 font-normal", isFooter ? "text-2" : "text-base")}>
                  ({child.dm_baseEntityCount})
                </span>
              </div>
              <img
                  className={"s:hidden"}
                  src={ArrowRightIcon}
                  loading={"eager"}
                  alt={"Arrow icon"}
                />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DirectoryList;
