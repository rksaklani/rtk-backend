/**
 * @swagger
 * components:
 *   schemas:
 *     StudentImageUpdate:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: The ID of the student to update.
 *         image:
 *           type: string
 *           description: The URL or path of the updated image.
 *       required:
 *         - id
 *         - image
 *       example:
 *         id: 123
 *         image: "https://example.com/images/student123_updated.jpg"
 */

/**
 * @swagger
 * /api/update_student_image/{id}:
 *   put:
 *     summary: Update student image by ID
 *     description: Update the image of a student with a specific ID.
 *     tags:
 *       - Student Image
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