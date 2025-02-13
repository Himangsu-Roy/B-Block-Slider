// import { getColorsCSS } from "../../../../Components/utils/getCSS";
import {
  getBackgroundCSS,
  getColorsCSS,
  getTypoCSS,
} from "../../../../bpl-tools/utils/getCSS";
import { deskBreakpoint } from "../../../../bpl-tools/utils/data";

const Style = ({ attributes, id, device = "desktop" }) => {
  const {
    colors,
    slides,
    sliderStyles,
    titleStyles,
    descriptionStyles,
    buttonStyles,
    arrowStyles,
    layoutSettings,
    nextArrow,
    prevArrow,
  } = attributes;
  const { titleTypography, titleColor, titlePadding, titleAnimation } =
    titleStyles;

  const {
    descriptionTypography,
    descriptionColor,
    descriptionMargin,
    descriptionAnimation,
  } = descriptionStyles;
  const {
    buttonTypography,
    buttonColors,
    hoverColors,
    buttonBorder,
    borderRadius,
    buttonPadding,
    buttonAnimation,
  
  } = buttonStyles;
  console.log(buttonPadding?.top, "button padding");

  const { leftRightTextGap, layoutHeight, layoutWidth, contentPosition } =
    layoutSettings;

  const { backgroundColor, arrowBorderRadius } = arrowStyles;

  const mainSl = `#${id}`;
  const swiperSl = `${mainSl} .swiper`;
  const wrapperrSl = `${swiperSl} .swiper-wrapper`;
  const swiperSlideSl = `${wrapperrSl} .swiper-slide`;
  const slideContentSll = `${swiperSlideSl} .slide-content`;
  const titleSl = `${slideContentSll} .slide-title`;
  // const blockSl = `${mainSl} .bBlocksTestPurpose`;

  // Overlay color
  const overlayColor = `${mainSl}`;
  const slideContent = `${mainSl}`;
  // margin
  const marginSl = `#${id} .swiper`;
  const sliderBody = `#${mainSl} .swiper`;
  const sliderWrapper = `#${sliderBody} .swiper-wrapper`;
  // Border radius
  const borderRadiusSl = `#${id} .swiper`;
  // Slide Title
  const slideTitleSl = `#${id} .swiper .swiper-wrapper .swiper-slide .slide-content .slide-title`;

  // Slide Description
  const slideDescriptionSl = `#${id} .swiper .swiper-wrapper .swiper-slide .slide-content .slide-description`;
  // Slide Button
  const slideButtonSl = `#${id} .swiper .swiper-wrapper .swiper-slide .slide-content .slide-button`;
  // Arrow
  const slideArrowSl = `#${id} .swiper`;
  // Slide content
  const slideContentSl = `#${id} .swiper .swiper-wrapper .swiper-slide .slide-content`;
  const slideBtnSl = `#${id} .swiper .swiper-wrapper .swiper-slide `;

  // Height
  const sliderHeightSl = `#${id} .swiper`;

  const slideStyles = slides
    .map((slide, index) => {
      const { backgroundConfig } = slide;

      return `
    ${wrapperrSl} .swiper-slide-${index}{
      ${getBackgroundCSS(backgroundConfig)}

    }

    ${slideBtnSl} .slide-content-${index} a{
      padding: ${buttonPadding?.top} ${buttonPadding?.right} ${
        buttonPadding?.bottom
      } ${buttonPadding?.left};
    }
      
    `;
    })
    .join("\n");

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
        ${getTypoCSS("", titleStyles.titleTypography)?.googleFontLink}
        ${getTypoCSS(titleSl, titleStyles.titleTypography)?.styles}

        ${slideStyles}

        ${wrapperrSl}{
          height:500px;
          width:100%;
          text-align: center;
          
        }

      ${slideContentSl} {
        // position: absolute;
        // left: 50%;
        // bottom: 40%;
        // transform: translate(-50%, -50%);
        // color: #fff;
        // z-index: 2;
        // text-shadow: 0 1px 3px rgba(0, 0, 0, 0.7);
        display: flex;
        // justify-content: center;
        align-items: center;
        flex-direction: column;

      

      }

      ${wrapperrSl} .swiper-slide{
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      }


      ${slideContentSl} {
        width: calc(100% - ${leftRightTextGap});
        background-position: ${contentPosition};
      }

      ${sliderHeightSl}{
        height: ${layoutHeight[device]};
        width: ${layoutWidth[device]};

      }

      ${overlayColor} .slide-overlay{
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: ${sliderStyles.overlayColor};
        z-index: 1;
		  }

      ${marginSl}{
      // position: relative;
        margin: ${sliderStyles.sliderMargin.top} ${
          sliderStyles.sliderMargin.right
        } ${sliderStyles.sliderMargin.bottom} ${sliderStyles.sliderMargin.left};
      }

      ${borderRadiusSl}{
        border-radius: ${sliderStyles.sliderBorderRadius.top} ${
          sliderStyles.sliderBorderRadius.right
        } ${sliderStyles.sliderBorderRadius.bottom} ${
          sliderStyles.sliderBorderRadius.left
        };
      }

      ${slideTitleSl}{
        font-family: ${titleTypography.fontFamily}, ${
          titleTypography.fontCategory
        };
        font-size: ${titleTypography.fontSize.desktop}px;
        font-style: ${titleTypography.fontStyle};
        font-variant: ${titleTypography.fontVariant};
        font-weight: ${titleTypography.fontWeight};
        letter-spacing: ${titleTypography.letterSpace};
        line-height: ${titleTypography.lineHeight};
        text-decoration: ${titleTypography.textDecoration};
        text-transform: ${titleTypography.textTransform};
        margin: 0;
        color: ${titleColor};
        padding: ${titlePadding.top} ${titlePadding.right} ${
          titlePadding.bottom
        } ${titlePadding.left};
        animation: ${titleAnimation.animationType}; 
        animation-duration: ${titleAnimation.animationDuration}s;
        animation-delay: ${titleAnimation.animationDelay}s;
		  }


      ${slideDescriptionSl}{
        font-family: ${descriptionTypography.fontFamily}, ${
          descriptionTypography.fontCategory
        };
        font-size: ${descriptionTypography.fontSize.desktop}px;
        font-style: ${descriptionTypography.fontStyle};
        font-variant: ${descriptionTypography.fontVariant};
        font-weight: ${descriptionTypography.fontWeight};
        letter-spacing: ${descriptionTypography.letterSpace};
        line-height: ${descriptionTypography.lineHeight};
        text-decoration: ${descriptionTypography.textDecoration};
        text-transform: ${descriptionTypography.textTransform};
        // margin-bottom: 30px;
        color: ${descriptionColor};
        margin: ${descriptionMargin.top} ${descriptionMargin.right} ${
          descriptionMargin.bottom
        } ${descriptionMargin.left};
        animation: ${descriptionAnimation.animationType}; 
        animation-duration: ${descriptionAnimation.animationDuration}s;
        animation-delay: ${descriptionAnimation.animationDelay}s;
      }

      ${slideButtonSl}{
        font-family: ${buttonTypography.fontFamily}, ${
          buttonTypography.fontCategory
        };
        font-size: ${buttonTypography.fontSize.desktop}px;
        font-style: ${buttonTypography.fontStyle};
        font-variant: ${buttonTypography.fontVariant};
        font-weight: ${buttonTypography.fontWeight};
        letter-spacing: ${buttonTypography.letterSpace};
        line-height: ${buttonTypography.lineHeight};
        text-decoration: ${buttonTypography.textDecoration};
        text-transform: ${buttonTypography.textTransform};

        color: ${buttonColors?.color};
        background-color: ${
          buttonColors?.bgType === "solid" ? buttonColors.bg : "transparent"
        };
        background-image: ${
          buttonColors?.bgType === "gradient"
            ? `${buttonColors.gradient}`
            : "none"
        };

         padding: ${buttonPadding?.top} ${buttonPadding?.right} ${
           buttonPadding?.bottom
         } ${buttonPadding?.left};
        
        border-radius: ${borderRadius?.top} ${borderRadius?.right} ${
          borderRadius?.bottom
        } ${borderRadius?.left};
        

        animation: ${buttonAnimation?.animationType}; 
        animation-duration: ${buttonAnimation?.animationDuration}s;
        animation-delay: ${buttonAnimation?.animationDelay}s;
        cursor: pointer;
        

        border: ${buttonBorder?.width} ${buttonBorder?.style} ${
          buttonBorder?.color
        };


      }


      ${slideButtonSl}:hover{
        color: ${hoverColors?.color};
        background-color: ${
          hoverColors?.bgType === "solid" ? hoverColors.bg : "transparent"
        };

        background-image: ${
          hoverColors?.bgType === "gradient"
            ? `${hoverColors.gradient}`
            : "none"
        };
      }

     ${slideArrowSl} .swiper-button-next.swiper-button-horizontal svg{
      width: ${arrowStyles?.arrowSize}px;
      height: ${arrowStyles?.arrowSize}px;
      
     }

     ${slideArrowSl} .swiper-button-prev.swiper-button-horizontal svg{
      width: ${arrowStyles?.arrowSize}px;
      height: ${arrowStyles?.arrowSize}px;
      
     }

     
      ${slideArrowSl} .swiper-button-prev.swiper-button-horizontal{
        position: absolute;
        // font-size: ${arrowStyles.arrowSize}px;
        top: 50%;
        left: 10px;
        z-index: 10;
        
        fill: ${backgroundColor?.color};
        background-color: ${
          backgroundColor?.bgType === "solid"
            ? backgroundColor.bg
            : "transparent"
        };
        background-image: ${
          backgroundColor?.bgType === "gradient"
            ? `${backgroundColor.gradient}`
            : "none"
        };
        border: none;
       border-radius: ${arrowBorderRadius?.top} ${arrowBorderRadius?.right} ${
         arrowBorderRadius?.bottom
       } ${arrowBorderRadius?.left};
        display: flex;
        align-items: center;
        justify-content: center;
        width: ${arrowStyles?.arrowWidth};
        height: ${arrowStyles?.arrowHeight};
        cursor: pointer; 
        // box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
        

      }
     

      ${slideArrowSl} .swiper-button-next.swiper-button-horizontal{
        position: absolute;
        // font-size: ${arrowStyles?.arrowSize}px;
        top: 50%;
        right: 10px;
        z-index: 10;
        
        fill: ${backgroundColor?.color};
        background-color: ${
          backgroundColor?.bgType === "solid"
            ? backgroundColor.bg
            : "transparent"
        };
        background-image: ${
          backgroundColor?.bgType === "gradient"
            ? `${backgroundColor.gradient}`
            : "none"
        };
        border: none;
        border-radius: ${arrowBorderRadius?.top} ${arrowBorderRadius?.right} ${
          arrowBorderRadius?.bottom
        } ${arrowBorderRadius?.left};
        display: flex;
        align-items: center;
        justify-content: center;
        width: ${arrowStyles?.arrowWidth};
        height: ${arrowStyles?.arrowHeight};
        cursor: pointer; 
        // box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
      }



           
      @media (max-width: 639px) {
        ${sliderHeightSl}{
          height: ${layoutHeight.mobile};
          width: ${layoutWidth.mobile};
        }
      }

      
      @media (min-width: 640px) and (max-width: 1023px) {
          ${sliderHeightSl}{
          height: ${layoutHeight.tablet};
          width: ${layoutWidth.tablet};
        }
      }
      
      


	`,
      }}
    />
  );
};
export default Style;
