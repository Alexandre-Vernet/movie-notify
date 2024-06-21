export const environment = {
    production: false,
    backendUrl: 'http://localhost:9000/api',
    movieUri: () => `${ environment.backendUrl }/movie`,
};
