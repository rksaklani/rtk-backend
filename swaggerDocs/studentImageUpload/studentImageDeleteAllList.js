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
 * /api/delete_all_student_images:
 *   delete:
 *     summary: Delete a list of all student images.
 *     description: Fetches a list of all student images.
 *     tags:
 *       - Student Image
 *     responses:
 *       '200':
 *         description: Successful response containing the list of student images.
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
