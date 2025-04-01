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


export const updateAllQueryCache = (endpoint, updateFn) => {
  const matchingQueries = queryClient.getQueriesData({ queryKey: [endpoint] });
  matchingQueries.forEach(([queryKey, cachedData]) => {
    if (cachedData) {
      const updatedData = updateFn(cachedData);
      queryClient.setQueryData(queryKey, updatedData);
    }
  });
};
