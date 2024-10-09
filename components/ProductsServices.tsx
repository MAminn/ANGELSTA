import Laptop from '@/public/images/laptop.jpg'
import Image from 'next/image';
import Link from 'next/link';

const ProductsServices = () => {
  return (
    <div className='bg-white w-full py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <Image className='w-[500px] mx-auto my-4' src={Laptop} alt='laptop' />
        <div className='flex flex-col justify-center max-md:items-center'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 mb-4'>
            Our Services & Products
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem quasi amet eligendi nisi, sunt debitis, odio id, ea
            similique iure numquam voluptates suscipit sed. Sint voluptas
            recusandae adipisci quo nihil?
          </p>
          <Link
            href={"/productsServices"}
            className='bg-[#0a1622] text-white w-[200px] text-center rounded-full font-medium my-6 mx-auto md:mx-0 py-3 px-3 transform hover:scale-110 transition ease-out duration-300 '>
            Explore More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductsServices