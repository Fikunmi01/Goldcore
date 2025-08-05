import { Card, CardHeader, CardTitle } from "../ui/card"
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "../ui/pagination"
import { useState } from "react"

// Define types for better TypeScript support
interface Job {
    id: string;
    title: string;
    location: string;
}

export const JobSearch = () => {
    const jobs: Job[] = [
        {
            id: "12611811",
            title: "Adult Financial Emergency Assistant Specialist",
            location: "Clearwater, FL"
        },
        {
            id: "12611812",
            title: "Customer Service Representative",
            location: "Miami, FL"
        },
        {
            id: "12611813",
            title: "Call Center Agent",
            location: "Orlando, FL"
        },
        {
            id: "12611814",
            title: "Technical Support Specialist",
            location: "Tampa, FL"
        },
        {
            id: "12611815",
            title: "Sales Representative",
            location: "Jacksonville, FL"
        },
        {
            id: "12611816",
            title: "Customer Success Manager",
            location: "Fort Lauderdale, FL"
        },
        {
            id: "12611817",
            title: "Help Desk Technician",
            location: "Tallahassee, FL"
        },
        {
            id: "12611818",
            title: "Account Manager",
            location: "Gainesville, FL"
        },
        {
            id: "12611819",
            title: "Inside Sales Associate",
            location: "Pensacola, FL"
        },
        {
            id: "12611820",
            title: "Data Entry Specialist",
            location: "Sarasota, FL"
        },
        {
            id: "12611821",
            title: "Virtual Assistant",
            location: "Naples, FL"
        },
        {
            id: "12611822",
            title: "Chat Support Agent",
            location: "West Palm Beach, FL"
        }
    ]

    const [currentPage, setCurrentPage] = useState<number>(1)
    const itemsPerPage = 6 // 2 rows × 3 columns
    const totalPages = Math.ceil(jobs.length / itemsPerPage)

    // Calculate the jobs to display for current page
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const currentJobs = jobs.slice(startIndex, endIndex)

    // Fixed: Added type annotation for the page parameter
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {currentJobs.map((job) => (
                    <Card key={job.id} className="w-full">
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
                            <span className="flex items-center gap-x-1">
                                <p>Location:</p>
                                <p>{job.location}</p>
                            </span>
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