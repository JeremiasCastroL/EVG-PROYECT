import { Router } from "express";
import { EditTerms } from "../controllers/terms&privacy.js";

const router = Router()

router.put("/admin/terms-of-use", EditTerms)

export default router