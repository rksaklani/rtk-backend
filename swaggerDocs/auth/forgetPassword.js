//login

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
 *     Forgot-password_Input:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           format: email
 *           description: User's email address.
 *       required:
 *         - email
 *     Error:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           description: Error message.
 */


/**
 * @swagger
 * /api/forgot-password:
 *   post:
 *     summary: User forgot-password.
 *     description: Enter yor email.
 *     tags:
 *       - Auth
 *     parameters:
 *       - in: body
 *         name: forgot-password
 *         description: forgot-password credentials.
 *         required: true
 *         schema:
 *           $ref: '#/components/schemas/Forgot-password_Input'
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Forgot-password_Input'
 *     responses:
 *       '200':
 *         description: Password reset email sent successfully.
 *       '404':
 *         description: "User not found ."
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */


