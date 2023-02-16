
import React from 'react';
import '../styles/footer.css';
function Footer() {
    return (
        <div>
            <footer>
                <div className="container">
                    <div className="row padding1">
                        <div>
                            <a href="index.html" className="navbar-brand"><i className="fa-solid fa-house fa-sm"></i></a>
                            © 2022 Constanza Morales
                        </div>
                        <div className="ml-auto text-aling">
                            <i className="fa-brands fa-facebook fa-lg"></i>
                            <i className="fa-brands fa-instagram fa-lg"></i>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;
