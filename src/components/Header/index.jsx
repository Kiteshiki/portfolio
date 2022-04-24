import logo from '@/assets/logo.svg'
import { Button } from '@/components'

const Header = () => {
    return (
        <header className="h-16 container px-4 mx-auto flex items-center">
            <img src={logo} className="h-8" />

            <nav className="ml-auto">
                <ul className="flex items-center gap-4">
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Portfolio</a>
                    </li>
                    <li>
                        <a href="#">Contacts</a>
                    </li>
                    <li>
                        <a href="/src/assets/CV_Idris_Salavatov.pdf" download>
                            <Button>Download CV</Button>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export { Header }
