
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
 * /api/update_student/{id}:
 *   put:
 *     summary: Update student image by ID
 *     description: Update the image of a student with a specific ID.
 *     tags:
 *       - Student
 *     parameters:
 *       - name: id
 *         in: path
 *         description: The ID of the student to update the image for.
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               image:
 *                 type: string
 *                 format: binary
 *     responses:
 *       '200':
 *         description: Successful update
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/StudentImageUpdate'
 *       '400':
 *         description: Invalid request payload
 *       '404':
 *         description: Student not found
 *       '500':
 *         description: Internal server error
 */