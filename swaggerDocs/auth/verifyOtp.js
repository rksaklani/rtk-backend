/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: API endpoints related to Auth
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     verifying-otp_Input:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           description: the email ID.
 *         otp:
 *           type: string
 *           description: The OTP (One-Time Password) string.
 *     Error:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           description: Error message.
 */

/**
 * @swagger
 * /api/verifying-otp:
 *   post:
 *     summary: User verifying-otp.
 *     description: Send the Otp.
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/verifying-otp_Input'
 *     responses:
 *       '200':
 *         description: Otp is verified successfully.
 *       '404':
 *         description: "User not found."
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */