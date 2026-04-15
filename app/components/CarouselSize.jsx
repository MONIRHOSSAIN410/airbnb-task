import * as React from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import albums from "../../public/Image"

function CarouselSize() {
  return (
    // Changed px-10 to px-14 to give space for the arrows on small screens
    <div className="w-full  flex justify-center py-6 px-14">
      <Carousel
        opts={{
          align: "start",
          loop: true
        }}
        // REMOVED: max-w-48 (which is only 12rem/192px wide)
        // ADDED: md:max-w-4xl or similar to allow the carousel to actually expand
        className="w-full max-w-sm sm:max-w-xl md:max-w-3xl lg:max-w-5xl"
      >
        <CarouselContent>
          {albums.map((item, index) => (
            // The basis-full/half/third logic is already good here!
            <CarouselItem key={index} className="basis-full sm:basis-1/2 md:basis-1/3">
              <div className="p-2 h-full">
                <Card className="border-none shadow-lg h-full">
                  <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                    {/* FIXED: Removed fixed width w-125 which was breaking mobile */}
                    <div className="flex flex-col items-center gap-4">
                      <div className="relative w-20 h-20">
                         <Image 
                            src={item.img} 
                            alt={item.id} 
                            fill // Uses fill for better responsiveness inside the parent div
                            className="rounded-full object-cover" 
                          />
                      </div>
                      <span className="text-sm md:text-base font-medium">
                        {item.Description}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* Adjusted buttons for better visibility */}
        <CarouselPrevious className="bg-gray-400 p-3.5 text-white hover:bg-gray-300" />
        <CarouselNext className="bg-gray-400 p-3.5 text-white hover:bg-gray-300" />
      </Carousel>
    </div>
  )
}

export default CarouselSize;