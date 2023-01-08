import { RootState } from '../utils/store';

export default {
   getTheme: ( state: RootState) => state.themeReducer.theme 
}