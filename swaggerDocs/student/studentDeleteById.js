
/**
 * @swagger
 * components:
 *   schemas:
 *     Student:
 *       type: object
 *       properties:
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
 * /api/student_delete/{id}:
 *   delete:
 *     summary: Delete student image by ID.
 *     description: Retrieve a student's image by its ID.
 *     tags:
 *       - Student
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the student image to retrieve.
 *     responses:
 *       '200':
 *         description: Successful operation. Returns the student image.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/StudentImage'
 *       '404':
 *         description: Student image not found.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
