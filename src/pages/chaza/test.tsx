import React from 'react';
// Importar el componente DashboardMain
import Ganancia from '../../components/Chaza/Dashboard/Ganancia';
const DashboardPage: React.FC = () => {
    return (
        <div>
            {/* Renderizar el componente DashboardMain */}
            <Ganancia />


        </div>
    );
}

// Con Next.js, el export default de una página en la carpeta /pages
// hará que esa página esté disponible como una ruta en tu aplicación.
export default DashboardPage;

