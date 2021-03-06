import axios from 'axios';
// import { stringify } from 'query-string';

export const rootValue = {
  authenticate: async ({ code }: { code: string }) => {
    const response = await axios.post(
      'https://accounts.spotify.com/api/token',
      JSON.stringify({
        grant_type: 'authorization_code',
        code,
        redirect_uri: 'http://localhost:3000',
        scope: 'user-read-private user-read-email'
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization:
            'Basic ' +
            Buffer.from(
              `1858fa46cbbc4d4eaf984357a2ad119b:7ac634c1223d454289b402992fa0cf8e`
            ).toString('base64')
        }
      }
    );
    return { access_token: 'Bearer ' + response.data.access_token };
  },
  getArtists: async ({ term }: any, req: any) => {
    const response = await axios.get(
      `https://api.spotify.com/v1/search?type=artist&q=${term}`,
      {
        headers: {
          Authorization: req.headers.authorization
        }
      }
    );
    return {
      artists: response.data.artists.items.map((item: any) => item.name)
    };
  },
  getAlbums: async ({ id }: any) => {
    const response = await axios.get(`https://api.spotify.com/v1/albums/${id}/tracks`)
    return { albums: response.data }
  },
};