function Principal({ children }) {
    return (
        <> {/* <--- esta etiqueta se llama un fragmento  */}
            <sidenav>
                <a href="/lista">Lista</a>
                <a href="/crear">Crear</a>
            </sidenav>
            <main>
                {children}
            </main>
        </>
    );
}

export default Principal;