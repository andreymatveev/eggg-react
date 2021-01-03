// export const PZ_HOST = environment.production ? '//eggg.ru:10001' : 'http://localhost:10001';
export const PZ_HOST = '//eggg.ru:10001';

export const PZ_ENDPOINTS = {
  login: () => `${PZ_HOST}/login`,
  news: () => `${PZ_HOST}/news`,
  message: () => `${PZ_HOST}/telegram/message`,
  photo: () => `${PZ_HOST}/telegram/photo`,
};
