import Image from 'next/image';
import Link from 'next/link';

import logo from '@/assets/logo.jpg';
import { FaPlus } from 'react-icons/fa6';

const Header = () => {
  return (
    <header className="fixed w-full bg-white px-6 py-3 z-10 shadow-md">
      <div className="flex justify-between items-center">
        <Link href="/">
          <Image
            src={logo}
            alt="logo"
            width={40}
            height={50}
          />
        </Link>
        <Link
          href="/product/add"
          className="bg-green-600 p-2 text-white rounded-lg">
          <FaPlus />
        </Link>
      </div>
    </header>
  )
}

export default Header