type AsyncViewProps<T> = {
  loading: boolean;
  error: unknown;
  data: T | undefined;
  isEmpty: (data: T) => boolean;
  loadingView: React.ReactNode;
  errorView?: React.ReactNode;
  emptyView?: React.ReactNode;
  children: (data: T) => React.ReactNode;
};

export const AsyncView = <T,>({
  loading,
  error,
  data,
  isEmpty,
  loadingView,
  errorView,
  emptyView,
  children,
}: AsyncViewProps<T>) => {
  if (loading) return <>{loadingView}</>;

  if (error)
    return <>{errorView ?? <div className="text-red-500">Error</div>}</>;

  if (!data || isEmpty(data)) {
    return <>{emptyView ?? <div>No data found.</div>}</>;
  }

  return <>{children(data)}</>;
};
