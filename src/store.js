import {createStore} from 'redux';
import Images from './data/Images';
import Characters from './data/Characters';

export default createStore(function(state, action) {
  if(state === undefined) {
      return {pageState:'intro', characterIndex: 0, characterMenu: 0, galleryIndex: 0}
  }
  if(action.type === 'changePage') {
      console.log(action.page);
      return {...state, pageState: action.page}
  }
  if(action.type === 'incrementCharacter') {
    if(state.characterIndex < Characters.length-1 && action.value === 1){
      return {...state, characterIndex: state.characterIndex + 1}
    }else if(state.characterIndex > 0 && action.value === -1){
      return {...state, characterIndex: state.characterIndex - 1}
    }
  }
  if(action.type === 'changeCharacter') {
    return {...state, characterIndex: action.value}
  }
  if(action.type === 'changeCharacterMenu') {
    return {...state, characterMenu: action.value}
  }
  if(action.type === 'changeGallery') {
    if(state.galleryIndex < Images.length-1 && action.value === 1){
      return {...state, galleryIndex: state.galleryIndex + 1}
    }else if(state.galleryIndex > 0 && action.value === -1){
      return {...state, galleryIndex: state.galleryIndex - 1}
    }
  }
  return state;
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) 