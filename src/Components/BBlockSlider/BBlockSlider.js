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

  console.log(nextArrow);

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

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const swiperInstance = new Swiper(swiperRef.current, {
      loop: true,
      simulateTouch: false,
      effect: `${effect}`,
      direction: `${slideDirection}`,
      autoplay: autoplay
        ? {
            delay: autoplaySpeed,
            disableOnInteraction: false,
          }
        : false,
      grabCursor: dragOnMouse,
      mousewheel: slidesToScroll,
      // pagination: {
      //   el: pageRef.current,
      //   clickable: true,
      //   renderBullet: (index, className) => {
      //     return `<span class="${className} custom-pagination-dot">${
      //       index + 1
      //     }</span>`;
      //   },
      // },
      // pagination: {
      //   el: paginationRef.current,
      //   clickable: true,
      //   type: "bullets",
      //   renderBullet: function (index, className) {
      //     return `
      //       <span class="${className} custom-pagination-bullet">
      //         <svg class="pagination-icon" viewBox="0 0 32 32">
      //           <circle cx="16" cy="16" r="14"/>
      //         </svg>
      //         <span class="bullet-number">${index + 1}</span>
      //       </span>
      //     `;
      //   },
      // },

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

      // on: {
      //   init: function (swiper) {
      //     console.log(swiper, "Swiper initialized");

      //     // Customize navigation buttons with selected icons
      //     if (selectedIcon) {
      //       const prevBtn = swiper.navigation.prevEl;
      //       const nextBtn = swiper.navigation.nextEl;

      //       // Customizing previous button
      //       if (prevBtn) {
      //         prevBtn.innerHTML = selectedIcon; // Use prevArrow if available, else use selectedIcon
      //         prevBtn.classList.add("custom-swiper-btn");
      //       }

      //       // Customizing next button
      //       if (nextBtn) {
      //         nextBtn.innerHTML = "<p>next</p>"; // Use nextArrow if available, else use selectedIcon
      //         nextBtn.classList.add("custom-swiper-btn");
      //       }
      //     }
      //   },
      // },
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
  ]);

  const handleNext = () => swiperRef.current.swiper.slideNext();
  const handlePrev = () => swiperRef.current.swiper.slidePrev();
  const handleDotClick = (index) => swiperRef.current.swiper.slideTo(index + 1);

  return (
    <>
      {slides && (
        <div
          // style={{ width: "100%", height: "100%" }}
          className="swiper"
          ref={swiperRef}
        >
          <div className="swiper-wrapper">
            {slides.map((slide, index) => (
              <div
                className={`swiper-slide swiper-slide-${index}`}
                key={slide.id}
                // style={{ position: "relative" }}
              >
                {/* <img
                  src={slide.image}
                  alt={slide.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                /> */}

                {/* <div className={`slide-overlay slide-overlay-${index}`}></div> */}

                <div className={`slide-content slide-content-${index}`}>
                  <RichText
                    className="slide-title"
                    tagName={titleTag}
                    value={slide.title}
                    allowedFormats={["core/bold", "core/italic"]}
                    // style={{
                    //   margin: "0",
                    // }}
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
                    // style={{
                    //   margin: "0",
                    // }}
                    onChange={(value) => {
                      setAttributes({
                        slides: updateData(slides, value, index, "description"),
                      });
                    }}
                    placeholder="Enter slide description"
                  />

                  {isEditor ? (
                    slide.buttonLabel && (
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
                  ) : (
                    <a
                      className="slide-button"
                      href={slide.buttonLink || "#"}
                      target={slide.buttonTarget ? "_blank" : "_self"}
                      rel={slide.buttonTarget ? "noopener noreferrer" : ""}
                      // style={{
                      //   display: "inline-block",
                      //   backgroundColor: "#0073aa",
                      //   color: "#ffffff",
                      //   padding: "10px 20px",
                      //   textDecoration: "none",
                      //   borderRadius: "4px",
                      //   textAlign: "center",
                      //   cursor: "pointer",
                      // }}
                    >
                      {slide.buttonLabel || "Click Here"}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {arrows && (
            <>
              <div
                ref={nextRef}
                onClick={handleNext}
                className="swiper-button-next"
                dangerouslySetInnerHTML={{ __html: `${nextArrow}` }}
              />
              <div
                ref={prevRef}
                onClick={handlePrev}
                className="swiper-button-prev"
                dangerouslySetInnerHTML={{ __html: `${prevArrow}` }}
              />
            </>
          )}

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
