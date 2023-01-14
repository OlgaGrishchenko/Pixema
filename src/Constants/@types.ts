export type CardType = {
   id: number;
   medium_cover_image: string;
   title: string;
   genres: string[];
   rating: number;
};

export type CardsListType = Array<CardType>;

export enum Theme {
   Light = 'light',
   Dark = 'dark'
}

export enum PasswordTypes {
   Password = "password",
   Text = "text",
}