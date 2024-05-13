import { ReactNode } from "react";
import classNames from "classnames";
import Link from "../atoms/Link";
import { stateAbbrToName } from "../../utils/helpers";

interface BreadcrumbsPropsDefault {
  breadcrumbs: Array<{ slug?: string; name: string }>;
  relativePrefixToRoot: string;
  className?: string;
  classNameInner?: string;
  separator?: ReactNode;
}

const Breadcrumbs = (props: BreadcrumbsPropsDefault) => {
  const { breadcrumbs, relativePrefixToRoot, className, classNameInner, separator = "/" } = props;

  return (
    <>
      {breadcrumbs?.length && (
        <nav
          className={classNames(
            "flex py-[16px]",
            className
          )}
          aria-label="Breadcrumb"
        >
          <ol
            className={classNames(
              "flex flex-wrap items-center gap-y-[8px]",
              classNameInner
            )}
          >
            {breadcrumbs.map(({ name, slug }, idx) => {
              const isLast = idx === breadcrumbs.length - 1;

              return (
                <li key={idx} className="flex flex-row items-center">
                  <Breadcrumb
                    name={name}
                    slug={isLast ? "" : relativePrefixToRoot + slug}
                    index={idx}
                    {...props}
                  />
                  {!isLast && (
                    <div className="px-2">
                      {separator}
                    </div>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      )}
    </>
  );
};

interface BreadcrumbProps {
  name: string;
  slug?: string;
  index: number;
}

const Breadcrumb = (props: BreadcrumbProps) => {
  const { name, slug, index } = props;

  let nameCleaned = name;
  if (nameCleaned === "Directory") {
    nameCleaned = "TurboTax Verified Pros";
  } else if (stateAbbrToName(nameCleaned)) {
    nameCleaned = stateAbbrToName(nameCleaned);
  }

  if (slug) {
    return (
      <Link
        className={"text-blueberry80 text-[14px] leading-[20px] font-medium underline s:no-underline hover:underline"}
        href={slug}
        action={"engaged"}
        object={"directory breadcrumb link"}
        objectDetail={nameCleaned}
      >
        <span>{nameCleaned}</span>
      </Link>
    );
  }

  return <span className="text-[14px] leading-[20px] font-medium">{nameCleaned}</span>;
};

export default Breadcrumbs;
