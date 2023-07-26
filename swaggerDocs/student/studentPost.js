
/**
 * @swagger
 * tags:
 *   name: Student
 *   description: API endpoints related to users
 */



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
 *   post:
 *     summary: Create a new student.
 *     description: Create a new student with the given title and ID.
 *     tags:
 *       - Student
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Student'
 *     responses:
 *       '200':
 *         description: Success. The student has been created.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Student'
 *       '400':
 *         description: Bad Request. Invalid or missing data.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */

