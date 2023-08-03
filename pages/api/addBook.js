import Book from '../../models/Book';
import connectDb from '../../middleware/mongoose';

const handler = async (req, res) => {
  if (req.method == 'POST'){
      try{
        const book = new Book({
          id: req.body.id,
        })
        await book.save();
        res.status(201).json({success: true})
      }
      catch(err){
        console.log(err);
      }
    }
  }

export default connectDb(handler)
