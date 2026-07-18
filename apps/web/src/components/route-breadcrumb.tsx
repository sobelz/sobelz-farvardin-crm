import { Link } from "react-router";
import { Fragment } from "react/jsx-runtime";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { NavDictionary } from "@/constants/sidebar";
import { usePathAsArray } from "@/hooks/usePathAsArray";

const RouteBreadcrumb = () => {
  const arrayOfPaths = usePathAsArray();
  const latestItemOfPath = arrayOfPaths[arrayOfPaths.length - 1];
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {arrayOfPaths.map((item, i) => {
          if (i === arrayOfPaths.length - 1) return null;

          const linkto = arrayOfPaths.slice(0, i + 1).join("/");
          return (
            <Fragment key={item}>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink>
                  <Link to={linkto}>{NavDictionary[item]}</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
            </Fragment>
          );
        })}
        <BreadcrumbItem>
          <BreadcrumbPage>{NavDictionary[latestItemOfPath] || latestItemOfPath}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default RouteBreadcrumb;
