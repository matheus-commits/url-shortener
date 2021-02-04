import mongoose from 'mongoose';

const urlSchema = new mongoose.Schema({

    longUrl:{
        type: String,
        required: true
    },
    shortUrl:{
        type: String,
        required: true,
    },
    date:{
        type: String,
        required: true,
        default: Date.now()
    },
    urlCode:{
        type:String,
        require:true
    }
})

export default mongoose.model('Url', urlSchema);