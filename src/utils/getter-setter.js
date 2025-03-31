import { queryClient } from "./query-client";

export const getQueryCacheData = (keys) => {
  return queryClient.getQueryData(Array.isArray(keys) ? keys : [keys]);
};

export const updateQueryCacheData = (keys, updateFn) => {
  const queryKey = Array.isArray(keys) ? keys : [keys];

  queryClient.setQueryData(queryKey, (oldData) => {
    return updateFn(oldData);
  });
};
