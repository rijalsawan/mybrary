import { Inter } from 'next/font/google'
import Card from '@/components/Card'
import mongoose from 'mongoose'
import Book from '@/models/Book'


const inter = Inter({ subsets: ['latin'] })

export default function Home({ books}) {
  return (
    <>
      <Card books = {books}/>
    </>
  )
}

export const getServerSideProps = async () => {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }
  const books = await Book.find();
  return {
    props: { books: JSON.parse(JSON.stringify(books)) },
  };
};
