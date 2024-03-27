export interface AxiosError {
  response: {
    data: {
      error_id: number;
      error_message: string;
      error_name: string;
    };
  };
}

export interface QueryParam {
  key: string;
  value: string | number | null;
}
export interface QueryParamObject {
  [key: string]: string | number | null;
}

export interface TagApiResponse {
  items: TagApi[];
  has_more: boolean;
  quota_max: number;
  quota_remaining: number;
  error_id?: number;
  error_message?: string;
  error_name?: string;
}

export interface TagResponse {
  items: Tag[];
  hasMore: boolean;
  quotaMax: number;
  quotaRemaining: number;
  errorId?: number;
  errorMessage?: string;
  errorName?: string;
}

export interface TagApi {
  has_synonyms: boolean;
  is_moderator_only: boolean;
  is_required: boolean;
  count: number;
  name: string;
  collectives?: any;
}

export interface Tag {
  hasSynonyms: boolean;
  isModeratorOnly: boolean;
  isRequired: boolean;
  count: number;
  name: string;
  errorId?: number;
  errorMessage?: string;
  errorName?: string;
  collectives?: any;
}
