import React from "react";
import { AnimatedTooltip } from "@/components/ui/team";

export function Services() {
    const people = [
        {
          id: 1,
          name: "Rayaan",
          designation: "Software Engineer",
          image:
            "/pfp.jpg",
        },
        {
          id: 2,
          name: "sai karthik",
          designation: "Product Manager",
          image:
            "/pfp.jpg",
        },
        {
          id: 3,
          name: "harsha",
          designation: "Data Scientist",
          image:
            "/pfp.jpg",
        },
      ];
       
    return (
        <div className="text-align-left text-center mx-14 mt-10">
            <div className="bg-gradient-to-br text-align-left from-slate-600 to-black  bg-clip-text text-left text-6xl font-medium tracking-tight text-transparent">
            Team
            <div className="flex flex-row items-center justify-center mb-10 w-full scale-125 md:scale-150">
  <AnimatedTooltip items={people} />
</div>

            </div>
        </div>
    );
};
