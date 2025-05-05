import { NavLink } from "react-router-dom"

export default function Header(){
    // Variables
    const Links = [
        {src:"details", title:"Course Details"},
        {src:"courses", title:"Courses"},
    ]

    return<section className="text-center w-ful text-whit py-3">
        <ul className="flex gap-5 justify-center">
            {Links.map((link)=><li key={link.src} className="font-medium hover:bg-gray-400 rounded-md transition-all hover:p-4 text-slate-950">
                <NavLink to={link.src}>{link.title}</NavLink>
            </li>)}
        </ul>
    </section>
}