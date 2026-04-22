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
    <div className="w-full  flex justify-center py-20 px-14 ">
      <Carousel
        opts={{
          align: "start",
          loop: true
        }}
        
       
        className="w-full max-w-sm sm:max-w-xl md:max-w-3xl lg:max-w-5xl"
      >
        <CarouselContent>
          {albums.map((item, index) => (

            <CarouselItem key={index} className="basis-full sm:basis-1/2 md:basis-1/3">
              <div className="p-2 h-full">
                <Card className="border-none shadow-lg h-full ">
                  <CardContent className=" ">
                    
                    <div className="flex flex-row gap-2.5 justify-center items-center ">
                      <div className="relative p-0.5 w-40 h-12">
                        <Image
                          src={item.img}
                          alt={item.id}
                          fill 
                          className="rounded-full object-cover "
                        />
                      </div>
                      <p className="text-sm md:text-base font-medium ">
                        {item.Description}
                        <div className="pt-1">
                          <ul className="flex text-yellow-500">
                            <li>{item.icons}</li>
                            <li>{item.icons}</li>
                            <li>{item.icons}</li>
                            <li>{item.icons}</li>
                            <li>{item.icons}</li>
                          </ul>
                        </div>
                      </p>



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