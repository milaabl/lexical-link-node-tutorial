import React, { FC, Suspense } from "react";
import { lazy } from 'react';
import MarkdownEditor from "./MarkdownEditor";

interface Props {
  value: string;
  textAlign?: "left" | "center" | "right"
}

const MarkdownPreview : FC<Props> = ({ value: markdownString = "", textAlign }) => {
  return <MarkdownEditor mode="preview" value={markdownString || ""} textAlign={textAlign} />;
}

export default MarkdownPreview;