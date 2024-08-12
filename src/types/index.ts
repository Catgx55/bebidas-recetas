import { z } from "zod"
import { CategoriesAPIResponseSchema } from "../utils/recipe-schema"

export type Categories = z.infer<typeof CategoriesAPIResponseSchema>