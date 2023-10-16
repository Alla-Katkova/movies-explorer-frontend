import React from "react";

export function JSONDebug({ variable, label = "Debug Info", children }) {
  if (typeof label !== "string") {
    return "JSONDebug: label must be string ";
  }
  return (
    <details>
      <summary>{label}</summary>
      {children}
      <pre>{JSON.stringify(variable, null, 2)}</pre>
    </details>
  );
}

export function mockEventListener(event) {
  const error = new Error();
  const stackLines = error.stack.split("\n");
  const callerInfo = stackLines[2] || "";

  console.log("Mock event listener triggered by event:", event.type);
  console.log("Called from:", callerInfo.trim());
  console.log("Event data:", event);
}
