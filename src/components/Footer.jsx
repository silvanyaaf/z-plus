const footer = () => {
  return (
    <div className="footer bg-white shadow mt-20" id="social">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <p className="py-4">
          &copy; Copyright by <span className="font-bold">Z Plus Team</span>
        </p>
        <div className="social-footer flex items-center sm:gap-7 gap-2">
        <a href="https://www.instagram.com/zplusofficial_" target="_blank" rel="noopener noreferrer">
          <i className="ri-instagram-fill text-2xl"></i>
        </a>
        <a href="https://www.tiktok.com/@zplusofficial_?_t=ZS-8szX0wH0XPo&_r=1" target="_blank" rel="noopener noreferrer">
          <i className="ri-tiktok-fill text-2xl"></i>
        </a>
        <a href="https://twitter.com/username" target="_blank" rel="noopener noreferrer">
          <i className="ri-twitter-fill text-2xl"></i>
        </a>
        <a href="https://www.facebook.com/username" target="_blank" rel="noopener noreferrer">
          <i className="ri-facebook-circle-fill text-2xl"></i>
        </a>
        </div>
      </div>
    </div>
  )
}

export default footer