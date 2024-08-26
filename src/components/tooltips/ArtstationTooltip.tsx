"use client";
import useScrolledTillBottom from "@/hooks/useScrolledTillBottom";
import { Tooltip } from "@nextui-org/tooltip";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

const ArtstationTooltip = ({ children }: { children: ReactNode }) => {
  const { isBottom, hasReachedBottom } = useScrolledTillBottom();
  console.log("isBottom", isBottom);
  console.log("hasReachedBottom", hasReachedBottom);

  return (
    <Tooltip
      //   isDisabled
      isOpen={isBottom}
      shadow="sm"
      shouldFlip
      // showArrow
      placement="top-start"
      classNames={{
        base: [
          // arrow color
          "before:bg-violet-300/10",
        ],
        content: [
          "py-0 px-0 shadow-xl rounded-xl",
          "text-slate-300 bg-violet-300/10",
          "cursor-pointer",
          "group/link",
        ],
      }}
      content={
        <Link
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Artstation (opens in a new tab)"
          href="https://docren155.artstation.com/"
          className="flex flex-col-reverse rounded-xl group-hover/link:border-slate-500 border-2 border-transparent"
        >
          <h3 className="text-lg tracking-wide font-semibold py-2 px-3 group-hover/link:text-violet-300">
            Check out my art portfolio here !!
          </h3>

          <Image
            alt="Image of Artstation profile"
            src="/images/artstation.png"
            width={300}
            height={10}
            quality={80}
            loading="lazy"
            style={{ objectFit: "cover" }}
            className="rounded-t-xl"
          />
        </Link>
      }
    >
      {children}
    </Tooltip>
  );
};

export default ArtstationTooltip;
