import { ReactNode } from 'react'
import "./Scaffold.css"

type Props = {
    children: ReactNode[] | ReactNode,
    shelf?: boolean,
    handleClick: () => void
}

function Scaffold({ children, shelf = false, handleClick }: Props) {
    return (
        <section
            onClick={handleClick}
            className={shelf ? "shelf scaffold" : "scaffold"}
        >
            <div className="inside">
                {children}
            </div>
        </section>
    )
}

export default Scaffold