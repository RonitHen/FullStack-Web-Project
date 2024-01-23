import express , { Request, Response }from "express";
import {PostController} from "../controllers/PostController";
import {PostService} from "../services/PostService";
import {PostDataAccessInMemory} from "../DAL/PostDataAccessInMemory";
import {PostDataAccessSQL} from "../DAL/PostDataAccessSQL";


const router = express.Router();
const postController = new PostController(new PostService(new PostDataAccessSQL()))



router.post('/', async (req: Request, res: Response) => await postController.addPost(req,res))
router.get('/:id', async (req: Request, res: Response) => await postController.getPost(req,res))
export default router;