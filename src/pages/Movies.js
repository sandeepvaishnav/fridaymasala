import React from 'react';
import MovieCard from "../components/MovieCard";

const Movies = () => {
    return (
        <>
            <div className="hero-area pt-10 2xl:pt-20 pb-14 2xl:pb-24 relative">
                <div className="container mx-auto relative z-20">
                    <div className="section-title text-center">
                        <h1 className="leading-tight text-4xl lg:text-6xl font-bold mb-4">Movies Page</h1>
                    </div>
                </div>
            </div>
            
            <div className="product-area z-20 relative">
                <div className="container mx-auto">
                    <div className="product-infinite grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                        <MovieCard title="Pushpa: The Rise - Part 01" rating="11"  />
                        <MovieCard title="83" rating="8.1" />
                        <MovieCard title="Spider-Man: No Way Home" rating="8.1" />
                        <MovieCard title="sandeep 2" rating="5" />
                        <MovieCard title="sandeep 2" rating="6" />
                        <MovieCard title="sandeep 2" rating="4" />
                        <MovieCard title="sandeep 2" rating="8" />
                    </div>
                </div>
            </div>

        </>
    );
};

export default Movies;