function Footer() {
  return (
    <>
      <footer className="bg-amber-950 flex flex-col items-center">
        <div className="border-b-2 w-2/3 border-white flex justify-center my-3 py-3">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-bold text-white">Our location</h1>
            <p className="text-white">
              JI. Bangkringan No 19, RT.11/RW.2, Kota Surabaya, 60124
            </p>
            <p className="text-white">
              <span className="font-bold">Customer Service </span>
              +6282-2876-6862
            </p>
            <p className="text-white">
              <span className="font-bold">We Are Open from</span> Sun - Mon 10
              AM - 22 PM
            </p>
          </div>
        </div>

        <div className="flex flex-row justify-around">
          <div>
            <span className="material-icons text-white my-3 text-3xl">
              mail delete cancel logout home
            </span>
          </div>
        </div>

        <div className="flex justify-around text-orange-200 w-screen my-3">
          <span className="">©2024 IMAJI COFFEE, All rights reserved </span>
          <span className="">
            <a href="http://"> Terms and Conditions</a> |
            <a href="http://"> Privacy Policy</a>
          </span>
        </div>
      </footer>
    </>
  );
}

export default Footer;
