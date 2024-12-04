function Footer() {
  return (
    <>
      <footer className="bg-amber-950 flex justify-center">
        <div className="border-b-2 border-white w-2/3">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold text-white">Our location</h1>
            <p className="text-white">
              JI. Bangkringan No 19, RT.11/RW.2, Kota Surabaya, 60124
            </p>
            <p className="text-white">
              <span className="font-bold">Customer Service</span>{" "}
              +6282-2876-6862
            </p>
            <p className="text-white">
              <span className="font-bold">We Are Open from</span> Sun - Mon 10
              AM - 22 PM
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
