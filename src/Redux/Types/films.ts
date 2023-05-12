import { CardsListType } from './../../Constants/@types';

export type FilmsPayload = {
   query_term?: string,
   page?: number,
   offset: number,
}

export type SetFilmsPayload = {
   isOverwrite: boolean;
   films: CardsListType;
}