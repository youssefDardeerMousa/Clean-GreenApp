import joi from "joi";
import { IsValidObjectId } from "../../middleware/validation.middleware.js";
export const createSubCategorySchema = joi
  .object({
    Name: joi.string().min(5).max(20).required(),
    categoryId: joi.string(),
    description: joi.string(),
    availableItems: joi.number().min(1).required(),
    price: joi.number().min(1).required(),
    discount: joi.number().min(1).max(100),
    Slug: joi.string().min(5).max(20).required()
  })
  .required();

// update
export const updateSubCategorySchema = joi
  .object({
    name: joi.string().min(5).max(20),
    categoryId: joi.string().custom(IsValidObjectId).required(),
    subcategoryId: joi.string().custom(IsValidObjectId).required(),
  })
  .required();

// delete
export const deleteSubCategorySchema = joi
  .object({
    categoryId: joi.string().custom(IsValidObjectId).required(),
    subcategoryId: joi.string().custom(IsValidObjectId).required(),
  })
  .required();

  export const SubCategorySchema = joi
  .object({
    subcategoryId: joi.string().custom(IsValidObjectId).required(),
  })
  .required();

