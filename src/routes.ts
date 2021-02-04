import {Router} from 'express';
import UrlShortenController from './controllers/UrlShortenController';
import UrlRedirectController from './controllers/UrlRedirectController';

const routes = Router();
const shortenController = new UrlShortenController();
const redirectController = new UrlRedirectController();

//@route   POST /api/url/shorten
//@desc    Create short url
routes.post('/shorten', shortenController.index);

//@route GET /api/url/:code
//@desc Redirect to original url
routes.get('/:code', redirectController.index);

export default routes;