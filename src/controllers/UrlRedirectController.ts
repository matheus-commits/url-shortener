import {Request, Response} from 'express';
import Url from '../models/url';

export default class UrlRedirectController{
    async index(req:Request, res:Response){
        try{
            const url:any = await Url.findOneAndDelete({urlCode: req.params.code});

            if(url){
                return res.redirect(url.longUrl);
            }else{
                return res.status(404).json('No url found');
            }
        }catch(err){
            console.log(err);
            res.status(500).json('Server error');
        }
    }
}