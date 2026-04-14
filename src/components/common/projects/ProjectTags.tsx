import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

const ProjectTags = ({
  idx,
  className,
  limit,
}: {
  idx: number;
  className?: string;
  limit?: number;
}) => {
  const tags = projects[idx].tags;
  const tagsLen = tags.length;
  const tagsCount = limit ? (limit >= tagsLen ? tagsLen : limit - 1) : tagsLen;
  return (
    <div className="flex flex-wrap gap-4 capitalize text-sm text-primary font-secondary">
      {tags.slice(0, tagsCount).map((tag, i) => (
        <span
          key={i}
          className={cn(
            "rounded-full border border-(--text-primary) py-2 px-4",
            className
          )}
        >
          {tag}
        </span>
      ))}

      {limit && tagsLen - tagsCount > 1 ? (
        <span
          className={cn(
            "rounded-full border border-(--text-primary) py-2 px-4",
            className
          )}
        >
          +{tagsLen - tagsCount}
        </span>
      ) : null}
    </div>
  );
};

export default ProjectTags;
