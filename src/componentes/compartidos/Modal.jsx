function Modal({ children}) {
    
    return ( 
        <div className='flex items-center fixed inset-0 bg-opacity-75'>
            <div className='mx-auto'>
                { children}
            </div>
        </div>
     );
}

export default Modal;