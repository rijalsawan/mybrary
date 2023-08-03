import React from 'react'
import { useRouter } from 'next/router'
import mongoose from 'mongoose';
import Book from '../../models/Book';

export const getServerSideProps = async (context) => {
    if (!mongoose.connections[0].readyState) {
      await mongoose.connect(process.env.MONGO_URI);
    }
    const books = await Book.findById({_id: context.query.slug});
    return {
      props: { books: JSON.parse(JSON.stringify(books)) },
    };
  };

const Slugs = ({books}) => {
    const router = useRouter()
    const { slug } = router.query
    console.log(books);

  return (
   <>
    <section className="text-gray-600 body-font">
  <div className="container px-5  mx-auto flex flex-col">
    <div className="lg:w-4/6 mx-auto">
        <div className="flex">
      <div className="rounded-lg h-64 overflow-hidden w-2/5">
        <img alt="content" className="object-contain shadow-xl h-full w-full" src={books.cover}/>
      </div>
      <div className='my-5 w-3/4'>
        <h1 className='text-center text-white text-md lg:text-lg  my-5'>Title: {books.title}</h1>
        <h1 className='text-center text-white text-md lg:text-lg  my-5'>Author: {books.author}</h1>
        <h1 className='text-center  text-white text-md lg:text-lg my-5'>Genre: {books.genre}</h1>
        <h1 className='text-center text-white text-md lg:text-lg my-5'>Pages: {books.pages}</h1>
      </div>
      </div>
      <div className="flex flex-col sm:flex-row mt-10">
        <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
          <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <div className="flex flex-col items-center text-center justify-center">
            <h2 className="font-medium title-font mt-4 text-white text-lg">{books.author}</h2>
            <div className="w-12 h-1 bg-red-500 rounded mt-2 mb-4"></div>
            <p className="text-white">Raclette knausgaard hella meggs normcore williamsburg enamel pin sartorial venmo tbh hot chicken gentrify portland.</p>
          </div>
        </div>
        <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
            <h1 className='text-red-500 text-xl'>Description:</h1>
          <p className="leading-relaxed text-lg mb-4 text-white">Meggings portland fingerstache lyft, post-ironic fixie man bun banh mi umami everyday carry hexagon locavore direct trade art party. Locavore small batch listicle gastropub farm-to-table lumbersexual salvia messenger bag. Coloring book flannel truffaut craft beer drinking vinegar sartorial, disrupt fashion axe normcore meh butcher. Portland 90's scenester vexillologist forage post-ironic asymmetrical, chartreuse disrupt butcher paleo intelligentsia pabst before they sold out four loko. 3 wolf moon brooklyn.</p>
        </div>
      </div>
    </div>
  </div>
</section>
   </>
  )
}

export default Slugs