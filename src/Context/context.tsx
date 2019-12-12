import {createContext} from 'react';
import {Dictionary, Lang} from '../type/typeLang';

export type Context = {
    dictionary: Dictionary,
    changeLang: (lang: Lang) => void,
    lang: Lang,
}

export const AppContext = createContext<Context | null>(null);
