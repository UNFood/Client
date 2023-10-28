import React, { useState, useEffect } from "react";
import { ProgressBar } from "react-bootstrap";

function BarProgress(finalDate: string) {
  const datenow = new Date();
  const datefinal = new Date(finalDate);

  const [countProgress, setCountProgress] = useState(0);
  useEffect(() => {});

  return <ProgressBar now={countProgress}></ProgressBar>;
}

export default BarProgress;
