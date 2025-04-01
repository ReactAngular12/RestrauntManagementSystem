import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

import { FullScreenLoader } from "@/components";

type LazyLoadWrapperProps = {
  children: React.ReactNode;
};

export const LazyLoadWrapper = (props: LazyLoadWrapperProps) => {
  const { children } = props;

  return (
    <ErrorBoundary fallback={<div>Error</div>}>
      <Suspense fallback={<FullScreenLoader />}>{children}</Suspense>
    </ErrorBoundary>
  );
};
