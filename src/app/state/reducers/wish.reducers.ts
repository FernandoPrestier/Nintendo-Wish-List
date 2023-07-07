import { createReducer, on } from "@ngrx/store";
import * as wishActions from "../actions/wish.actions";
import { catalogDataInitialState } from "../actions/wish-initial-state";

const _wishReducer = createReducer(
    catalogDataInitialState,
    on( wishActions.setFavoriteAction, (state, { idMock }) => ({
        whished: addFavoriteWished(idMock, state),
        mockData: addFavoriteMock(idMock, state)
    })),
    on( wishActions.setNotFavoriteAction, (state, { idMock }) => ({
        whished: removeFavoriteWish(idMock, state),
        mockData: removeFavoriteMock(idMock, state)
    })),
    on( wishActions.ResetState, () => catalogDataInitialState ),
);

function addFavoriteMock(id: string, data: wishActions.IcatalogData){
    let _mockdata = data.mockData;
    let _mockdataAux = [];
    let _item:any = _mockdata.find(e => e.id == id);
    let _index = _mockdata.findIndex(e => e.id == id);

    _item = {
        ..._item,
        isFavorite: true
    }

    for(let i = 0; i < _mockdata.length; i++){
        if (_index == i) {
            _mockdataAux.push(_item)
        }
        else{
            _mockdataAux.push(_mockdata[i])
        }
    }

    data = {
        ...data,
        mockData: _mockdataAux
    }

    return data.mockData
}

function addFavoriteWished(id: string, data: wishActions.IcatalogData){
    let _mockdata = data.mockData;
    let _mockdataWish = [];
    let _item:any = _mockdata.find(e => e.id == id);
    
    if( !data.whished.find(e => e.id == id) && _item != undefined) {
        _mockdataWish = [...data.whished, {..._item, isFavorite: true}]
        data = {
            ...data,
            whished: _mockdataWish
        }
    }

    return data.whished
}

function removeFavoriteMock (id: string, data: wishActions.IcatalogData){
    let _item = data.mockData.find(e => e.id == id);
    if (_item == undefined) return data.mockData;
    
    _item = {
        ..._item,
        isFavorite: false
    }
    
    let _cleanGroup = data.mockData.filter(e => e.id != id);
    data = {
        ...data,
        mockData: [_item,..._cleanGroup]
    }
    
    return data.mockData
}

function removeFavoriteWish (id: string, data: wishActions.IcatalogData){
    let _dataWish = data.whished.filter(e => e.id != id);

    data = {
        ...data,
        whished: [..._dataWish]
    }
    
    return data.whished
}



export function wishReducer(state: any, action: any){
    return _wishReducer(state, action)
}