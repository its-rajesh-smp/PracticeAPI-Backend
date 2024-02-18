import { Router } from "express";
import EndpointController from "../controllers/endpointController.js";

const router = Router();

/* -------------------------------------------------------------------------- */
/*                                  ENDPOINTS                                 */
/* -------------------------------------------------------------------------- */
// api to get endpoint data
router.get("/:apiKey", EndpointController.getEndpointDetails);

// api to create endpoint
router.post("/create", EndpointController.createNewEndpoint);

export default router;
