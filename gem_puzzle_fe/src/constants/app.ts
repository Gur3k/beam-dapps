export enum StoreActions {
  SET_TIME = 'SET_TIME',
  SET_MODE = 'SET_MODE',
  SET_MOVE = 'SET_MOVE',
  SET_PIC = 'SET_PIC',
  SET_RATE = 'SET_RATE',
  SET_PKEY = 'SET_PKEY',
  SET_PIC_OPT = 'SET_PIC_OPT',
  SET_ACTIVE = 'SET_ACTIVE',
  SET_AUTOPLAY = 'SET_AUTOPLAY',
  SET_REWARD = 'SET_REWARD',
  SET_TX = 'SET_TX',
  SET_MY_INFO = 'SET_MY_INFO'
}

export enum GridActions {
  SET_GRID = 'SET_GRID',
  SET_STATUS = 'SET_STATUS',
  SET_SOLUTION = 'SET_SOLUTION',
  SET_GAME = 'SET_GAME'
}

export enum PuzzleReducerActions {
  SET_GRID = 'SET_GRID'
}

export enum BeamAmmount {
  MIN_AMOUNT = 0,
  MAX_AMOUNT = 10,
  GROTHS_IN_BEAM = 100000000
}

export enum BoardView {
  NUMBERS = 'NUMBERS',
  PICTURE = 'PICTURE'
}

export enum MenuBtn {
  NEW = 'NEW',
  CONTINUE = 'CONTINUE',
  OPTIONS = 'OPTIONS',
  CANCEL = 'CANCEL',
  VIEW_CONTRACTS = 'VIEW_CONTRACTS',
  DESTROY_CONTRACT = 'DESTROY_CONTRACT',
  RETURN = 'RETURN',
  BEST = 'BEST',
  CLAIM_REWARD = 'CLAIM_REWARD'
}

export enum RouterMode {
  HISTORY = 'history',
  HASH = 'hash'
}

export enum Routes {
  OPTIONS = 'options',
  RETURN = 'return',
  MAIN = '/',
  BEST = 'best',
  PLAY = 'play'
}