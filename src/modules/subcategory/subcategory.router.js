import { Router } from "express";
import { fileUpload, filterObject } from "../../../utils/multer.js";
import { SearchSubcategory, allSubCategories, createSubCategory, deleteSubCategory, updateSubCategory } from "./subcategory.controller.js";
import { createSubCategorySchema, deleteSubCategorySchema, updateSubCategorySchema } from "./subcategory.validation.js";
import { isAuthenticated } from "../../middleware/authentication.middleware.js";
import { isAuthorized } from "../../middleware/authorization.middleware.js";
import { isValid } from "../../middleware/validation.middleware.js";




const router = Router({ mergeParams: true });

// create
router.post(
  "/:categoryId",
  isAuthenticated,
  isAuthorized("admin"),
  fileUpload(filterObject.image).fields([
    { name: "Image", maxCount: 1 },
    { name: "images", maxCount: 3 },
  ]),
  isValid(createSubCategorySchema),
  createSubCategory
);

// update
router.patch(
  "/:subcategoryId",
  isAuthenticated,
  isAuthorized("admin"),
  fileUpload(filterObject.image).single("subcategory"),
  isValid(updateSubCategorySchema),
  updateSubCategory
);

// delete
router.delete(
  "/:subcategoryId",
  isAuthenticated,
  isAuthorized("admin"),
  isValid(deleteSubCategorySchema),
  deleteSubCategory
);

// read SearchSubcategory
router.get("/:categoryId", allSubCategories)
router.get("/:categoryId/search", SearchSubcategory)

export default router;
