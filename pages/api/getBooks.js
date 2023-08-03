import connectDb from '../../middleware/mongoose.js'
import Book from '../../models/Book.js'

const handler = async (req, res) => {
    const books = await Book.find()
    res.status(200).json(books)
}

export default connectDb(handler)
