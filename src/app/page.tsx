import Image from "next/image";
import Logo from '@/app/assets/foodGuide_logo.png'
export default function login() {
  return (
    <div className="container mx-auto flex justify-center min-h-screen items-center">
      <div className="login-box shadow-lg">
        <div className="header flex justify-center">
          <Image
            src={Logo}
            alt="Picture of the author"
            className="logo"
          />
        </div>
      </div>
    </div>
  );
}
