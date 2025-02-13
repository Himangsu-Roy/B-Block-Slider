// import React, { useEffect, useRef, useState } from "react";
// import "swiper/css";
// import { useBlockProps, RichText } from "@wordpress/block-editor";
// import { updateData } from "../../../../bpl-tools/utils/functions";
// import { useSelect } from "@wordpress/data";

// const BBlockSlider = ({ attributes, setAttributes }) => {
//   const isEditor = useSelect(
//     (select) => select("core/edit-post") !== undefined,
//     []
//   );
//   const {
//     slides,
//     titleTag,
//     selectedIcon,
//     nextArrow,
//     prevArrow,
//     slideOptions,
//     layoutSettings,
//     paginationStyles,
//   } = attributes;

//   const { indicatorStyle } = paginationStyles;

//   const {
//     effect,
//     autoplaySpeed,
//     autoplay,
//     dragOnMouse,
//     slidesToScroll,
//     arrows,
//   } = slideOptions;

//   const { slideDirection, contentPosition } = layoutSettings;

//   const swiperRef = useRef(null);
//   const pageRef = useRef(null);
//   const prevRef = useRef(null);
//   const nextRef = useRef(null);
//   const paginationRef = useRef(null);

//   // Create navigation buttons
//   const swiperButtonNext = document.createElement("div");
//   swiperButtonNext.classList.add(
//     "swiper-button-next",
//     "swiper-button-vertical"
//   );

//   const swiperButtonPrev = document.createElement("div");
//   swiperButtonPrev.classList.add(
//     "swiper-button-prev",
//     "swiper-button-vertical"
//   );

//   swiperContainer.appendChild(swiperButtonNext);
//   swiperContainer.appendChild(swiperButtonPrev);

//   useEffect(() => {
//     const swiperInstance = new Swiper(swiperRef.current, {
//       loop: true,
//       grabCursor: dragOnMouse,
//       lazy: true,
//       simulateTouch: false,
//       effect: `${effect}`,
//       direction: `${slideDirection}`,
//       autoplay: autoplay
//         ? {
//             delay: autoplaySpeed,
//             disableOnInteraction: false,
//           }
//         : false,
//       mousewheel: slidesToScroll,
//       keyboard: {
//         enabled: true,
//       },

//       pagination: {
//         el: paginationRef.current,
//         clickable: true,
//         renderBullet: (index, className) => {
//           const { paginationStyle } = attributes;

//           const getBulletContent = () => {
//             switch (indicatorStyle) {
//               case "numbers":
//                 return `<span class="bullet-number">${index + 1}</span>`;

//               case "circles":
//                 return `
//                 <svg class="pagination-icon" viewBox="0 0 32 32">
//                   <circle cx="16" cy="16" r="14"/>
//                 </svg>
//               `;

//               case "squares":
//                 return `
//                 <svg class="pagination-icon" viewBox="0 0 32 32">
//                   <rect x="4" y="4" width="24" height="24" rx="2"/>
//                 </svg>
//               `;

//               case "custom":
//                 return `
//                 <svg class="pagination-icon" viewBox="0 0 24 24">
//                   <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
//                 </svg>
//               `;

//               default:
//                 return index + 1;
//             }
//           };

//           return `
//           <span class="${className} custom-pagination-bullet ${indicatorStyle}">
//             ${getBulletContent()}
//           </span>
//         `;
//         },
//       },

//       navigation: {
//         nextEl: nextRef?.current,
//         prevEl: prevRef?.current,
//       },
//     });

//     return () => {
//       if (swiperInstance) swiperInstance.destroy(true, true);
//     };
//   }, [
//     effect,
//     slideDirection,
//     autoplay,
//     autoplaySpeed,
//     dragOnMouse,
//     slidesToScroll,
//     selectedIcon,
//     nextArrow,
//     prevArrow,
//     indicatorStyle,
//     slides,
//   ]);

//   const handleNext = () => swiperRef.current.swiper.slideNext();
//   const handlePrev = () => swiperRef.current.swiper.slidePrev();
//   const handleDotClick = (index) => swiperRef.current.swiper.slideTo(index + 1);

//   return (
//     <>
//       {slides && (
//         <div
//           // style={{ width: "100%", height: "100%" }}
//           className="swiper"
//           ref={swiperRef}
//         >
//           <div className="swiper-wrapper">
//             {slides.map((slide, index) => (
//               <div
//                 className={`swiper-slide swiper-slide-${index}`}
//                 key={slide.id}
//               >
//                 <div className={`slide-content slide-content-${index}`}>
//                   <RichText
//                     className="slide-title"
//                     tagName={titleTag}
//                     value={slide.title}
//                     allowedFormats={["core/bold", "core/italic"]}
//                     onChange={(value) => {
//                       setAttributes({
//                         slides: updateData(slides, value, index, "title"),
//                       });
//                     }}
//                     placeholder="Enter slide title"
//                   />

//                   <RichText
//                     className="slide-description"
//                     tagName="p"
//                     value={slide.description}
//                     allowedFormats={["core/bold", "core/italic"]}
//                     onChange={(value) => {
//                       setAttributes({
//                         slides: updateData(slides, value, index, "description"),
//                       });
//                     }}
//                     placeholder="Enter slide description"
//                   />

//                   {isEditor
//                     ? slide.buttonLabel && (
//                         <RichText
//                           className="slide-button"
//                           tagName="a"
//                           value={slide.buttonLabel}
//                           allowedFormats={["core/bold", "core/italic"]}
//                           onChange={(value) => {
//                             setAttributes({
//                               slides: updateData(
//                                 slides,
//                                 value,
//                                 index,
//                                 "buttonLabel"
//                               ),
//                             });
//                           }}
//                           placeholder="Enter button label"
//                         />
//                       )
//                     : slide.buttonLabel && (
//                         <a
//                           className="slide-button"
//                           href={slide.buttonLink || "#"}
//                           target={slide.buttonTarget ? "_blank" : "_self"}
//                           rel={slide.buttonTarget ? "noopener noreferrer" : ""}
//                         >
//                           {slide.buttonLabel}
//                         </a>
//                       )}
//                 </div>
//               </div>
//             ))}
//           </div>

//           {arrows && (
//             <>
//               <div
//                 ref={nextRef}
//                 onClick={handleNext}
//                 className="swiper-button-next"
//                 dangerouslySetInnerHTML={{ __html: `${nextArrow}` }}
//               />
//               <div
//                 ref={prevRef}
//                 onClick={handlePrev}
//                 className="swiper-button-prev"
//                 dangerouslySetInnerHTML={{ __html: `${prevArrow}` }}
//               />
//             </>
//           )}

//           {/* Custom Pagination */}
//           <div
//             ref={paginationRef}
//             className="swiper-pagination custom-pagination"
//           />
//         </div>
//       )}
//     </>
//   );
// };

// export default BBlockSlider;

import React, { useEffect, useRef, useState } from "react";
import "swiper/css";
import { useBlockProps, RichText } from "@wordpress/block-editor";
import { updateData } from "../../../../bpl-tools/utils/functions";
import { useSelect } from "@wordpress/data";

const BBlockSlider = ({ attributes, setAttributes }) => {
  const isEditor = useSelect(
    (select) => select("core/edit-post") !== undefined,
    []
  );
  const {
    slides,
    titleTag,
    selectedIcon,
    nextArrow,
    prevArrow,
    slideOptions,
    layoutSettings,
    paginationStyles,
  } = attributes;

  const { indicatorStyle } = paginationStyles;

  const {
    effect,
    autoplaySpeed,
    autoplay,
    dragOnMouse,
    slidesToScroll,
    arrows,
  } = slideOptions;

  const { slideDirection, contentPosition } = layoutSettings;

  const swiperRef = useRef(null);
  const pageRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const paginationRef = useRef(null);

  // Append vertical navigation buttons dynamically
  // useEffect(() => {
  //   if (swiperRef.current && arrows && slideDirection === "vertical") {
  //     const swiperContainer = swiperRef.current;

  //     // Create next button
  //     const swiperButtonNext = document.createElement("div");
  //     swiperButtonNext.classList.add(
  //       "swiper-button-next",
  //       "swiper-button-vertical"
  //     );
  //     swiperButtonNext.innerHTML = nextArrow;
  //     swiperButtonNext.addEventListener("click", handleNext);

  //     // Create prev button
  //     const swiperButtonPrev = document.createElement("div");
  //     swiperButtonPrev.classList.add(
  //       "swiper-button-prev",
  //       "swiper-button-vertical"
  //     );
  //     swiperButtonPrev.innerHTML = prevArrow;
  //     swiperButtonPrev.addEventListener("click", handlePrev);

  //     // Append buttons to the Swiper container
  //     swiperContainer.appendChild(swiperButtonNext);
  //     swiperContainer.appendChild(swiperButtonPrev);

  //     // Cleanup function to remove buttons on unmount
  //     return () => {
  //       swiperButtonNext.removeEventListener("click", handleNext);
  //       swiperButtonPrev.removeEventListener("click", handlePrev);
  //       swiperContainer.removeChild(swiperButtonNext);
  //       swiperContainer.removeChild(swiperButtonPrev);
  //     };
  //   }
  // }, [arrows, slideDirection, nextArrow, prevArrow]);

  useEffect(() => {
    if (swiperRef.current && arrows) {
      const swiperContainer = swiperRef.current;

      // Create next button
      const swiperButtonNext = document.createElement("div");
      swiperButtonNext.classList.add(
        "swiper-button-next",
        slideDirection === "vertical"
          ? "swiper-button-vertical"
          : "swiper-button-horizontal"
      );
      swiperButtonNext.innerHTML = nextArrow;
      swiperButtonNext.addEventListener("click", handleNext);

      // Create prev button
      const swiperButtonPrev = document.createElement("div");
      swiperButtonPrev.classList.add(
        "swiper-button-prev",
        slideDirection === "vertical"
          ? "swiper-button-vertical"
          : "swiper-button-horizontal"
      );
      swiperButtonPrev.innerHTML = prevArrow;
      swiperButtonPrev.addEventListener("click", handlePrev);

      // Append buttons to the Swiper container
      swiperContainer.appendChild(swiperButtonNext);
      swiperContainer.appendChild(swiperButtonPrev);

      // Cleanup function to remove buttons on unmount
      return () => {
        swiperButtonNext.removeEventListener("click", handleNext);
        swiperButtonPrev.removeEventListener("click", handlePrev);
        swiperContainer.removeChild(swiperButtonNext);
        swiperContainer.removeChild(swiperButtonPrev);
      };
    }
  }, [arrows, slideDirection, nextArrow, prevArrow]);

  useEffect(() => {
    const swiperInstance = new Swiper(swiperRef.current, {
      loop: true,
      grabCursor: dragOnMouse,
      lazy: true,
      simulateTouch: false,
      effect: `${effect}`,
      direction: `${slideDirection}`,
      autoplay: autoplay
        ? {
            delay: autoplaySpeed,
            disableOnInteraction: false,
          }
        : false,
      mousewheel: slidesToScroll,
      keyboard: {
        enabled: true,
      },

      pagination: {
        el: paginationRef.current,
        clickable: true,
        renderBullet: (index, className) => {
          const { paginationStyle } = attributes;

          const getBulletContent = () => {
            switch (indicatorStyle) {
              case "numbers":
                return `<span class="bullet-number">${index + 1}</span>`;

              case "circles":
                return `
                <svg class="pagination-icon" viewBox="0 0 32 32">
                  <circle cx="16" cy="16" r="14"/>
                </svg>
              `;

              case "squares":
                return `
                <svg class="pagination-icon" viewBox="0 0 32 32">
                  <rect x="4" y="4" width="24" height="24" rx="2"/>
                </svg>
              `;

              case "custom":
                return `
                <svg class="pagination-icon" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                </svg>
              `;

              default:
                return index + 1;
            }
          };

          return `
          <span class="${className} custom-pagination-bullet ${indicatorStyle}">
            ${getBulletContent()}
          </span>
        `;
        },
      },

      navigation: {
        nextEl: nextRef?.current,
        prevEl: prevRef?.current,
      },
    });

    return () => {
      if (swiperInstance) swiperInstance.destroy(true, true);
    };
  }, [
    effect,
    slideDirection,
    autoplay,
    autoplaySpeed,
    dragOnMouse,
    slidesToScroll,
    selectedIcon,
    nextArrow,
    prevArrow,
    indicatorStyle,
    slides,
  ]);

  const handleNext = () => swiperRef.current.swiper.slideNext();
  const handlePrev = () => swiperRef.current.swiper.slidePrev();
  const handleDotClick = (index) => swiperRef.current.swiper.slideTo(index + 1);

  return (
    <>
      {slides && (
        <div className="swiper" ref={swiperRef}>
          <div className="swiper-wrapper">
            {slides.map((slide, index) => (
              <div
                className={`swiper-slide swiper-slide-${index}`}
                key={slide.id}
              >
                <div className={`slide-content slide-content-${index}`}>
                  <RichText
                    className="slide-title"
                    tagName={titleTag}
                    value={slide.title}
                    allowedFormats={["core/bold", "core/italic"]}
                    onChange={(value) => {
                      setAttributes({
                        slides: updateData(slides, value, index, "title"),
                      });
                    }}
                    placeholder="Enter slide title"
                  />

                  <RichText
                    className="slide-description"
                    tagName="p"
                    value={slide.description}
                    allowedFormats={["core/bold", "core/italic"]}
                    onChange={(value) => {
                      setAttributes({
                        slides: updateData(slides, value, index, "description"),
                      });
                    }}
                    placeholder="Enter slide description"
                  />

                  {isEditor
                    ? slide.buttonLabel && (
                        <RichText
                          className="slide-button"
                          tagName="a"
                          value={slide.buttonLabel}
                          allowedFormats={["core/bold", "core/italic"]}
                          onChange={(value) => {
                            setAttributes({
                              slides: updateData(
                                slides,
                                value,
                                index,
                                "buttonLabel"
                              ),
                            });
                          }}
                          placeholder="Enter button label"
                        />
                      )
                    : slide.buttonLabel && (
                        <a
                          className="slide-button"
                          href={slide.buttonLink || "#"}
                          target={slide.buttonTarget ? "_blank" : "_self"}
                          rel={slide.buttonTarget ? "noopener noreferrer" : ""}
                        >
                          {slide.buttonLabel}
                        </a>
                      )}
                </div>
              </div>
            ))}
          </div>

          {/* Custom Pagination */}
          <div
            ref={paginationRef}
            className="swiper-pagination custom-pagination"
          />
        </div>
      )}
    </>
  );
};

export default BBlockSlider;
