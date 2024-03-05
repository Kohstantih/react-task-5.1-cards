import { CardProps } from "../types/CardProps";

export default function Card({ children, title, text }: CardProps): JSX.Element {
    return (
        <div className="card" style={{width: '18rem'}}>
            {children}
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{text}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}