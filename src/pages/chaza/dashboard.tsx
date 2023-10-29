import React from 'react';
// Importar el componente DashboardMain
import DashboardMain from '../../components/Chaza/Dashboard/DasboardMain';
const DashboardPage: React.FC = () => {
    return (
        <div>

            

            {/* Renderizar el componente DashboardMain */}
            <DashboardMain />


        </div>
    );
}

// Con Next.js, el export default de una página en la carpeta /pages
// hará que esa página esté disponible como una ruta en tu aplicación.
export default DashboardPage;
