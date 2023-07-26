/**
 * @swagger
 * components:
 *   schemas:
 *     StudentImage:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: The ID of the student image.
 *         image:
 *           type: string
 *           description: The URL or path of the student image.
 *       required:
 *         - id
 *         - image
 *       description: Student image information.
 */

/**
 * @swagger
 * /api/student_delete:
 *   delete:
 *     summary: Delete a list of all student .
 *     description: Fetches a list of all student .
 *     tags:
 *       - Student
 *     responses:
 *       '200':
 *         description: Successful response containing the list of student .
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/StudentImage'
 *       '400':
 *         description: Bad request.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
