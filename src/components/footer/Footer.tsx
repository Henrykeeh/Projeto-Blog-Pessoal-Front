import { GithubLogoIcon, InstagramLogoIcon, LinkedinLogoIcon } from '@phosphor-icons/react'
import { type ReactNode, useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'

function Footer() {

    let data = new Date().getFullYear()

    const { usuario } = useContext(AuthContext)

    let component: ReactNode

    if (usuario.token !== "") {

        component = (

            <div className="flex justify-center bg-indigo-900 text-white">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>
                        Blog Pessoal - Carlos Henrique | Copyright: {data}
                    </p>
                    <p className='text-lg'>Acesse minhas redes sociais</p>
                    <div className='flex gap-2'>
                        <a href="https://www.linkedin.com/in/carlos-henrique-da-silva-barbosa-no-linked-in/" target="_blank">
                            <LinkedinLogoIcon size={48} weight='light' />
                        </a>
                        <a href="https://www.instagram.com/c.henrykeh/" target="_blank">
                            <InstagramLogoIcon size={48} weight='light' />
                        </a>
                        <a href="https://github.com/Henrykeeh" target="_blank">
                            <GithubLogoIcon size={48} weight='light' />
                        </a>
                    </div>
                </div>
            </div>

        )
    }
    return (
        <>
            {component}
        </>
    )
}

export default Footer