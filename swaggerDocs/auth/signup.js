//signup

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
 *     SignupInput:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: User's name.
 *         email:
 *           type: string
 *           format: email
 *           description: User's email address.
 *         password:
 *           type: string
 *           description: User's password.
 *         confirm_Password:
 *           type: string
 *           description: Confirm password (should match with password).
 *       required:
 *         - name
 *         - email
 *         - password
 *         - confirm_Password
 *     SignupResponse:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           description: Success message.
 *     Error:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           description: Error message.
 */


/**
 * @swagger
 * /api/signup:
 *   post:
 *     summary: User signup.
 *     description: Signup with user's details.
 *     tags:
 *       - Auth
 *     parameters:
 *       - in: body
 *         name: signup
 *         description: Signup details.
 *         required: true
 *         schema:
 *           $ref: '#/components/schemas/SignupInput'
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SignupInput'
 *     responses:
 *       '200':
 *         description: Successful signup.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SignupResponse'
 *       '400':
 *         description: Bad Request. Invalid or missing data.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
