
import React from 'react';
import '../styles/footer.css';
function Footer() {
    return (
        <div>
            <footer>
                <div class="container">
                    <div class="row padding1">
                        <div>
                            <a href="index.html" class="navbar-brand"><i class="fa-solid fa-house fa-sm"></i></a>
                            © 2022 Constanza Morales
                        </div>
                        <div class="ml-auto text-aling">
                            <i class="fa-brands fa-facebook fa-lg"></i>
                            <i class="fa-brands fa-instagram fa-lg"></i>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;
