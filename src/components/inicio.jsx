import RestaurantIcon from '@mui/icons-material/Restaurant';

export default function Inicio(){
    return(
        
    <>  
        
        <div className=" w-full h-screen flex flex-col justify-center " id='home'>
            
           

            <div className='md:w-1/2 w-full flex flex-col items-center justify-center h-full gap-3'>
              <h1 className="text-white font-bold text-6xl lg:text-7xl fuente ">FastBurger</h1>
              <RestaurantIcon style={{color:"#aaa"}}></RestaurantIcon>
              <p className="text-zinc-300 text-lg">Fastfood from Argentina</p>
            </div>
          
        </div>
        </>
    )
}