


export default function About(){

    return(
        <div className="w-full h-max" id="about">

            <div className="w-full h-max flex flex-col items-end">
             <div className="w-1/2 h-max bg-black text-white py-10">
               <h3 className="w-full text-center p-5 fuente text-5xl ">About</h3>
               <p className="py-5 px-12 text-zinc-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio suscipit atque magni alias. Aliquid dolorum enim suscipit libero deleniti laborum provident quibusdam voluptatem accusamus? Quaerat totam repellendus impedit tempore ipsam!</p>
               <ul className="w-full px-12 text-amber-300 fuente2 flex flex-col gap-3">
                <li ><p className="punto">10 años de antiguedad</p></li>
                <li ><p className="punto">From argentina</p></li>
               </ul>
               <p className="text-zinc-300 w-full text-center fuente2 p-8">Direccion : Lorem ipsum dolor sit amet</p>
               
             </div>
            </div>

            
 
            <div className="w-1/2 h-max bg-black text-white py-10">

                <h3 className="w-full text-center p-5 fuente text-5xl">Horarios</h3>
                <ul className="flex flex-col gap-2 fuente2 w-full items-center justify-center">
                    <li>Lunes - <span className="text-amber-300">11:00 / 15:00 - 20:30/23:30</span></li>
                    <li>Martes -  <span className="text-amber-300">11:00 / 15:00 - 20:30/23:30</span></li>
                    <li>Miercoles - <span className="text-amber-300">11:00 / 15:00 - 20:30/23:30</span></li>
                    <li>Jueves - <span className="text-amber-300">11:00 / 15:00 - 20:30/23:30</span></li>
                    <li>Viernes - <span className="text-amber-300">11:00 / 15:00 - 20:30/00:30</span></li>
                    <li>Sabado - <span className="text-amber-300">11:00 / 00:30</span></li>
                    <li>Domingo - <span className="text-amber-300">11:00 / 00:30</span></li>
                </ul>

            </div>

        </div>
    )
}