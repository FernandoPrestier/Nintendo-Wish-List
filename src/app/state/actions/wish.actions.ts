import { createAction, props } from "@ngrx/store";


export interface IcatalogData {
    whished : IitemGame[],
    mockData: IitemGame[]
}

export interface IitemGame {
    id: string,
    img: string,
    title: string,
    date: string,
    version: IversionItemGame,
    price: string,
    isFavorite: boolean
}

interface IversionItemGame {
    isOn: boolean,
    classText: string,
    text: string
}


export class catalogDataModel {
    constructor(
        public whised : itemGameModel[], 
        public mockData: itemGameModel[]
    ){}
}
class itemGameModel {
    constructor(
        public id: string,
        public img: string,
        public title: string,
        public date: string,
        public version: versionItemGameModel,
        public price: string,
        public isFavorite: boolean
    ){}
}
class versionItemGameModel {
    constructor(
        public isOn: boolean,
        public classText: string,
        public text: string
    ){}
}


export const setFavoriteAction = createAction(
    "[setFavoriteAction] Nuevo articulo favorito",
    props<{idMock : string}>()
);

export const setNotFavoriteAction = createAction(
    "[setNotFavoriteAction] Sacar articulo favorito",
    props<{idMock : string}>()
);

export const ResetState = createAction(
    "[ResetState] Reinicio de informacion"
);