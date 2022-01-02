import * as React from "react";

// type icon 的类型
export interface Icon_t {
  type:
    | "water_meter"
    | "CombinedShape1"
}

type SvgIcon_t = React.SVGProps<SVGSVGElement> & Icon_t;
export function SvgIcon({ type, style, className }: SvgIcon_t) {
  return (
    <svg aria-hidden="true" style={style} className={className}>
      <use xlinkHref={`#${type}`} />
    </svg>
  );
}
