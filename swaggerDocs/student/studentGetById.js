
/**
 * @swagger
 * components:
 *   schemas:
 *     Student:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         title:
 *           type: string
 *         timestamp:
 *           type: string
 *           format: date-time
 *
 *     Error:
 *       type: object
 *       properties:
 *         error:
 *           type: string
 *           description: Error message.
 */




/**
 * @swagger
 * /api/student/{id}:
 *   get:
 *     summary: This API is used to show the user from the user list by ID.
 *     description: This API is used to check if the GET by ID method is working or not.
 *     tags:
 *       - Users
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Numeric ID required
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success. The GET method is working.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Student'
 */
