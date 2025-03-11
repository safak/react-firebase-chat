import Chats from "./Chats"
import Contacts from "./Contacts"

const Fondo = () => {
    return (
        <>
            <div className=" flex border-2 border-gray-300 
                h-[1000px] w-[1500px] rounded-2xl text-center">
                    <Contacts/>
                    <Chats/>
            </div>
        </>
    )
}
export default Fondo