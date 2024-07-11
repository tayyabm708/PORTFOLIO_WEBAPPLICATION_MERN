import React from "react";

function Sider() {
  return (
    <div className="fixed left-0 bottom-0 px-10 sm:static">
      <div className="flex flex-col items-center">
        <div className="flex flex-col text-gray-400 text-xl  gap-3 sm:flex-row">
          <a href="">
            <i class="ri-facebook-circle-line"></i>
          </a>
          <a href="">
          <i class="ri-mail-line"></i>
          </a>
          <a href="https://www.instagram.com/tayyabm708?igsh=MTB3dDBhZzJ6dHN2Zg%3D%3D&utm_source=qr">
          <i class="ri-instagram-line"></i>
          </a>
          <a href="https://www.linkedin.com/in/muhammad-tayyab-7614b9249?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
          <i class="ri-linkedin-box-fill"></i>
          </a>
          <a href="https://github.com/tayyabm708">
          <i class="ri-github-fill"></i>
          </a>

        </div>
        <div className="w-[1px] h-32 bg-[#11c8bca2] sm:hidden "></div>
      </div>
    </div>
  );
}

export default Sider;
