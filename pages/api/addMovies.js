import movie from '../../models/Movie';
import connectDb from '../../middleware/mongoose';

const handler = async (req, res) => {
  if (req.method == 'POST'){
      try{
        const movie = new movie({
          title: req.body.title,
          type: req.body.type,
          releaseYear: req.body.releaseYear,
        })
        await movie.save();
        res.status(201).json({message: "movie added successfully"})
      }
      catch(err){
        res.status(500).json({error: "Something went wrong"})
      }
    }
  }

export default connectDb(handler)
