import React from 'react';
// Importar el componente DashboardMain
import DashboardMain from '../../components/Chaza/Dashboard/DasboardMain';
const DashboardPage: React.FC = () => {
    return (
        <div>
            {/* Puedes añadir un header o algún otro componente si lo deseas */}
            <h1>Dashboard</h1>

            {/* Renderizar el componente DashboardMain */}
            <DashboardMain />

            {/* Aquí podrías añadir otros componentes o secciones si lo necesitas */}
        </div>
    );
}

// Con Next.js, el export default de una página en la carpeta /pages
// hará que esa página esté disponible como una ruta en tu aplicación.
export default DashboardPage;
