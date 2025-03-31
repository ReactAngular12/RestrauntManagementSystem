import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Loader } from "@mantine/core";

type LazyLoadWrapperProps = {
  children: React.ReactNode;
};

export const LazyLoadWrapper = (props: LazyLoadWrapperProps) => {
  const { children } = props;

  return (
    <ErrorBoundary fallback={<div>Error</div>}>
      <Suspense fallback={<Loader size="lg" />}>{children}</Suspense>
    </ErrorBoundary>
  );
};
