import Movie from '../../models/Movie';
import connectDb from '../../middleware/mongoose';

const handler = async (req, res) => {
  if (req.method == 'POST'){
      try{
        const movie = new Movie({
          id: req.body.id,
        })
        await movie.save();
        res.status(200).json({success: true})
      }
      catch(err){
        res.status(400).json({success: false})
      }
    }
  }

export default connectDb(handler)
