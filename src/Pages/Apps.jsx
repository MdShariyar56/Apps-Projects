import React, { useState, useEffect } from "react";
import { useLoaderData, Link } from "react-router-dom";
import { Star } from "lucide-react";
import AppsNotFound from "./AppsNotFound";
import LoadingSpinner from "../Component/LoadingSpinner";

const Apps = () => {
    const Appss = useLoaderData();
    const appsArray = Array.isArray(Appss) ? Appss : Appss ? [Appss] : [];

    const [search, setSearch] = useState("");
    const [installedApps, setInstalledApps] = useState([]);

    useEffect(() => {
        const installed = JSON.parse(localStorage.getItem("installedApps")) || [];
        setInstalledApps(installed.map(a => a.id));
    }, []);

    const term = search.trim().toLowerCase();
    const searchApp = term
        ? appsArray.filter(app => app.title.toLowerCase().includes(term))
        : appsArray;

    if (!appsArray.length) return <LoadingSpinner />;
    if (!searchApp.length) return <AppsNotFound />;

    return (
        <div className="bg-gray-100 mb-10">
            <div className="text-center py-5">
                <h1 className="text-4xl font-bold py-5">Our All Applications</h1>
                <p className="text-gray-600">
                    Explore All Apps on the Market developed by us. We code for Millions
                </p>
            </div>

            <div className="flex justify-between items-center container mx-auto px-5 lg:px-0">
                <div>
                    <p>({searchApp.length}) Apps Found</p>
                </div>
                <div>
                    <input
                        type="search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search Apps"
                        className="input input-bordered"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4 container mx-auto mt-5 p-5 lg:p-0">
                {searchApp.map((app, index) => {
                    const installed = installedApps.includes(app.id);
                    return (
                        <Link to={`/apps/${app.id}`} key={app.id ?? index} className="block">
                            <div className="card bg-base-300 border shadow-sm hover:scale-105 transition ease-in-out p-4">
                                <figure className="h-48 overflow-hidden">
                                    <img className="w-full object-cover" src={app.image} alt={app.title} />
                                </figure>
                                <div className="py-4">
                                    <h2 className="card-title">{app.title}</h2>
                                    <div className="flex justify-between items-center pt-5">
                                        <button className="btn rounded text-xl bg-[#F1F5E8] text-[#00D390]">
                                            {app.downloads}
                                        </button>
                                        <button className={`btn rounded text-xl bg-[#f6e1cd] text-[#FF8811] flex items-center gap-1 ${installed ? "opacity-50 cursor-not-allowed" : ""}`}>
                                            <Star size={18} /> {app.ratingAvg}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default Apps;
