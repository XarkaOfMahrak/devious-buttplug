import React, { useState } from "react";
import styled from "styled-components";

const ChalkInputText = styled.textarea`
  font-size: 4rem;
  font-family: "Gloria Hallelujah";
  color: #fff;
  background: transparent;
  width: 100%;

  &:focus {
    border: none;
    outline: none;
  }
`;

/** For now, just replace curly quotes with normal quotes */
function sanitize(string) {
  return string.replace(/[\u2018\u2019]/g, "'").replace(/[\u201C\u201D]/g, '"');
}

function LineWriter({ target, onSuccessfulLine, onTypo }) {
  const sanitizedTarget = sanitize(target);
  const [text, setText] = useState("");
  const [initialized, initialize] = useState(false);

  function onChange(value) {
    if (!initialized) initialize(true);
    const sanitizedValue = sanitize(value);

    if (sanitizedValue === sanitizedTarget) {
      onSuccessfulLine();
      setText("");
    } else if (
      sanitizedTarget.startsWith(sanitizedValue) ||
      sanitizedValue.length < 3
    ) {
      setText(value);
    } else {
      onTypo(value);
      setText("");
    }
  }

  return (
    <ChalkInputText
      autoFocus
      value={text}
      type="text"
      placeholder={!initialized && "Start writing here..."}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default LineWriter;
