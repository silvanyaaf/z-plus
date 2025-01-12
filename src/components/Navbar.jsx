import { useEffect, useState } from "react";

// ini untuk buat togle 
const Navbar = () => {
    const [show, setShow] = useState(false);
    const [scroll, setScroll] = useState(false);
    // atas show FALSE trs pencet setShow jadi TRUE ditulis "!show"

    const handleClick = () => {
    setShow(!show);
    console.log(show);
    };
    // pengkondisian pakai let//
    let menuActive = show ? "left-0" : "-left-full";
    // klo TRUE akan tampil "left-0". kalo FALSE akan tampil "-left-full" (hilang)

    useEffect (() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 5) {
                console.log("testing");
            }
        })
    })

  return (
    <div className="navbar fixed w-full transition-all py-4">
        <div className="container mx-auto px-4">
            <div className="navbar-box flex items-center justify-between">
                <div className="logo">
                    <h1 className="sm:text-2xl text-xl font-bold" >Z Plus</h1>
                </div>
                <ul className= {`flex lg:gap-12 md:static md:flex-row md:shadow-none md:bg-transparent md:w-auto md:h-full md:translate-y-0 md:text-black md:p-0 md:m-0 md:transition-none gap-8 fixed ${menuActive} top-1/2 -translate-y-1/2 flex-col px-8 py-6 rounded shadow-lg shadow-slate-300 bg-sky-400 font-bold text-white transition-all`}>
                    <li className="flex item-center gap-3">
                        <i className="ri-home-2-line text-3xl md:hidden block"></i>
                        {/* md:hidden maksud ny kalo di atas md dihilangkan ikon ny. "block" kalo di bawah md di tampilkan ikon ny */}
                        <a href="#home" className="font-medium opacity-75">
                        Beranda
                        </a>
                    </li>
                    <li className="flex item-center gap-3">
                        <i className="ri-user-heart-line text-3xl md:hidden block"></i>
                        <a href="#about" className="font-medium opacity-75">
                        Tentang Kami
                        </a>
                    </li>
                    <li className="flex item-center gap-3">
                        <i className="ri-briefcase-2-fill text-3xl md:hidden block"></i>
                        <a href="#activities" className="font-medium opacity-75">
                        Kegiatan
                        </a>
                    </li>
                    <li className="flex item-center gap-3">
                        <i className="ri-multi-image-line text-3xl md:hidden block"></i>
                        <a href="#proyek" className="font-medium opacity-75">
                        Galeri
                        </a>
                    </li>
                </ul>
                

                
                <div className="social flex items-center gap-2">
                    <a href="https://www.instagram.com/zplusofficial_/" className="bg-green-700 px-5 py-2 rounded-full text-white font-bold hover:bg-green-900 transition-all">
                        Media Sosial
                    </a>
                    <i className="ri-menu-3-line text-3xl md:hidden block" onClick={handleClick} ></i>
                    {/* gmbar garis 3 */}
                </div>                
            </div>
        </div>
    </div>
  )
}

export default Navbar