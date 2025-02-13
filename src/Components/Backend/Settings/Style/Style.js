import { __ } from "@wordpress/i18n";
import {
  PanelBody,
  // __experimentalBoxControl as BoxControl,
  SelectControl,
  __experimentalInputControl as InputControl,
  ToggleControl,
  TextareaControl,
  RangeControl,
  __experimentalUnitControl as UnitControl,
  __experimentalSpacer as Spacer,
  __experimentalBorderBoxControl as BorderBoxControl,
} from "@wordpress/components";

import { BoxControl } from "../../../../../../bpl-tools/Components";
import { ColorControl } from "../../../../../../bpl-tools/Components/ColorControl/ColorControl";
import { updateData } from "../../../../utils/functions";
import {
  Background,
  ColorsControl,
  Typography,
} from "../../../../../../bpl-tools/Components";
import { perUnit, pxUnit } from "../../../../../../bpl-tools/utils/options";

const Style = ({ attributes, setAttributes }) => {
  const {
    colors,
    sliderStyles,
    titleStyles,
    descriptionStyles,
    buttonStyles,
    arrowStyles,
  } = attributes;
  const { titleAnimation } = titleStyles;
  const { descriptionAnimation } = descriptionStyles;
  const { buttonAnimation, buttonBorder } = buttonStyles;

  return (
    <>
      <PanelBody
        className="bPlPanelBody"
        title={__("Slider", "b-blocks")}
        initialOpen={false}
      >
        {/* <ColorControl
          label={__("Overlay Color")}
          value={sliderStyles.overlayColor}
          onChange={(newColor) =>
            setAttributes({
              sliderStyles: updateData(sliderStyles, newColor, "overlayColor"),
            })
          }
          defaultColor={sliderStyles.overlayColor}
        /> */}

        <BoxControl
          label="Margin"
          values={sliderStyles.sliderMargin}
          onChange={(nextValues) =>
            setAttributes({
              sliderStyles: updateData(
                sliderStyles,
                nextValues,
                "sliderMargin"
              ),
            })
          }
        />
        {/* Border Radius */}
        <BoxControl
          label="Border Radius"
          values={sliderStyles.sliderBorderRadius}
          onChange={(nextValues) =>
            setAttributes({
              sliderStyles: updateData(
                sliderStyles,
                nextValues,
                "sliderBorderRadius"
              ),
            })
          }
        />
      </PanelBody>
      <PanelBody
        className="bPlPanelBody"
        title={__("Title", "b-blocks")}
        initialOpen={false}
      >
        <Typography
          label="Typography"
          value={titleStyles.titleTypography}
          onChange={(newTypo) => {
            setAttributes({
              titleStyles: updateData(titleStyles, newTypo, "titleTypography"),
            });
          }}
        />
        <ColorControl
          label={__("Color")}
          value={titleStyles.titleColor}
          onChange={(newColor) =>
            setAttributes({
              titleStyles: updateData(titleStyles, newColor, "titleColor"),
            })
          }
          defaultColor={titleStyles.titleColor}
        />

        <BoxControl
          label="Padding"
          values={titleStyles.titlePadding}
          onChange={(nextValues) =>
            setAttributes({
              titleStyles: updateData(titleStyles, nextValues, "titlePadding"),
            })
          }
        />

        <SelectControl
          label={__("Animation", "b-blocks")}
          value={titleAnimation.animationType}
          options={[
            { label: "None", value: "none" },
            { label: "Fade In", value: "fadeIn" },
            { label: "Fade In Up", value: "fadeInUp" },
            { label: "Fade In Down", value: "fadeInDown" },
            { label: "Fade In Left", value: "fadeInLeft" },
            { label: "Fade In Right", value: "fadeInRight" },
            { label: "Zoom In", value: "zoomIn" },
            { label: "Zoom In Up", value: "slideInUp" },
            { label: "Zoom In Down", value: "slideInDown" },
            { label: "Zoom In Left", value: "slideInLeft" },
            { label: "Zoom In Right", value: "slideInRight" },
          ]}
          onChange={(value) => {
            setAttributes({
              titleStyles: updateData(
                titleStyles,
                { ...titleAnimation, animationType: value },
                "titleAnimation"
              ),
            });
          }}
        />

        {/* Animation Delay */}
        <InputControl
          label="Animation Delay(s)"
          value={titleAnimation.animationDelay}
          type="number"
          onChange={(value) => {
            setAttributes({
              titleStyles: updateData(
                titleStyles,
                { ...titleAnimation, animationDelay: value },
                "titleAnimation"
              ),
            });
          }}
        />
        {/* Animation Duration */}
        <InputControl
          label="Animation Duration(s)"
          value={titleAnimation.animationDuration}
          type="number"
          onChange={(value) => {
            setAttributes({
              titleStyles: updateData(
                titleStyles,
                { ...titleAnimation, animationDuration: value },
                "titleAnimation"
              ),
            });
          }}
        />
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Description", "b-blocks")}
        initialOpen={false}
      >
        <Typography
          label="Typography"
          value={descriptionStyles.descriptionTypography}
          onChange={(newTypo) => {
            setAttributes({
              descriptionStyles: updateData(
                descriptionStyles,
                newTypo,
                "descriptionTypography"
              ),
            });
          }}
        />
        <ColorControl
          label={__("Color")}
          value={descriptionStyles.descriptionColor}
          onChange={(newColor) =>
            setAttributes({
              descriptionStyles: updateData(
                descriptionStyles,
                newColor,
                "descriptionColor"
              ),
            })
          }
          defaultColor={descriptionStyles.descriptionColor}
        />

        <BoxControl
          label="Margin"
          values={descriptionStyles.descriptionMargin}
          onChange={(nextValues) =>
            setAttributes({
              descriptionStyles: updateData(
                descriptionStyles,
                nextValues,
                "descriptionMargin"
              ),
            })
          }
        />

        <SelectControl
          label={__("Animation", "b-blocks")}
          value={descriptionAnimation.animationType}
          options={[
            { label: "None", value: "none" },
            { label: "Fade In", value: "fadeIn" },
            { label: "Fade In Up", value: "fadeInUp" },
            { label: "Fade In Down", value: "fadeInDown" },
            { label: "Fade In Left", value: "fadeInLeft" },
            { label: "Fade In Right", value: "fadeInRight" },
            { label: "Zoom In", value: "zoomIn" },
            { label: "Zoom In Up", value: "slideInUp" },
            { label: "Zoom In Down", value: "slideInDown" },
            { label: "Zoom In Left", value: "slideInLeft" },
            { label: "Zoom In Right", value: "slideInRight" },
          ]}
          onChange={(value) => {
            setAttributes({
              descriptionStyles: updateData(
                descriptionStyles,
                { ...descriptionAnimation, animationType: value },
                "descriptionAnimation"
              ),
            });
          }}
        />

        {/* Animation Delay */}
        <InputControl
          label="Animation Delay(s)"
          value={descriptionAnimation.animationDelay}
          type="number"
          onChange={(value) => {
            setAttributes({
              descriptionStyles: updateData(
                descriptionStyles,
                { ...descriptionAnimation, animationDelay: value },
                "descriptionAnimation"
              ),
            });
          }}
        />
        {/* Animation Duration */}
        <InputControl
          label="Animation Duration(s)"
          value={descriptionAnimation.animationDuration}
          type="number"
          onChange={(value) => {
            setAttributes({
              descriptionStyles: updateData(
                descriptionStyles,
                { ...descriptionAnimation, animationDuration: value },
                "descriptionAnimation"
              ),
            });
          }}
        />
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Button", "b-blocks")}
        initialOpen={false}
      >
        <Typography
          label="Typography"
          value={buttonStyles.buttonTypography}
          onChange={(newTypo) => {
            setAttributes({
              buttonStyles: updateData(
                buttonStyles,
                newTypo,
                "buttonTypography"
              ),
            });
          }}
        />

        <ColorsControl
          value={buttonStyles.buttonColors}
          onChange={(v) => {
            setAttributes({
              buttonStyles: updateData(buttonStyles, v, "buttonColors"),
            });
          }}
          defaults={{
            color: "#333",
            bgType: "solid",
            bg: "",
            gradient: "linear-gradient(135deg, #4527a4, #8344c5)",
          }}
          label="Colors"
        />
        {/* Hover Colors */}
        <ColorsControl
          value={buttonStyles.hoverColors}
          onChange={(v) => {
            setAttributes({
              buttonStyles: updateData(buttonStyles, v, "hoverColors"),
            });
          }}
          defaults={{
            color: "#333",
            bgType: "solid",
            bg: "",
            gradient: "linear-gradient(135deg, #4527a4, #8344c5)",
          }}
          label="Hover Colors"
        />

        <BoxControl
          label="Padding"
          units={[pxUnit()]}
          values={buttonStyles.buttonPadding}
          onChange={(nextValues) =>
            setAttributes({
              buttonStyles: updateData(
                buttonStyles,
                nextValues,
                "buttonPadding"
              ),
            })
          }
        />

        <Spacer />

        <BorderBoxControl
          label="Border"
          value={buttonBorder}
          onChange={(nextValues) =>
            setAttributes({
              buttonStyles: updateData(
                buttonStyles,
                nextValues,
                "buttonBorder"
              ),
            })
          }
        />

        <Spacer />

        {/* Box Control */}
        <BoxControl
          label="Border Radius"
          units={[pxUnit()]}
          values={buttonStyles.borderRadius}
          onChange={(nextValues) =>
            setAttributes({
              buttonStyles: updateData(
                buttonStyles,
                nextValues,
                "borderRadius"
              ),
            })
          }
        />

        <Spacer />

        <SelectControl
          label={__("Animation", "b-blocks")}
          value={buttonAnimation?.animationType}
          options={[
            { label: "None", value: "none" },
            { label: "Fade In", value: "fadeIn" },
            { label: "Fade In Up", value: "fadeInUp" },
            { label: "Fade In Down", value: "fadeInDown" },
            { label: "Fade In Left", value: "fadeInLeft" },
            { label: "Fade In Right", value: "fadeInRight" },
            { label: "Zoom In", value: "zoomIn" },
            { label: "Zoom In Up", value: "slideInUp" },
            { label: "Zoom In Down", value: "slideInDown" },
            { label: "Zoom In Left", value: "slideInLeft" },
            { label: "Zoom In Right", value: "slideInRight" },
          ]}
          onChange={(value) => {
            setAttributes({
              buttonStyles: updateData(
                buttonStyles,
                { ...buttonAnimation, animationType: value },
                "buttonAnimation"
              ),
            });
          }}
        />

        {/* Animation Delay */}
        <InputControl
          label="Animation Delay(s)"
          value={buttonAnimation?.animationDelay}
          type="number"
          onChange={(value) => {
            setAttributes({
              buttonStyles: updateData(
                buttonStyles,
                { ...buttonAnimation, animationDelay: value },
                "buttonAnimation"
              ),
            });
          }}
        />
        {/* Animation Duration */}
        <InputControl
          label="Animation Duration(s)"
          value={buttonAnimation?.animationDuration}
          type="number"
          onChange={(value) => {
            setAttributes({
              buttonStyles: updateData(
                buttonStyles,
                { ...buttonAnimation, animationDuration: value },
                "buttonAnimation"
              ),
            });
          }}
        />
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Arrow", "b-blocks")}
        initialOpen={false}
      >
        <RangeControl
          label={__("Size", "b-blocks")}
          value={arrowStyles.arrowSize}
          onChange={(value) => {
            setAttributes({
              arrowStyles: updateData(arrowStyles, value, "arrowSize"),
            });
          }}
          min={0}
          max={100}
          step={1}
        />

        <UnitControl
          label={__("Width", "b-blocks")}
          value={arrowStyles.arrowWidth}
          units={[pxUnit(), perUnit()]}
          onChange={(value) => {
            setAttributes({
              arrowStyles: updateData(arrowStyles, value, "arrowWidth"),
            });
          }}
        />

        <UnitControl
          label={__("Height", "b-blocks")}
          value={arrowStyles.arrowHeight}
          units={[pxUnit(), perUnit()]}
          onChange={(value) => {
            setAttributes({
              arrowStyles: updateData(arrowStyles, value, "arrowHeight"),
            });
          }}
        />

        <ColorsControl
          value={arrowStyles.backgroundColor}
          onChange={(v) => {
            setAttributes({
              arrowStyles: updateData(arrowStyles, v, "backgroundColor"),
            });
          }}
          defaults={{
            color: "#333",
            bgType: "solid",
            bg: "",
            gradient: "linear-gradient(135deg, #4527a4, #8344c5)",
          }}
          label="Background"
        />

        <BoxControl
          label="Border Radius"
          values={arrowStyles.arrowBorderRadius}
          unit={[pxUnit()]}
          onChange={(nextValues) =>
            setAttributes({
              arrowStyles: updateData(
                arrowStyles,
                nextValues,
                "arrowBorderRadius"
              ),
            })
          }
        />
      </PanelBody>
    </>
  );
};

export default Style;
