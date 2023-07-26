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
 *     reset-password_Input:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           description: the email ID.
 *         password:
 *           type: string
 *           description: The  is the password.
 *         confirm_Password:
 *           type: string
 *           description: The  is the confirm password.
 *     Error:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           description: Error message.
 */

/**
 * @swagger
 * /api/reset-password:
 *   post:
 *     summary: User reset-password.
 *     description: Generate your new password.
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/reset-password_Input'
 *     responses:
 *       '200':
 *         description: "Password reset successful."
 *       '404':
 *         description: "User not found."
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */