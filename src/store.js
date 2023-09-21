import { configureStore } from "@reduxjs/toolkit";
import shadows from "./features/shadows.js";
import boxProperties from "./features/boxProperties.js";

export const store = configureStore({
    reducer: {
        shadows,
        boxProperties
    }
})