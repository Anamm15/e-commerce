import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import DashboardStore from "../features/dashboard/dashboard-store";


const DashboardPage = () => {
    const [dataStore, setDataStore] = useState([]);

    useEffect(() => {
        const fetchDataStore = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/stores');
                const data = await response.json();
                setDataStore(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchDataStore();
    }, []);

    return (
        <>
            <Navbar />
            <div className="mt-40">

                <DashboardStore />
            </div>

        </>
    )
}

export default DashboardPage;