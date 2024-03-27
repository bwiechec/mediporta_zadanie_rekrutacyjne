import axios from "axios";
import { useQuery } from "react-query";
import {
  AxiosError,
  QueryParam,
  QueryParamObject,
  TagApiResponse,
  TagResponse,
} from "../utils/types";
import { useMemo } from "react";

const parseParams = (queryParams: QueryParam[]) => {
  const obj: QueryParamObject = {};
  const pageSize = 5;

  obj["pagesize"] = pageSize;

  queryParams.forEach((param) => {
    obj[param.key] = param.value;
  });

  return obj;
};

const parseResponse = (data: TagApiResponse): TagResponse => {
  const response: TagResponse = {
    items: data?.items?.map((item) => ({
      hasSynonyms: item?.has_synonyms,
      isModeratorOnly: item?.is_moderator_only,
      isRequired: item?.is_required,
      count: item?.count,
      name: item?.name,
    })),
    hasMore: data?.has_more,
    quotaMax: data?.quota_max,
    quotaRemaining: data?.quota_remaining,
    errorId: data?.error_id,
    errorMessage: data?.error_message,
    errorName: data?.error_name,
  };
  return response;
};

export const useTagList = (queryParams: QueryParam[]) => {
  const parsedParams = useMemo(() => parseParams(queryParams), [queryParams]);

  const url = "https://api.stackexchange.com/2.3/tags?site=stackoverflow";

  const { isLoading, data, isError, error, status, isPreviousData } = useQuery({
    queryKey: [parsedParams],
    queryFn: async () => {
      try {
        const response = await axios.get(url, {
          params: parsedParams,
        });
        return parseResponse(response.data);
      } catch (error: AxiosError | any) {
        console.error(error?.response?.data);
        return parseResponse(error?.response?.data);
      }
    },
    keepPreviousData: true,
  });

  return { tagData: data, isLoading, isError, error, status, isPreviousData };
};
