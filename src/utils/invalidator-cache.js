import { queryClient } from "./query-client";

export const invalidateQuery = (keys, options = {}) => {
  const {
    exact = false,
    refetchType = "active",
    resetStaleTime = true,
    refetchOnInvalidate = false,
    cancelQueries = false,
    removeQueries = false,
  } = options;

  if (!keys) return;

  const queryKeys = Array.isArray(keys) ? keys : [keys];

  if (cancelQueries) {
    queryKeys.forEach((key) =>
      queryClient.cancelQueries({ queryKey: [key], exact })
    );
  }

  queryKeys.forEach((key) => {
    queryClient.invalidateQueries({ queryKey: [key], exact, refetchType });
  });

  if (resetStaleTime) {
    queryKeys.forEach((key) => {
      queryClient.resetQueries({ queryKey: [key], exact });
    });
  }

  if (removeQueries) {
    queryKeys.forEach((key) => {
      queryClient.removeQueries({ queryKey: [key], exact });
    });
  }

  if (refetchOnInvalidate) {
    queryKeys.forEach((key) => {
      queryClient.refetchQueries({ queryKey: [key], exact });
    });
  }
};
