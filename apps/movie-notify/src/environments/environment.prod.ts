export const environment = {
    production: true,
  backendUrl: 'http://localhost:9000/api',
  movieUri: () => `${ environment.backendUrl }/movie`,
};
