import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import Others from "./Others";
import Me from "./Me";
import { newSession } from "./shareSlice";

export function Share() {
  const { group } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(newSession(group));
  });

  return (
    <div>
      <Me />
      <Others />
    </div>
  );
}