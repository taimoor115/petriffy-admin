import { cn } from "@/lib/utils";

function Skeleton({ className, ...props }) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-[#EEEEEE]", className)}
      {...props}
    />
  );
}

export default Skeleton;
