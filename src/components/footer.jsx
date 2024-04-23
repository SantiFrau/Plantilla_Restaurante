import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function Footer(){

    return(
        <footer id='contact' className='w-full h-max bg-black flex flex-row items-center justify-between px-20 py-10' >
           <div>
           <h4 className='w-full text-center text-4xl fuente text-zinc-200'>FastBurger</h4>
            <p className='text-zinc-300'>Lorem ipsum dolor | sit amet</p>
           </div>
            
          <div>
            <h4 className='text-zinc-200 fuente2 text-xl pt-4 w-full text-center'>Contact</h4>
            <ul className='flex flex-row gap-3 items-cente justify-center'>
                <li>
                     <InstagramIcon className='text-zinc-400 cursor-pointer'></InstagramIcon>
                </li>
                <li>
                     <FacebookIcon className='text-zinc-400 cursor-pointer'></FacebookIcon>
                </li>
                <li>
                     <WhatsAppIcon className='text-zinc-400 cursor-pointer'></WhatsAppIcon>
                </li>
            </ul>
           
          </div>
            <div>
            <p className='text-zinc-500 pt-4'>Copyright © 2024 - FastBurger -</p>
            <p className='text-zinc-500'>Web desarrollada por Santiago Frau</p>
            </div>

         
            
        </footer>
    )
}