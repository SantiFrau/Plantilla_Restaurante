import RestaurantIcon from '@mui/icons-material/Restaurant';

export default function Nav(){
    return (
        <nav className="fixed z-10 w-full h-max bg-black p-3 flex flex-row">
            <ul className="flex flex-row gap-10 justify-center items-center text-zinc-200 w-full fuente2">
                <li className="cursor-pointer hover:text-zinc-400"> <a href='#home'>Home</a></li>
                <li className="cursor-pointer hover:text-zinc-400"> <a href='#menu'>Menu</a></li>
                <li className="cursor-pointer hover:text-zinc-400"> <a href='#about'>About</a></li>
                <li className="cursor-pointer hover:text-zinc-400"> <a href='#contact'>Contact</a></li>
            </ul>
             <RestaurantIcon style={{color:"#aaa"}}></RestaurantIcon>
        </nav>
    )
}