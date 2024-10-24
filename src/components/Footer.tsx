import { InstagramIcon, FacebookIcon, TwitterIcon} from './IconsManager'
const Footer = () => {
    return(
        <>
            <div className='bg-[#0A0A0A]/30 shadow-md p-4 mt-10 backdrop-blur-sm flex justify-between'>
                <span className='font-bold'>Powered By Samo D</span>
            <div className='flex text-black justify-end'>
                <ul className='flex flex-row gap-6'>
                    <li><a href="/"><InstagramIcon/></a></li>
                    <li><a href="/"><FacebookIcon/></a></li>
                    <li><a href="/"><TwitterIcon/></a></li>
                </ul>
            </div>
            </div>
        
        </>
    )
}
export default Footer;