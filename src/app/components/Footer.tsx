import { InstagramIcon, FacebookIcon, TwitterIcon} from "@/app/components/IconsManager"


const Footer = () =>{
    return(
        <>
        <div className='custom-shadow font-inter text-white rounded-sm p-4 w-[95%] mb-4 flex justify-between place-self-center'>
            <span>Powered by Samo.</span>
        <div className='flex text-black justify-end'>
            <ul className='flex flex-row gap-6'>
                <li><a href='#'><InstagramIcon/></a></li>
                <li><a href='#'><FacebookIcon/></a></li>
                <li><a href='#'><TwitterIcon/></a></li>
            </ul>
        </div>
        </div>
        </>
    )
}

export default Footer;