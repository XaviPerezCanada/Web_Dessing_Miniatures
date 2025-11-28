// Función para cargar el header común en todas las páginas
function loadHeader() {
    // Verificar si el header ya existe para evitar duplicados
    if (document.querySelector('header')) {
        return;
    }
    
    const headerHTML = `
    <header class="bg-white shadow-md border-b border-gray-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center py-4">
                <div class="text-lg font-bold text-gray-800">Jogo-Landia</div>
                
                <!-- Menú normal para pantallas md y superiores -->
                <nav class="hidden md:flex space-x-4 items-center">
                    <a href="Landing.html" class="text-sm hover:text-indigo-600">Inicio</a>
                    <a href="About.html" class="text-sm hover:text-indigo-600">About</a>
                    <a href="Shop.html" class="text-sm hover:text-indigo-600">Tienda</a>
                    <a href="Login.html" class="bg-black text-white px-4 py-2 rounded-full font-semibold text-xs ml-4 hover:bg-gray-700 transition">Login</a>
                </nav>
                
                <!-- Botón hamburguesa para pantallas menores a md -->
                <button id="menu-toggle" class="md:hidden flex flex-col space-y-1.5 p-2 focus:outline-none focus:ring-2 focus:ring-black rounded">
                    <span class="block w-6 h-0.5 bg-gray-800 transition-all duration-300" id="line1"></span>
                    <span class="block w-6 h-0.5 bg-gray-800 transition-all duration-300" id="line2"></span>
                    <span class="block w-6 h-0.5 bg-gray-800 transition-all duration-300" id="line3"></span>
                </button>
            </div>
            
            <!-- Menú móvil (oculto por defecto) -->
            <nav id="mobile-menu" class="hidden md:hidden pb-4">
                <div class="flex flex-col space-y-3">
                    <a href="Landing.html" class="text-sm hover:text-indigo-600 py-2 border-b border-gray-200">Inicio</a>
                    <a href="About.html" class="text-sm hover:text-indigo-600 py-2 border-b border-gray-200">About</a>
                    <a href="Shop.html" class="text-sm hover:text-indigo-600 py-2 border-b border-gray-200">Tienda</a>
                    <a href="Login.html" class="bg-black text-white px-4 py-2 rounded-sm font-semibold text-xs hover:bg-gray-700 transition text-center mt-2">Login</a>
                </div>
            </nav>
        </div>
    </header>
    `;
    
    // Insertar el header al inicio del body
    const body = document.body;
    const firstChild = body.firstElementChild;
    
    if (firstChild) {
        firstChild.insertAdjacentHTML('beforebegin', headerHTML);
    } else {
        body.insertAdjacentHTML('afterbegin', headerHTML);
    }
    
    // Configurar el toggle del menú hamburguesa
    setupMobileMenu();
}

// Función para configurar el menú móvil
function setupMobileMenu() {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const line1 = document.getElementById('line1');
    const line2 = document.getElementById('line2');
    const line3 = document.getElementById('line3');
    
    if (!menuToggle || !mobileMenu) return;
    
    menuToggle.addEventListener('click', function() {
        const isOpen = !mobileMenu.classList.contains('hidden');
        
        if (isOpen) {
            // Cerrar menú
            mobileMenu.classList.add('hidden');
            line1.style.transform = 'rotate(0) translateY(0)';
            line2.style.opacity = '1';
            line3.style.transform = 'rotate(0) translateY(0)';
        } else {
            // Abrir menú
            mobileMenu.classList.remove('hidden');
            line1.style.transform = 'rotate(45deg) translateY(8px)';
            line2.style.opacity = '0';
            line3.style.transform = 'rotate(-45deg) translateY(-8px)';
        }
    });
    
    // Cerrar menú al hacer clic en un enlace (opcional, para mejor UX)
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.add('hidden');
            line1.style.transform = 'rotate(0) translateY(0)';
            line2.style.opacity = '1';
            line3.style.transform = 'rotate(0) translateY(0)';
        });
    });
    
    // Cerrar menú al redimensionar la ventana si pasa a md o superior
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 768) { // md breakpoint
            mobileMenu.classList.add('hidden');
            line1.style.transform = 'rotate(0) translateY(0)';
            line2.style.opacity = '1';
            line3.style.transform = 'rotate(0) translateY(0)';
        }
    });
}

// Cargar el header cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadHeader);
} else {
    loadHeader();
}

