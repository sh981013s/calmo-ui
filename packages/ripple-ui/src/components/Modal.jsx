import React from "react";
import Dialog from "./Dialog.jsx";

export default function Modal({
  headline,
  subheadline,
  actions,
  children,
  ...props
}) {
  return (
    <Dialog
      title={headline}
      description={subheadline}
      footer={actions}
      {...props}
    >
      {children}
    </Dialog>
  );
}
