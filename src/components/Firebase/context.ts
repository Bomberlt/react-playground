import React from 'react';
import { app } from 'firebase/app';
const FirebaseContext = React.createContext<app.App | null>(null);
export default FirebaseContext;