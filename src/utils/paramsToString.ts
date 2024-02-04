export type QueryParams = { [key: string]: any };

const paramsToString = (params: QueryParams) => {
  return Object.entries(params).map(([key, value]) => `${key}=${value}`).join('&');
}

export default paramsToString;
