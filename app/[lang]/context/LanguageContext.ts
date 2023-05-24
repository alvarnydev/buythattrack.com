'use client';
import { createContext, useContext } from 'react';

export const LanguageContext = createContext('en');
export const useLanguageContext = () => useContext(LanguageContext);
