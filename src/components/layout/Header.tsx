import Image from 'next/image';
import Link from 'next/link';

import logo from '@/assets/logo.jpg';
import { FaPlus } from 'react-icons/fa6';

const Header = () => {
  return (
    <header className="fixed w-full bg-white px-6 py-3 z-10 shadow-md">
      <Link
        href="/"
        className="flex justify-between items-center"
      >
        <Image
          src={logo}
          alt="logo"
          width={40}
          height={50}
        />
        {/* Login Button */}
        <Link
          href="/product/add"
          className="bg-green-600 p-2 text-white rounded-lg">
          <FaPlus />
        </Link>
      </Link>
    </header>
  )
}

export default Header