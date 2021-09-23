export enum AppSpecs {
  CID = '3fee46f54e3713c05eb1a2916c0476f8ff557167cc4299b751a1cad6f665ae97',
  TITLE = 'GEM-PUZZLE',
  TX_CHECK_INTERVAL = 3000
}

export enum ReqID {
  CHECK = 'CHECK',
  CHECK_SOLUTION = 'CHECK_SOLUTION',
  INVOKE_DATA = 'INVOKE_DATA',
  START_GAME = 'START_GAME',
  VIEW_BOARD = 'VIEW_BOARD',
  CANCEL_GAME = 'CANCEL_GAME',
  TX_STATUS = 'TX_STATUS',
  VIEW_CONTRACTS = 'VIEW_CONTRACTS',
  DESTROY = 'DESTROY',
  VIEW_CHECK_RESULT = 'VIEW_CHECK_RESULT',
  GET_PKEY = 'GET_PKEY',
  VIEW_TOPS = 'VIEW_TOPS',
  TAKE_PENDING_REWARDS = 'TAKE_PENDING_REWARDS',
  VIEW_MY_PENDING_REWARDS = 'VIEW_MY_PENDING_REWARDS',
  HAS_ACTIVE_GAME = 'HAS_ACTIVE_GAME',
  VIEW_MY_INFO = 'VIEW_MY_INFO'
}

export enum ReqRoles {
  PLAYER = 'player',
  MANAGER = 'manager'
}

export enum ReqMethods {
  INVOKE_CONTRACT = 'invoke_contract',
  PROCESS_INVOKE_DATA = 'process_invoke_data',
  TX_STATUS = 'tx_status'
}

export enum ReqActions {
  CREATE_CONTRACT = 'create_contract',
  VIEW_CONTRACTS = 'view_contracts',
  NEW_GAME = 'new_game',
  CHECK_SOLUTION = 'check_solution',
  VIEW_CURRENT_BOARD = 'view_current_game_board',
  END_CURRENT_GAME = 'end_current_game',
  DESTROY_CONTRACT = 'destroy_contract',
  VIEW_CHECK_RESULT = 'view_check_result',
  VIEW_TOPS = 'view_tops',
  TAKE_PENDING_REWARDS = 'take_pending_rewards',
  GET_MY_INFO = 'get_my_info'
}

export enum ResTXStatus {
  IN_PROGRESS = 'in progress',
  FAILED = 'failed',
  COMPLETED = 'completed'
}

export enum ResTXComment{
  CREATE_NEW_GAME = 'Create new game',
  ENDING_EXISTING_GAME = 'Ending existing game',
  CHECKIN_SOLUTION = 'Checking solution',
  TAKING_PENDING_REWARS = 'Taking pending rewards'
}