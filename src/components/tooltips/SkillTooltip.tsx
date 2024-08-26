import { Tooltip } from "@nextui-org/tooltip";
import { ReactNode } from "react";

export default function SkillTooltip({
  label,
  description,
  experience = "1",
  children,
}: {
  label: string;
  description?: string;
  experience?: string;
  children: ReactNode;
}) {
  return (
    <Tooltip
      shadow="sm"
      shouldFlip
      showArrow
      placement="right"
      classNames={{
        base: [
          // arrow color
          "before:bg-slate-800",
        ],
        content: ["py-2 px-4 shadow-xl rounded", "text-slate-300 bg-slate-800"],
      }}
      content={
        <div>
          <div className="flex flex-row gap-2 items-center">
            <h2 className="text-2xl">{label}</h2>
            &#9679;
            <p>{`${experience} year`}</p>
          </div>
          <p>{description ? description : ""}</p>
        </div>
      }
    >
      {children}
    </Tooltip>
  );
}

//  className="rounded-lg py-2 px-4 shadow-xl text-slate-300 bg-slate-800"
