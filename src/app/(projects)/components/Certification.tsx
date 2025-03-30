"use client";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";
import React, { useEffect } from "react";

const Certification = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const content = [
    {
      title: "Artificial Intelligence Fundamentals",
      link: "https://olympus.mygreatlearning.com/courses/84191/certificate?pb_id=581",
      description:
        "Successfully completed a free online course from Great Learning Academy in May 2024. This certification validates foundational knowledge in AI concepts, including machine learning, neural networks, and AI applications.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src="/Images/c1.png"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Modern JavaScript",
      link: "https://www.coursera.org/account/accomplishments/verify/DZRXL4JB3CPZ",
      description:
        "Completed a project-based online course from Coursera Project Network on May 22, 2024. This certification highlights expertise in utilizing iterators and generators for efficient JavaScript programming.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src="/Images/c2.png"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Git and GitHub",
      link: "https://certifications.geekster.in/Mi-k7-JgBZOGP_CWpISwK-geekster.pdf",
      description:
        "Earned a Certificate of Completion from Geekster for the Complete Git and GitHub Course on May 19, 2024. This certification demonstrates proficiency in version control and repository management using Git and GitHub.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src="/Images/c3.png"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
  ];

  return (
    <div>
      <div className="sm:px-12 py-6">
        <StickyScroll content={content} />
      </div>
    </div>
  );
};

export default Certification;
