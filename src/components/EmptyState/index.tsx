import React from "react";
import { EmptySearchResult } from "@shopify/polaris"

interface EmptyState {
  title: string;
  description: string
}
const EmptyState = ({ title, description }: EmptyState) => (
  <EmptySearchResult
    title={title}
    description={description}
  />
)

export default EmptyState;