// import { Filter, BookOpen, GraduationCap, HelpCircle, DollarSign, BadgeCheck } from 'lucide-react';

// export default function Sidebar() {
//   return (
//     <div className="group fixed left-0 top-16 h-[calc(100vh-4rem)] z-40">
//       {/* Hover strip */}
//       <div className="absolute left-0 top-0 w-2 h-full bg-blue-500/20 backdrop-blur-sm md:group-hover:w-0 transition-all duration-300" />
      
//       {/* Main sidebar */}
//       <div className={`
//         w-64 h-full bg-black/95 text-white
//         transform transition-all duration-300 ease-in-out
//         -translate-x-[calc(100%-8px)] md:group-hover:translate-x-0
//       `}>
//         <div className="p-4">
//           <h2 className="text-xl font-semibold mb-6">Quick Access</h2>
          
//           {/* Navigation Links */}
//           <nav className="space-y-6">
//             <div>
//               <h3 className="text-sm text-gray-400 mb-2">EXPLORE</h3>
//               <ul className="space-y-3">
//                 <li>
//                   <a href="/programs" className="flex items-center space-x-3 hover:text-blue-400 transition-colors">
//                     <BookOpen className="w-5 h-5" />
//                     <span>Program Details</span>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="/process" className="flex items-center space-x-3 hover:text-blue-400 transition-colors">
//                     <GraduationCap className="w-5 h-5" />
//                     <span>Requirements</span>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="/recommend" className="flex items-center space-x-3 hover:text-blue-400 transition-colors">
//                     {/* <DollarSign className="w-5 h-5" /> */}
//                     <BadgeCheck className="w-5 h-5" />
//                     <span>Recommendations</span>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="/faqs" className="flex items-center space-x-3 hover:text-blue-400 transition-colors">
//                     <HelpCircle className="w-5 h-5" />
//                     <span>FAQs</span>
//                   </a>
//                 </li>
//               </ul>
//             </div>

//             {/* Filters Section */}
//             <div>
//               <h3 className="text-sm text-gray-400 mb-2">FILTERS</h3>
//               <div className="space-y-3">
//                 <div className="flex items-center space-x-3">
//                   <Filter className="w-5 h-5" />
//                   <span>Program Filters</span>
//                 </div>
//                 <div className="space-y-2 pl-8">
//                   <label className="flex items-center space-x-2">
//                     <input type="checkbox" className="form-checkbox text-blue-500" />
//                     <span>Full-time</span>
//                   </label>
//                   <label className="flex items-center space-x-2">
//                     <input type="checkbox" className="form-checkbox text-blue-500" />
//                     <span>Scholarships Available</span>
//                   </label>
//                   <label className="flex items-center space-x-2">
//                     <input type="checkbox" className="form-checkbox text-blue-500" />
//                     <span>Work Permit</span>
//                   </label>
//                 </div>
//               </div>
//             </div>
//           </nav>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState, useEffect, useRef } from "react";
import { Filter, BookOpen, GraduationCap, HelpCircle, BadgeCheck, Info } from "lucide-react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  // Open sidebar when hovering over left edge
  const handleMouseEnter = () => setIsOpen(true);

  // Close sidebar when cursor moves away
  const handleMouseLeave = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.relatedTarget)) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Hover strip (triggers sidebar open on hover) */}
      <div
        className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-2 bg-transparent z-50 cursor-pointer"
        onMouseEnter={handleMouseEnter}
      />

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-black/95 text-white z-40
          transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-[calc(100%-8px)]"}`}
        onMouseLeave={handleMouseLeave} // Auto-hide on mouse leave
      >
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-6">Quick Access</h2>

          {/* Navigation Links */}
          <nav className="space-y-6">
            <div>
              <h3 className="text-sm text-gray-400 mb-2">EXPLORE</h3>
              <ul className="space-y-3">
                <li>
                  <a href="/programs" className="flex items-center space-x-3 hover:text-blue-400 transition-colors">
                    <BookOpen className="w-5 h-5" />
                    <span>Program Details</span>
                  </a>
                </li>
                <li>
                  <a href="/process" className="flex items-center space-x-3 hover:text-blue-400 transition-colors">
                    <GraduationCap className="w-5 h-5" />
                    <span>Requirements</span>
                  </a>
                </li>
                <li>
                  <a href="/recommend" className="flex items-center space-x-3 hover:text-blue-400 transition-colors">
                    <BadgeCheck className="w-5 h-5" />
                    <span>Recommendations</span>
                  </a>
                </li>
                <li>
                  <a href="/about" className="flex items-center space-x-3 hover:text-blue-400 transition-colors">
                    <Info className="w-5 h-5" />
                    <span>About Us</span>
                  </a>
                </li>
                <li>
                  <a href="/faqs" className="flex items-center space-x-3 hover:text-blue-400 transition-colors">
                    <HelpCircle className="w-5 h-5" />
                    <span>FAQs</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Filters Section */}
            <div>
              <h3 className="text-sm text-gray-400 mb-2">FILTERS</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Filter className="w-5 h-5" />
                  <span>Program Filters</span>
                </div>
                <div className="space-y-2 pl-8">
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="form-checkbox text-blue-500" />
                    <span>Full-time</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="form-checkbox text-blue-500" />
                    <span>Scholarships Available</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="form-checkbox text-blue-500" />
                    <span>Work Permit</span>
                  </label>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
