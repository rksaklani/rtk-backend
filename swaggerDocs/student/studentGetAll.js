
/**
 * @swagger
 * components:
 *   schemas:
 *     Student:
 *       type: object
 *       properties:
 *         _id:
 *           type: integer
 *         title:
 *           type: string
 *         timestamp:
 *           type: string
 *           format: date-time
 */



/**
 * @swagger
 * /api/student:
 *   get:
 *     summary: This API is used to show the list of users.
 *     description: This API is used to check if the GET method is working or not.
 *     tags:
 *       - Student
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