import { useState } from "react";

type FetchStateType<T> = {
  data: T | null;
  error: Error | null;
  loading: boolean;
};

export const useFetchFunction = <T,>() => {
  const [fetchState, setFetchState] = useState<FetchStateType<T>>({
    data: null,
    error: null,
    loading: false,
  });

  const fetchFunction = (
    customFetch: () => Promise<Response>,
    onSuccess?: (data: T) => void,
    onError?: (error: Error) => void
  ) => {
    setFetchState((prev) => ({ ...prev, loading: true }));
    try {
      customFetch()
        .then((res) => {
          res
            .json()
            .then((data) => {
              onSuccess && onSuccess(data);
              setFetchState((prev) => ({ ...prev, data, loading: false }));
            })
            .catch((e) => {
              onError && onError(e);
              setFetchState((prev) => ({
                ...prev,
                error: e,
                loading: false,
              }));
            });
        })
        .catch((e) => {
          onError && onError(e);
          setFetchState((prev) => ({ ...prev, error: e, loading: false }));
        });
    } catch (e: any) {
      onError && onError(e);
      setFetchState((prev) => ({ ...prev, error: e, loading: false }));
    }
  };

  return { fetchFunction, ...fetchState };
};
