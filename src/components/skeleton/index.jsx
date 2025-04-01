import { cn } from "@/lib/utils";

function Skeleton({ className, ...props }) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-[#e5e7eb]", className)}
      {...props}
    />
  );
}

export default Skeleton;
