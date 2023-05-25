export type ServiceResponseSuccess<T> = {
  status: 'SUCCESSFUL' | 'CREATED';
  data: T;
};

export type ServiceResponse<T> = ServiceResponseSuccess<T>;
