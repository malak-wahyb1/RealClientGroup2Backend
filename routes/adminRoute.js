import express from "express";
const router = express.Router();
import controller from "../controllers/adminController.js"
import SuperAdminAuth from "../middleware/verifySuperAdmin.js";
import adminAuth from "../middleware/verifyAdmin.js";
router.post("/register",SuperAdminAuth,controller.register)
router.post("/login",controller.login)
router.put("/upgrade/:id",SuperAdminAuth,controller.upgradeRole)
router.delete("/delete/:id",SuperAdminAuth,controller.deleteAdmin)
router.get("/getall",controller.getallAdmin)
router.put("/update/:id",adminAuth,controller.updateAdmin)
export default router;

