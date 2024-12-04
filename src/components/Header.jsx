function Header() {
    return (
        <>
            <header className="w-full p-6 pl-20 pr-20 flex justify-between">
                <div className="font-bold flex gap-1 text-4xl hover:cursor-pointer">
                    <span className="text-black">IMAJI</span>
                    <span className="text-amber-800">Coffee.</span>
                </div>
                <nav className="flex gap-2">
                    <button className="p-3 hover:bg-slate-100">Home</button>
                    <button className="p-3 hover:bg-slate-100">Story</button>
                    <button className="p-3 hover:bg-slate-100">Menu</button>
                    <button className="p-3 hover:bg-slate-100">Space</button>
                    <button className="p-3 hover:bg-slate-100">Community</button>
                    <button className="p-3 hover:bg-slate-100">News</button>
                    <button className="py-3 px-5 border font-bold border-amber-800 bg-amber-800 text-white hover:text-amber-800 hover:bg-white transition-colors">Order</button>
                    <button className="py-3 px-5 border font-bold border-amber-800 hover:bg-amber-800 text-amber-800 hover:text-white transition-colors">Sign In</button>
                </nav>
            </header>
        </>
    )
}

export default Header;