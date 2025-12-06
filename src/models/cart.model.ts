export interface ProductItem {
  id: string;
  quantity?: number;
}

export interface SimplePatternCartItem {
  id: string;
  quantity: number;
  products: { edges: { node: { id: string } }[] }
}

export interface CartState {
  items: CartItem[];
}

// Producto individual
export interface ProductCartItem {
  __typename: 'ProductNode';
  id: string;
  altName: string;
  code: string;
  color: string;
  imageThumbSmall: string;
  imageThumbMedium?: string;
  imageThumbLarge?: string;
  products?: {
    edges: { node: ProductCartItem }[]; // Para compatibilidad con patrones
  } | null; // Puede ser null si no es un patrón
  isNew: boolean;
  quantity: number;
}

// Pattern con múltiples productos
export interface PatternCartItem {
  __typename: 'PatternNode';
  id: string;
  name: string;
  altName: string;
  imageThumbSmall: string;
  color?: string;
  code?: string;
  slug: string;
  isNew: boolean;
  quantity: number;
  products: {
    __typename: 'ProductNodeConnection';
    edges: {
      __typename: 'ProductNodeEdge';
      node: ProductCartItem; // Referencia al mismo tipo
    }[];
  };
}

export type CartItem = ProductCartItem | PatternCartItem;

export const initialCartState: CartState = {
  items: [],
};

export interface AddItemAction {
  type: 'ADD_ITEM';
  payload: CartItem | CartItem[];
}

export interface RemoveItemAction {
  type: 'REMOVE_ITEM';
  payload: { id: string };
}

export interface UpdateQuantityAction {
  type: 'UPDATE_QUANTITY';
  payload: { id: string; quantity: number };
}

export interface ClearCartAction {
  type: 'CLEAR_CART';
}

export type CartAction =
  | AddItemAction
  | RemoveItemAction
  | UpdateQuantityAction
  | ClearCartAction;

export interface CartContextProps {
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
}