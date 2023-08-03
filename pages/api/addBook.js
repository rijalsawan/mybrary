import Book from '../../models/Book';
import connectDb from '../../middleware/mongoose';

const handler = async (req, res) => {
  if (req.method == 'POST'){
      try{
        const book = new Book({
          title: req.body.title,
          author: req.body.author,
          pages: req.body.pages,
          genre: req.body.genre,
          cover: req.body.cover
        })
        await book.save();
        res.status(201).json({message: "Book added successfully"})
      }
      catch(err){
        res.status(500).json({error: "Something went wrong"})
      }
    }
  }

export default connectDb(handler)
