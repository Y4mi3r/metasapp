function Principal({ children }) {
    return (
        <> {/* <--- esta etiqueta se llama fragmento  */}
            <div>
                <a href="/lista">Lista</a>
                <a href="/crear">Crear</a>
            </div>
            <div>
                {children}
            </div>
        </>
    );
}

export default Principal;