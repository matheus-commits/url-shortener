import {Request, Response} from 'express';
import validUrl from 'valid-url';
import shortid from 'shortid';
import Url from '../models/url';



export default class UrlShortenController {

    async index(req:Request, res:Response){
        const {longUrl} = req.body;

        //create short  id
        const urlCode:string = shortid.generate();

        //Check long url
        if(validUrl.isUri(longUrl)){
            try{
                let url = await Url.findOne({longUrl});

                if(url){
                    res.json(url);
                }else{
                    const shortUrl:string = 'http://localhost:3333' + '/api/url' +  '/' + urlCode;

                    url = new Url({
                        longUrl,
                        shortUrl,
                        urlCode,
                        date: new Date()
                    })

                    await url.save();
                    res.json(url);
                }
            }catch(err){
                console.log(err)
                res.status(500).json('Server error');
            }
        }else{
            res.status(401).json('Invalid long url')
        }
    }
}