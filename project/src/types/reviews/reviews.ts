export type Review = {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: {
    avatarUrl: string;
    id: number;
    isPro: boolean;
    name: string;
  };
}

export type ReviewData = {
  comment: string;
  rating: string;
  id: number;
  onSuccess: () => void;
}
