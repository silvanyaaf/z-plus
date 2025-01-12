import HeroImage from "../assets/images/hero.png";
import AboutImage from "../assets/images/about.png";

import Proyek1 from "../assets/images/proyek-1.png";
import Proyek2 from "../assets/images/proyek-2.png";
import Proyek3 from "../assets/images/proyek-3.png";
import Proyek4 from "../assets/images/proyek-4.png";
import Proyek5 from "../assets/images/proyek-5.png";
import Proyek6 from "../assets/images/proyek-6.png";


const HomePage = () => {
  return <div className="homepage pb-10">
    <div className="container mx-auto px-4">
      <div className="hero grid md:grid-cols-2 grid-cols-1 items-center gap-20 pt-32">
        {/* "grid-cols-2" yang membuat className=box menjadi bersebelahan */}
        <div className="box">
          <h1 className="lg:text-5xl/tight text-3xl font-medium mb-7 text-green-900">
            {/* di atas "lg" tulisan akan 5xl dan di bawah "tight" akan menjadi 3xl */}
            Generasi <span className="font-bold text-red-700">Z Plus</span>
          </h1>
          <p className="text-base/8 mb-7">Komunitas anak muda visioner yang berkomitmen menciptakan perubahan positif untuk Indonesia.</p>
          <a href="#" className="bg-green-700 hover:bg-green-900 transition-all py-2 px-4 text-white shadow rounded-full">
            Tentang Kami <i className="ri-eye-line ms-1"></i>
          </a>
        </div>
        <div className="box">
          <img src={HeroImage} alt="Hero Image" className="md:w-full w-[400px] mx-auto md:m-0" />
        </div>
      </div>

      <div className="about grid md:grid-cols-2 grid-cols-1 items-center md:gap-20 gap-10 md:pt-20 pt-32" id="about">
        <div className="box md:order-1 order-2">
          {/* order untuk menukar posisi foto dan tulisan pda bagian tentang kami */}
          <img src={AboutImage} alt="About Image" className="lg:w-[500px] w-[400px] md:m-0 mx-auto" />
        </div>
        <div className="box md:order-2 order-1">
          <h1 className="lg:text-5xl/tight text-3xl font-medium mb-7 text-green-900">
            {/* di atas "lg" tulisan akan 5xl dan di bawah "tight" akan menjadi 3xl */}
            Kita <span className="font-bold text-red-700">Adalah</span>
          </h1>
          <p className="text-base/loose">Komunitas anak muda visioner yang berkomitmen menciptakan perubahan positif untuk Indonesia melalui berbagai kegiatan sosial, keagamaan, politik, dan kemasyarakatan. Dengan semangat kolaborasi dan kreativitas, Z Plus hadir sebagai wadah bagi generasi muda untuk berkontribusi membangun kesadaran akan isu-isu penting, serta menginspirasi transformasi yang berkelanjutan demi Indonesia yang lebih baik.</p>
          
        </div>
      </div>

      <div className="activities pt-32" id="activities">
        <h1 className="text-center lg:text-5xl/tight text-3xl font-medium mb-2 text-green-900">Kegiatan</h1>
        <p className="text-center">Kegiatan generasi muda untuk menciptakan perubahan positif melalui berbagai kegiatan inspiratif. Mulai dari aksi sosial, gerakan keagamaan inklusif, partisipasi politik berbasis ide segar, hingga penguatan komunitas kemasyarakatan yang kolaboratif. </p>
        <div className="activities-box pt-12 grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6">
          {/* grid untuk membuat box menjadi bersebelahan */}
          <div className="box bg-red-600 rounded-lg shadow p-4">
            <i className="ri-number-1 text-1xl text-white">
              <h3 className="text-xl font-bold mt-6 mb-2">Sosial</h3>
              <p className="text-white text-base/loose">Generasi muda bergerak menciptakan perubahan melalui aksi nyata, seperti kampanye lingkungan, bakti sosial, dan donasi digital. Kegiatan sosial menjadi langkah strategis untuk membangun empati dan mendorong keadilan sosial bagi semua.</p>
            </i>
          </div>
          <div className="box bg-red-600 rounded-lg shadow p-4">
            <i className="ri-number-2 text-1xl text-white">
              <h3 className="text-xl font-bold mt-6 mb-2">Keagamaan</h3>
              <p className="text-white text-base/loose" >Keagamaan bagi Gen Z Plus tidak hanya ritual, tapi juga gerakan inklusif untuk menyebarkan nilai-nilai kebaikan dan toleransi. Kegiatan seperti diskusi lintas agama, komunitas spiritual online, dan aksi solidaritas antarumat mencerminkan modernitas tanpa meninggalkan spiritualitas.</p>
            </i>
          </div>
          <div className="box bg-red-600 rounded-lg shadow p-4">
            <i className="ri-number-3 text-1xl text-white">
              <h3 className="text-xl font-bold mt-6 mb-2">Pendidikan Politik</h3>
              <p className="text-white text-base/loose" >Gen Z Plus membawa warna baru dalam politik dengan suara kritis dan ide-ide segar. Kegiatan seperti advokasi kebijakan, partisipasi pemilu, dan diskusi publik menjadi sarana untuk menciptakan pemerintahan yang transparan dan berpihak pada masa depan.</p>
            </i>
          </div>
          <div className="box bg-red-600 rounded-lg shadow p-4">
            <i className="ri-number-4 text-1xl text-white">
              <h3 className="text-xl font-bold mt-6 mb-2">Kemasyarakatan</h3>
              <p className="text-white text-base/loose">Kolaborasi adalah kunci bagi generasi perubahan. Dari gerakan komunitas berbasis teknologi hingga aksi solidaritas di lingkungan lokal, kegiatan kemasyarakatan oleh Gen Z Plus berfokus pada inovasi dan kerja sama untuk membangun masyarakat yang lebih baik.</p>
            </i>
          </div>
        </div>
      </div>


      <div className="proyek pt-32" id="proyek">
      <h1 className="text-center lg:text-5xl/tight text-3xl font-medium mb-2 text-green-900">Galeri</h1>
      <p className="text-center">Momen berharga dan inspiratif dari berbagai kegiatan komunitas Z Plus. Dari dokumentasi acara, kolaborasi, hingga karya kreatif anggota komunitas, semuanya diabadikan di sini untuk membangkitkan semangat kebersamaan dan inovasi </p>
      <div className="proyek-box pt-12 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        <div className="box px-2 bg-white shadow">
          <img src={Proyek1} alt="Proyek Image" className="w-full h-[220px]" />
          <h3 className="text-xl font-bold mt-6 mb-2" >Pembentukan Struktur Kepengurusan Dan AD/ART</h3>
          <p className="text-black text-base/loose" >Penguatan fondasi komunitas melalui pembentukan struktur kepengurusan yang solid dan penyusunan Anggaran Dasar dan Anggaran Rumah Tangga (AD/ART) untuk memastikan keberlanjutan visi dan misi Z Plus.</p>
        </div>
        <div className="box px-2 bg-white shadow">
          <img src={Proyek2} alt="Proyek Image" className="w-full h-[220px]" />
          <h3 className="text-xl font-bold mt-6 mb-2">Simposium Pra Kongres III Partai Nasdem - All Eyes On Palestine</h3>
          <p className="text-black text-base/loose">Acara diskusi mendalam yang mengangkat isu global Palestina, menyatukan perspektif untuk mendukung perjuangan kemanusiaan, dihadiri oleh pemikir, tokoh, dan anggota komunitas Z Plus.</p>
        </div>
        <div className="box px-2 bg-white shadow">
          <img src={Proyek3} alt="Proyek Image" className="w-full h-[220px]" />
          <h3 className="text-xl font-bold mt-6 mb-2">Peringatan Maulid Nabi 1446 H</h3>
          <p className="text-black text-base/loose">Perayaan penuh makna untuk memperingati kelahiran Nabi Muhammad SAW, mempererat ukhuwah Islamiyah dalam suasana spiritual bersama anggota komunitas Z Plus.</p>
        </div>
        <div className="box px-2 bg-white shadow">
          <img src={Proyek4} alt="Proyek Image" className="w-full h-[220px]"/>
          <h3 className="text-xl font-bold mt-6 mb-2">Diskusi Pilkada Bersama DPRD DKI Jakarta Fraksi Nasdem</h3>
          <p className="text-black text-base/loose">Forum dialog bersama DPRD DKI Jakarta Fraksi Nasdem yang membahas isu-isu strategis terkait Pilkada, memberikan wawasan dan aspirasi untuk kemajuan daerah.</p>
        </div>
        <div className="box px-2 bg-white shadow">
          <img src={Proyek5} alt="Proyek Image" className="w-full h-[220px]"/>
          <h3 className="text-xl font-bold mt-6 mb-2">Penyaluran Bantuan Korban Kebakaran</h3>
          <p className="text-black text-base/loose">Kegiatan kemanusiaan Z Plus untuk membantu korban kebakaran dengan menyalurkan bantuan yang mendukung pemulihan dan kesejahteraan masyarakat terdampak.</p>
        </div>
        <div className="box px-2 bg-white shadow">
          <img src={Proyek6} alt="Proyek Image" className="w-full h-[220px]"/>
          <h3 className="text-xl font-bold mt-6 mb-2">Penyerahan Petisi Tolak PPN 12%</h3>
          <p className="text-black text-base/loose">Langkah advokasi Z Plus melalui penyerahan petisi untuk menolak kebijakan PPN 12%, memperjuangkan kepentingan rakyat demi kebijakan yang lebih berkeadilan.</p>
        </div>
      </div>
      </div>
    </div>
  </div>

}

export default HomePage