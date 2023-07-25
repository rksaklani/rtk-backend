

/**
 * @swagger
 * components:
 *   schemas:
 *     StudentImage:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: The ID of the student image.
 *         name:
 *           type: string
 *           description: The name of the student image.
 *         image:
 *           type: string
 *           description: The URL or path of the student image.
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
 * /api/image_download/{id}:
 *   get:
 *     summary: Get student image by ID.
 *     description: Retrieve a student's image by its ID.
 *     tags:
 *       - Users
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
