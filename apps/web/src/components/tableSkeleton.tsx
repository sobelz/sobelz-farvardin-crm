// oxlint-disable unicorn/no-new-array
import { Skeleton } from "@/components/ui/skeleton";

export const TableSkeleton = ({ itemsLength = 4 }: { itemsLength?: number }) => {
  const itemForMap = new Array(itemsLength).fill("").map((item, i) => `${item}${i}`);
  return (
    <div className="flex-col flex max-w-full gap-4">
      <div className="flex justify-between w-full">
        <Skeleton className="w-1/2 h-8" />
        <div className="gap-2 flex">
          <Skeleton className="h-8 w-32" />
          <Skeleton className="h-8 w-24" />
        </div>
      </div>
      <div className="overflow-auto w-full">
        {itemForMap.map((item) => (
          <div className="flex justify-between border rounded-xl p-2 min-w-max w-full" key={item}>
            <Skeleton className="size-6" />
            <Skeleton className="w-22 h-6" />
            <Skeleton className="w-22 h-6" />
            <Skeleton className="w-22 h-6" />
            <Skeleton className="w-22 h-6" />
            <Skeleton className="w-22 h-6" />
          </div>
        ))}
      </div>
    </div>
  );
};
