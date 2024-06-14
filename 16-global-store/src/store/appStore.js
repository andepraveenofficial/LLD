import { configureStore } from '@reduxjs/toolkit'

import grandSlice from './Slices/grandSlice';
import parentSlice from './Slices/parentSlice';
import childSlice from './Slices/childSlice';

const appStore = configureStore(
    {
        reducer: {
            // Add your reducers here
            grand:grandSlice,
            parent:parentSlice,
            child:childSlice
        }
    }
)


export default appStore;