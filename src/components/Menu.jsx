import {menu} from "../data/menu_info"

export default function Menu(){
    return(
        <>
        <h3 className="relative z-10 fuente text-5xl text-white w-full text-center bg-black py-10 box-shadow-w">Menu</h3>
        <section id="menu" className=" w-full h-max bg-black flex flex-row gap-5 p-10 py-10 ">
             {
                menu.map((m,i)=>{
                    return (
                        <div key={i} className="animacion1 flex flex-col gap-3 bg-zinc-900 w-1/3 h-max rounded-lg p-3 text-zinc-200">
                          <img src={`/Plantilla_Restaurante${m.img}`} alt="" className="w-full" />
                          <h5 className="text-xl font-bold fuente2">{m.name}</h5>

                          <p className="text-green-400 w-full text-end px-2">${m.precio}</p>
                        </div>
                    )
                })
             }
        </section>
        </>
    )
}