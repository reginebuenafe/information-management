import React from "react";

export function TableHead({ title }) {
  return (
    <th className="text-center font-extrabold text-2xl border border-r-1 border-white">
      {title}
    </th>
  );
}

export function TableCol({ width, title }) {
  return <col style={{ width }}>{title}</col>;
}
