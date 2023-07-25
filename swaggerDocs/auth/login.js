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
 *     LoginInput:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           format: email
 *           description: User's email address.
 *         password:
 *           type: string
 *           description: User's password.
 *       required:
 *         - email
 *         - password
 *     LoginResponse:
 *       type: object
 *       properties:
 *         token:
 *           type: string
 *           description: Authentication token.
 *     Error:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           description: Error message.
 */


/**
 * @swagger
 * /api/login:
 *   post:
 *     summary: User login.
 *     description: Login with user's email and password.
 *     tags:
 *       - Auth
 *     parameters:
 *       - in: body
 *         name: login
 *         description: Login credentials.
 *         required: true
 *         schema:
 *           $ref: '#/components/schemas/LoginInput'
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LoginInput'
 *     responses:
 *       '200':
 *         description: Successful login.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/LoginResponse'
 *       '401':
 *         description: Unauthorized. Invalid credentials.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */


