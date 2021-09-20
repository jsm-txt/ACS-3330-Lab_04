export const RANDSTRING = 'String'
export const BACKTOMONKE = 'String'

export const randFunc = (variable) => {
  return {
    type: RANDSTRING,
    power: {variable}
  }
  
}
export const randMonke = (varb) => {
  return {
    type: BACKTOMONKE,
    pow: {varb}
    
  }
  
}