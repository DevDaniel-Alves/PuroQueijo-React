import './criarprod.css'


function CriarProduto() {
    return (
        <>
            <section className="w-75 mx-auto mt-5 d-flex flex-column gap-3">
                <h1 className="text-center">Criar Novos Produtos</h1>
                <section className="mx-auto w-50">
                    <div className="input__dados mb-3">
                        <label for="Nome" className="form-label">Nome do Produto</label>
                        <input type="text" className="input_name form-control" id="Nome" placeholder="Nome do Produto"></input>
                    </div>
                    <div className="input__dados mb-3">
                        <label for="Usuario" className="form-label">Sobre</label>
                        <input type="email" className="input_name form-control" id="Usuario" placeholder="Sobre Produto"></input>
                    </div>
                    <div className="input__dados mb-3">
                        <label for="urlFoto" className="form-label">Url da Foto</label>
                        <input type="text" className="input_name form-control" id="urlFoto" placeholder="Url da Foto"></input>
                    </div>
                </section>
                <button className="btn btn_enviar w-25 mx-auto">Adicionar</button>
            </section>
        </>
    )

}

export default CriarProduto