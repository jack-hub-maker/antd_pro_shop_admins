import { Effect, Reducer } from 'umi';

export type MenuModelState = {
  menuData?: [];
  menuNameObj?: {};
  defultPage?: '';
};

export type MenuMode = {
  namespace: 'menu';
  state: MenuModelState;

  reducers: {
    save: Reducer<MenuModelState>;
    saveName: Reducer<MenuModelState>;
  };
};

const MenuModelType: MenuMode = {
  namespace: 'menu',

  state: {
    menuData: [],
    menuNameObj: {},
    defultPage: '',
  },

  reducers: {
    save(state, action) {
      return {
        ...state,
        menuData: action.payload || [],
      };
    },
    saveName(state, action) {
      return {
        ...state,
        menuNameObj: action.payload || {},
        // defultPage: action.payload.defultPage || '',
      };
    },
  },
};

export default MenuModelType;
