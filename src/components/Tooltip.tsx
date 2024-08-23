import { Tooltip } from "@nextui-org/tooltip";
import { ReactNode } from "react";

export default function SkillToolTip({
  label,
  description,
  children,
}: {
  label: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <Tooltip
      shadow="sm"
      showArrow
      shouldFlip
      placement="right"
      classNames={{
        base: ["before:bg-neutral-400"],
      }}
      content={
        <div className="rounded-lg py-2 px-4 shadow-xl text-slate-300 bg-slate-800">
          <h3>{label}</h3>
          <p>
            {description
              ? description
              : "lorem Inspire active aria wide endDate react tab university"}
          </p>
        </div>
      }
    >
      {children}
    </Tooltip>
  );
}
