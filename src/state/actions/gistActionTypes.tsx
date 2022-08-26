export const GIST_LOADING = "GIST_LOADING";
export const GIST_FAIL = "GIST_FAIL";
export const GIST_SUCCESS = "GIST_SUCCESS";

export type GistType = {
  files: GistFiles[],
  id: GistId[],
  owner: GistOwner[],
  time: GistTime[],
}

export type GistFiles = {
  files: {
    filename: string
    type: string
  }
}

export type GistId = {
  id: string
}

export type GistOwner = {
  owner: {
    avatar_url: string
    login: string 
  }
}

export type GistTime = {
    updated_at: string
}
export interface GistLoading {
  type: typeof GIST_LOADING
}

export interface GistFail {
  type: typeof GIST_FAIL
}

export interface GistSuccess {
  type: typeof GIST_SUCCESS,
  payload: GistType
}

export type GistDispatchTypes = GistLoading | GistFail | GistSuccess