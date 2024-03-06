// use NODE_ENV to not have to change config based on where it's deployed
export const NEXT_PUBLIC_URL = process.env.NODE_ENV == "development" ? 'http://localhost:3000' : 'https://kn55hlkl-3000.asse.devtunnels.ms/';
