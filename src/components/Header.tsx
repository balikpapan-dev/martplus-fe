import Image from 'next/image';

import logo from '@/assets/logo.jpg';

const Header = () => {
  return (
    <header className="fixed w-full bg-white p-3 z-10 shadow-md">
      <div className="flex justify-between items-center">
        <Image
          src={logo}
          alt="logo"
          width={40}
          height={50}
        />
        {/* Login Button */}
      </div>
    </header>
  )
}

export default Header