import connectDb from '../../middleware/mongoose.js'
import Movie from '../../models/Movie.js'

const handler = async (req, res) => {
    const movies = await Movie.find()
    res.status(200).json(movies)
}

export default connectDb(handler)
