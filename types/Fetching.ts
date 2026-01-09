export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    stree: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: { lat: string; lng: string };
  };
};