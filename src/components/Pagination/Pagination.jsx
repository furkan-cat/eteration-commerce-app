import React from "react";
import Button from "../Button/Button";

export default function Pagination({ onNext, onPrev, activePage, totalPage }) {
  const prevDisableState = activePage === 0 ? true : false;
  const nextDisableState = activePage === totalPage ? true : false;

  return (
    <div className="flex gap-2">
      <Button title="Prev" onClick={onPrev} disabled={prevDisableState} />
      <Button title="Next" onClick={onNext} disabled={nextDisableState} />
    </div>
  );
}
