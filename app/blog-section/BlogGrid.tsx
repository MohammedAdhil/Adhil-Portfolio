// import BlogCard from "./BlogCard";
// import { certificationDetails } from "./blogDetails";
// import AnimatedWords2 from "../animations/AnimatedWords2";
// import { monaSans } from "../fonts/monaSans";
// import AnimatedBody from "../animations/AnimatedBody";

// const Blog = () => {
//   return (
//     <section className="z-10 flex w-full flex-col items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-20 md:pb-16 lg:pb-32">
//       <div
//         className={`relative mb-16 flex w-full flex-col items-center justify-center gap-10  text-[#e4ded7] sm:items-center lg:max-w-[1440px]`}
//       >
//         {" "}
//         <AnimatedWords2
//           title={"Blog"}
//           style={`flex max-w-[500px] flex-col items-start text-left text-[126px] ${monaSans.className} font-extrabold uppercase leading-[0.9em] text-[#e4ded7] sm:max-w-full sm:flex-row sm:items-center sm:justify-center sm:text-center sm:text-[160px] md:text-[190px] lg:text-center lg:text-[215.04px]`}
//         />
//         <AnimatedBody
//           text="I write articles to reinforce my knowledge and help out others who might be building something similar."
//           className="w-[90%] text-center text-[14px] font-semibold uppercase sm:w-[500px] md:w-[550px] md:text-[16px]"
//         />
//       </div>
//       <div className="lg:w- [850px] grid w-[90%] max-w-[1200px] grid-cols-1 grid-rows-3 place-content-center place-items-center gap-x-6 gap-y-6 md:grid-cols-3 md:grid-rows-1">
//         {certificationDetails.map((certification, index) => {
//           return (
//             <BlogCard
//               key={index}
//               title={certification.title}
//               image={certification.image}
//               url={certification.url}
//               date={certification.date}
//               available={certification.available}
//             />
//           );
//         })}
//       </div>
//     </section>
//   );
// };

// export default Blog;
import { useState } from 'react';
import BlogCard from "./BlogCard";
import { certificationDetails } from "./blogDetails";
import AnimatedWords2 from "../animations/AnimatedWords2";
import { monaSans } from "../fonts/monaSans";
import AnimatedBody from "../animations/AnimatedBody";

const Blog = () => {
  const [showAll, setShowAll] = useState(false);

  const handleShowMore = () => {
    setShowAll(true);
  };

  const handleShowLess = () => {
    setShowAll(false);
  };

  return (
    <section className="z-10 flex w-full flex-col items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-20 md:pb-16 lg:pb-32" id='certification'>
      <div
        className={`relative mb-16 flex w-full flex-col items-center justify-center gap-10  text-[#e4ded7] sm:items-center lg:max-w-[1440px]`}
      >
        <AnimatedWords2
          title={"Certifications"}
          style={`certifications-title flex max-w-[500px] flex-col items-start text-left text-[106px] ${monaSans.className} font-extrabold uppercase leading-[0.9em] text-[#e4ded7] sm:max-w-full sm:flex-row sm:items-center sm:justify-center sm:text-center sm:text-[40px] !important md:text-[80px] lg:text-center lg:text-[120px]`}
        />
       

        <AnimatedBody
          text="Certifications validate my expertise and commitment to continuous learning in the field of software development."
          className="w-[90%] text-center text-[14px] font-semibold uppercase sm:w-[500px] md:w-[550px] md:text-[16px]"
        />
      </div>
      <div className="lg:w- [850px] grid w-[90%] max-w-[1200px] grid-cols-1 grid-rows-3 place-content-center place-items-center gap-x-6 gap-y-6 md:grid-cols-3 md:grid-rows-1">
        {certificationDetails.slice(0, showAll ? certificationDetails.length : 3).map((certification, index) => {
          return (
            <BlogCard
              key={index}
              title={certification.title}
              image={certification.image}
              url={certification.url}
              date={certification.date}
              available={certification.available}
            />
          );
        })}
      </div>
      <div className="mt-8">
        {!showAll && certificationDetails.length > 3 && (
          <button
            onClick={handleShowMore}
            className="px-4 py-2 font-bold text-black bg-[#e4ded7] rounded"
          >
            Show More
          </button>
        )}
        {showAll && (
          <button
            onClick={handleShowLess}
            className="px-4 py-2 font-bold text-black bg-[#e4ded7] rounded"
          >
            Show Less
          </button>
        )}
      </div>
    </section>
  );
};

export default Blog;
