import { ReactNode } from 'react'
import "./Scaffold.css"

type Props = {
    children: ReactNode[] | ReactNode,
    shelf?: boolean
}

function Scaffold({ children, shelf = false }: Props) {
    return (
        <section
            className={shelf ? "shelf scaffold" : "scaffold"}
        >
            <div className="inside">
                {children}
            </div>
        </section>
    )
}

export default Scaffold