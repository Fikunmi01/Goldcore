import { Card, CardHeader, CardTitle } from "../ui/card"
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "../ui/pagination"
import { useState, useEffect, useMemo } from "react"

// Define types for better TypeScript support
interface Job {
    id: string;
    title: string;
    location: string;
    category: string;
    locationKey: string; // For filtering
}

interface SearchCriteria {
    jobtitle: string;
    location: string | undefined;
    jobcategory: string | undefined;
}

interface JobSearchProps {
    searchCriteria: SearchCriteria | null;
}

// Static job data - moved outside component to prevent re-creation on every render
const jobs: Job[] = [
    {
        id: "12611811",
        title: "Adult Financial Emergency Assistant Specialist",
        location: "Clearwater, FL",
        category: "full-time",
        locationKey: "clearwater"
    },
    {
        id: "12611812",
        title: "Customer Service Representative",
        location: "Miami, FL",
        category: "full-time",
        locationKey: "miami"
    },
    {
        id: "12611813",
        title: "Call Center Agent",
        location: "Orlando, FL",
        category: "part-time",
        locationKey: "orlando"
    },
    {
        id: "12611814",
        title: "Technical Support Specialist",
        location: "Tampa, FL",
        category: "full-time",
        locationKey: "tampa"
    },
    {
        id: "12611815",
        title: "Sales Representative",
        location: "Jacksonville, FL",
        category: "full-time",
        locationKey: "jacksonville"
    },
    {
        id: "12611816",
        title: "Customer Success Manager",
        location: "Fort Lauderdale, FL",
        category: "full-time",
        locationKey: "fort-lauderdale"
    },
    {
        id: "12611817",
        title: "Help Desk Technician",
        location: "Tallahassee, FL",
        category: "contract",
        locationKey: "tallahassee"
    },
    {
        id: "12611818",
        title: "Account Manager",
        location: "Gainesville, FL",
        category: "full-time",
        locationKey: "gainesville"
    },
    {
        id: "12611819",
        title: "Inside Sales Associate",
        location: "Pensacola, FL",
        category: "part-time",
        locationKey: "pensacola"
    },
    {
        id: "12611820",
        title: "Data Entry Specialist",
        location: "Sarasota, FL",
        category: "temporary",
        locationKey: "sarasota"
    },
    {
        id: "12611821",
        title: "Virtual Assistant",
        location: "Naples, FL",
        category: "contract",
        locationKey: "naples"
    },
    {
        id: "12611822",
        title: "Chat Support Agent",
        location: "West Palm Beach, FL",
        category: "part-time",
        locationKey: "west-palm-beach"
    }
]

export const JobSearch = ({ searchCriteria }: JobSearchProps) => {

    const [currentPage, setCurrentPage] = useState<number>(1)
    const itemsPerPage = 6 // 2 rows × 3 columns

    // Filter jobs based on search criteria
    const filteredJobs = useMemo(() => {
        if (!searchCriteria) return jobs;

        return jobs.filter((job) => {
            const titleMatch = !searchCriteria.jobtitle || 
                job.title.toLowerCase().includes(searchCriteria.jobtitle.toLowerCase());
            
            const locationMatch = !searchCriteria.location || 
                job.locationKey === searchCriteria.location;
            
            const categoryMatch = !searchCriteria.jobcategory || 
                job.category === searchCriteria.jobcategory;

            return titleMatch && locationMatch && categoryMatch;
        });
    }, [searchCriteria]);

    const totalPages = Math.ceil(filteredJobs.length / itemsPerPage)

    // Reset to first page when search criteria changes
    useEffect(() => {
        setCurrentPage(1);
    }, [searchCriteria]);

    // Calculate the jobs to display for current page
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const currentJobs = filteredJobs.slice(startIndex, endIndex)

    const handlePageChange = (page: number) => {
        setCurrentPage(page)
    }

    // Handler for apply button
    const handleApply = (jobId: string) => {
        console.log(`Applying for job ${jobId}`)
        // Add your apply logic here
    }

    return (
        <div className="lg:p-20 p-4">
            {/* Search Results Header */}
            {searchCriteria && (
                <div className="mb-6">
                    <h3 className="text-xl font-semibold text-[#1E293B] mb-2">
                        Search Results ({filteredJobs.length} jobs found)
                    </h3>
                    <div className="flex flex-wrap gap-2 text-sm text-gray-600">
                        {searchCriteria.jobtitle && (
                            <span className="bg-gray-100 px-2 py-1 rounded">
                                Title: "{searchCriteria.jobtitle}"
                            </span>
                        )}
                        {searchCriteria.location && (
                            <span className="bg-gray-100 px-2 py-1 rounded">
                                Location: {searchCriteria.location.replace('-', ' ')}
                            </span>
                        )}
                        {searchCriteria.jobcategory && (
                            <span className="bg-gray-100 px-2 py-1 rounded">
                                Category: {searchCriteria.jobcategory.replace('-', ' ')}
                            </span>
                        )}
                    </div>
                </div>
            )}

            {/* No Results Message */}
            {searchCriteria && filteredJobs.length === 0 && (
                <div className="text-center py-12">
                    <h3 className="text-lg font-semibold text-gray-600 mb-2">No jobs found</h3>
                    <p className="text-gray-500">Try adjusting your search criteria to find more opportunities.</p>
                </div>
            )}

            {/* Job Cards Grid */}
            {currentJobs.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {currentJobs.map((job) => (
                        <Card key={job.id} className="w-full hover:shadow-lg transition-shadow">
                            <div className="px-6 pt-4 flex items-center gap-x-2 font-outfit text-sm">
                                <p>Job ID:</p>
                                <p>{job.id}</p>
                            </div>
                            <CardHeader>
                                <CardTitle className="font-outfit text-lg">
                                    {job.title}
                                </CardTitle>
                            </CardHeader>
                            <div className="px-6 pb-4 justify-between flex items-center font-outfit text-sm">
                                <div className="flex flex-col gap-y-1">
                                    <span className="flex items-center gap-x-1">
                                        <p>Location:</p>
                                        <p>{job.location}</p>
                                    </span>
                                    <span className="flex items-center gap-x-1">
                                        <p>Type:</p>
                                        <p className="capitalize">{job.category.replace('-', ' ')}</p>
                                    </span>
                                </div>
                                <button 
                                    className="bg-[#059669] hover:bg-[#059669]/80 text-white px-3 py-1 rounded-full cursor-pointer transition-colors"
                                    onClick={() => handleApply(job.id)}
                                >
                                    Apply Now
                                </button>
                            </div>
                        </Card>
                    ))}
                </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
                <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious 
                                href="#" 
                                onClick={(e) => {
                                    e.preventDefault()
                                    if (currentPage > 1) handlePageChange(currentPage - 1)
                                }}
                                className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                            />
                        </PaginationItem>
                        
                        {[...Array(totalPages)].map((_, index) => {
                            const page = index + 1
                            return (
                                <PaginationItem key={page}>
                                    <PaginationLink
                                        href="#"
                                        onClick={(e) => {
                                            e.preventDefault()
                                            handlePageChange(page)
                                        }}
                                        isActive={currentPage === page}
                                    >
                                        {page}
                                    </PaginationLink>
                                </PaginationItem>
                            )
                        })}

                        <PaginationItem>
                            <PaginationNext 
                                href="#" 
                                onClick={(e) => {
                                    e.preventDefault()
                                    if (currentPage < totalPages) handlePageChange(currentPage + 1)
                                }}
                                className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                            />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            )}
        </div>
    )
}