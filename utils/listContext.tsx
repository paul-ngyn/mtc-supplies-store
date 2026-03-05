'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export interface ListItem {
  id: string;
  name: string;
  brand: string;
  category: string;
  size?: string;
  quantity: number;
  image?: string;
  slug: string;
  brandSlug: string;
}

interface ListContextType {
  listItems: ListItem[];
  addToList: (item: Omit<ListItem, 'id'>) => void;
  removeFromList: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearList: () => void;
  totalItems: number;
}

const ListContext = createContext<ListContextType | undefined>(undefined);

export function ListProvider({ children }: { children: React.ReactNode }) {
  const [listItems, setListItems] = useState<ListItem[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);

  // Load list from localStorage on mount
  useEffect(() => {
    const savedList = localStorage.getItem('productList');
    if (savedList) {
      try {
        setListItems(JSON.parse(savedList));
      } catch (error) {
        console.error('Error loading list:', error);
      }
    }
    setIsInitialized(true);
  }, []);

  // Save list to localStorage whenever it changes
  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem('productList', JSON.stringify(listItems));
    }
  }, [listItems, isInitialized]);

  const addToList = (item: Omit<ListItem, 'id'>) => {
    const id = `${item.slug}-${item.size || 'default'}-${Date.now()}`;
    const newItem: ListItem = { ...item, id };
    setListItems((prev) => [...prev, newItem]);
  };

  const removeFromList = (id: string) => {
    setListItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromList(id);
      return;
    }
    setListItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const clearList = () => {
    setListItems([]);
  };

  const totalItems = listItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <ListContext.Provider
      value={{
        listItems,
        addToList,
        removeFromList,
        updateQuantity,
        clearList,
        totalItems,
      }}
    >
      {children}
    </ListContext.Provider>
  );
}

export function useList() {
  const context = useContext(ListContext);
  if (context === undefined) {
    throw new Error('useList must be used within a ListProvider');
  }
  return context;
}
