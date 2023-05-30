export default function mapStatusHTTP(status: string): number {
  const statusHTTPMap: Record<string, number> = {
    INVALID_DATA: 400,
    UNAUTHORIZED: 401,
    NOT_FOUND: 404,
    'any.required': 400,
    'string.min': 422,
    'string.base': 422,
    'number.base': 422,
    'array.base': 422,
    'array.includesRequiredUnknowns': 422,
  };
  return statusHTTPMap[status] ?? 500;
}
