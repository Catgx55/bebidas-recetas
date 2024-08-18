import { StateCreator } from "zustand"
import { getCategories, getRecipeById, getRecipes } from "../services/RecipeService"
import type { Categories, Drink, Drinks, Recipe, SearchFilter } from "../types"

export type RecipesSliceType = {
    categories: Categories
    drinks: Drinks
    selectedRecipe: Recipe
    fetchCategories: () => Promise<void>
    searchRecipes: (searchFilters: SearchFilter) => Promise<void>
    selectRecipe: (id: Drink['idDrink']) => Promise<void>

}

export const createRecipeSlice : StateCreator<RecipesSliceType> = (set) => ({
    categories: {
        drinks: []
    },

    drinks: {
        drinks: []
    },

    selectedRecipe: {} as Recipe,

    fetchCategories: async () => {
        const categories = await getCategories()
        set({
            categories
        })
    },

    searchRecipes: async (filters) => {
        const drinks = await getRecipes(filters)
        set({
            drinks
        })
    },

    selectRecipe: async (id) => {
        const selectedRecipe = await getRecipeById(id)
        set({
            selectedRecipe
        })
    }
})