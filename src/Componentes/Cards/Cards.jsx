import saitama from "../../assets/saitama.png";
import "./Cards.css"

function CardProdutos() {
    return (
        <>
            <div className="card_completo ">
                <div className="card">
                    <img src={saitama} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card Title</h5>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <div className="d-flex gap-2">
                            <p className="card_tamanhos">400G</p>
                            <p className="card_tamanhos">400G</p>
                            <p className="card_tamanhos">400G</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default CardProdutos