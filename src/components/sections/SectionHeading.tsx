import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
  /** Heading level; defaults to h2. */
  as?: "h1" | "h2" | "h3";
}

export function SectionHeading({ eyebrow, title, description, align = "left", className, as = "h2" }: SectionHeadingProps) {
  const Tag = as;
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <Tag className={cn("display-lg", eyebrow && "mt-4")}>{title}</Tag>
      {description && (
        <div className={"mt-5 text-[1.0625rem] leading-[1.7] text-ink-muted"}>{description}</div>
      )}
    </div>
  );
}
