export type CardType = {
   id: number;
   image: string;
   title: string;
   genres: string[];
   rating: number;
};

export type CardsListType = Array<CardType>;

export enum Theme {
   Light = 'light',
   Dark = 'dark'
}