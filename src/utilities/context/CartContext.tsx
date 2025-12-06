"use client";

import { createContext, useContext, useReducer } from 'react';
import {
  CartAction,
  CartContextProps,
  CartItem,
  CartState,
  initialCartState,
} from '@/models/cart.model';

const CartContext = createContext<CartContextProps | undefined>(undefined);

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const payloadItems = Array.isArray(action.payload) ? action.payload : [action.payload];

      const result = payloadItems.reduce(
        (acc, newItem) => {
          const existingItemIndex = acc.items.findIndex(item => item.id === newItem.id);

          const currentItems = [...acc.items];

          if (existingItemIndex >= 0) {
            currentItems.splice(existingItemIndex, 1, newItem); // reemplaza si ya existe
          } else {
            currentItems.push(newItem); // agrega nuevo
          }

          return {
            items: currentItems,
          };
        },
        {
          items: [...state.items],
        }
      );

      return {
        ...state,
        items: result.items,
      };
    }

    case 'REMOVE_ITEM': {
      const itemToRemove = state.items.find(item => item.id === action.payload.id);
      if (itemToRemove) {
        const updatedItems = state.items.filter(item => item.id !== action.payload.id);
        return {
          ...state,
          items: updatedItems,
        };
      }
      return state;
    }

    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };

    case 'CLEAR_CART':
      return initialCartState;

    default:
      return state;
  }
};

interface CartProviderProps {
  children: React.ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialCartState);

  const addItem = (item: CartItem) => {
    dispatch({ type: 'ADD_ITEM', payload: item });
  };

  const removeItem = (id: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id } });
  };

  const updateQuantity = (id: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  return (
    <CartContext.Provider
      value={{ state, dispatch, addItem, removeItem, updateQuantity, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart debe ser usado dentro de un CartProvider');
  }
  return context;
};
