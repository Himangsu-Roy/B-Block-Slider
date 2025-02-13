import { __ } from "@wordpress/i18n";
import {
  PanelBody,
  SelectControl,
  __experimentalInputControl as InputControl,
  ToggleControl,
  TextareaControl,
  __experimentalSpacer as Spacer,
  Button,
  __experimentalUnitControl as UnitControl,
  __experimentalAlignmentMatrixControl as AlignmentMatrixControl,
  PanelRow,
} from "@wordpress/components";

import { purposeTypeOptions } from "../../../../utils/options";
import { updateData } from "../../../../utils/functions";
import { InlineMediaUpload } from "../../../../../../bpl-tools/Components/MediaControl/MediaControl";
import {
  perUnit,
  pxUnit,
  vhUnit,
} from "../../../../../../bpl-tools/utils/options";
import {
  Device,
  IconControl,
  IconLibrary,
  ItemsPanel,
  Label,
} from "../../../../../../bpl-tools/Components";
import Items from "../../Panel/Panel";

const General = ({ attributes, setAttributes, device }) => {
  console.log(device);

  const {
    slides,
    titleTag,
    layoutSettings,
    iconLibraryLabel,
    nextArrow,
    prevArrow,
    selectedIcon,
    slideOptions,
    paginationStyles,
  } = attributes;

  const {
    effect,
    autoplaySpeed,
    autoplay,
    arrows,
    dragOnMouse,
    slidesToScroll,
  } = slideOptions;

  return (
    <>
      <PanelBody
        className="bPlPanelBody"
        title={__("Slides", "b-blocks")}
        initialOpen={false}
      >
        <ItemsPanel
          {...{ attributes, setAttributes }}
          arrKey="slides"
          newItem={{
            image:
              "https://plus.unsplash.com/premium_photo-1672116453030-b3412d244c54?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "Alt 2",
            title: "Slide",
            description:
              "Seamlessly create resource sucking niches via go forward potentialities. Objectively facilitate distinctive applications for corporate metrics. Proactively procrastinate bricks-and-clicks paradigms before adaptive channels. Dynamically scale.<br>",
            buttonLabel: "",
            buttonLink: "",
            buttonTarget: true,
            backgroundConfig: {
              type: "image",
              color: "#ff0000",
              gradient: "linear-gradient(45deg, #ff0000, #00ff00)",
              image: {
                url: "https://plus.unsplash.com/premium_photo-1672116453030-b3412d244c54?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
              position: "center center",
              repeat: "no-repeat",
              size: "cover",
              overlayColor: "#00000080",
            },
          }}
          ItemSettings={Items}
          itemLabel="Slide"
          design="sortable"
        />
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Title Tag", "b-blocks")}
        initialOpen={false}
      >
        {/* Title tag */}
        <SelectControl
          label={__("Tag", "b-blocks")}
          value={titleTag}
          options={[
            { label: "H1", value: "h1" },
            { label: "H2", value: "h2" },
            { label: "H3", value: "h3" },
            { label: "H4", value: "h4" },
            { label: "H5", value: "h5" },
            { label: "H6", value: "h6" },
          ]}
          onChange={(value) => setAttributes({ titleTag: value })}
        />
      </PanelBody>

      {/* Layout Settings */}

      <PanelBody
        className="bPlPanelBody"
        title={__("Layout Settings", "b-blocks")}
        initialOpen={false}
      >
        <UnitControl
          label="Left/Right Content Gap"
          value={layoutSettings.leftRightTextGap}
          onChange={(value) => {
            setAttributes({
              layoutSettings: updateData(
                layoutSettings,
                value,
                "leftRightTextGap"
              ),
            });
          }}
        />

        <SelectControl
          label={__("Slide Direction", "b-blocks")}
          value={layoutSettings.slideDirection}
          options={[
            { label: "Horizontal", value: "horizontal" },
            { label: "Vertical", value: "vertical" },
          ]}
          onChange={(value) => {
            setAttributes({
              layoutSettings: updateData(
                layoutSettings,
                value,
                "slideDirection"
              ),
            });
          }}
        />

        <PanelRow>
          <Label className="">Width</Label>
          <Device />
        </PanelRow>
        <UnitControl
          label=""
          value={layoutSettings.layoutWidth[device]}
          units={[perUnit(), pxUnit(), vhUnit()]}
          onChange={(value) => {
            setAttributes({
              layoutSettings: updateData(
                layoutSettings,
                value,
                "layoutWidth",
                device
              ),
            });
          }}
        />

        <PanelRow>
          <Label className="">Height</Label>
          <Device />
        </PanelRow>
        <UnitControl
          label=""
          value={layoutSettings.layoutHeight[device]}
          units={[perUnit(), pxUnit(), vhUnit()]}
          onChange={(value) => {
            setAttributes({
              layoutSettings: updateData(
                layoutSettings,
                value,
                "layoutHeight",
                device
              ),
            });
          }}
        />

        {/* <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <p>Content Position</p>
          <AlignmentMatrixControl
            label="Content Position"
            value={layoutSettings.contentPosition}
            onChange={(value) => {
              setAttributes({
                layoutSettings: updateData(
                  layoutSettings,
                  value,
                  "contentPosition"
                ),
              });
            }}
          />
        </div> */}

        <Spacer />

        {/* Icon Selectors for Arrows */}
        <IconLibrary
          label="Select Previous Arrow Icon"
          value={prevArrow}
          onChange={(icon) => setAttributes({ prevArrow: icon })}
        />
        <Spacer />
        <IconLibrary
          label="Select Next Arrow Icon"
          value={nextArrow}
          onChange={(icon) => setAttributes({ nextArrow: icon })}
        />
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Slider Options", "b-blocks")}
        initialOpen={false}
      >
        <SelectControl
          label={__("Animation/Effect", "b-blocks")}
          value={slideOptions.effect}
          options={[
            { label: "Slide", value: "slide" },
            { label: "Fade", value: "fade" },
            { label: "Cube", value: "cube" },
            { label: "Coverflow", value: "coverflow" },
            { label: "Flip", value: "flip" },
          ]}
          onChange={(value) => {
            setAttributes({
              slideOptions: updateData(slideOptions, value, "effect"),
            });
          }}
        />

        <ToggleControl
          label="Autoplay"
          checked={autoplay}
          onChange={(value) => {
            setAttributes({
              slideOptions: updateData(slideOptions, value, "autoplay"),
            });
          }}
        />

        <Spacer />

        {autoplay && (
          <InputControl
            label="Interval(ms)"
            type="number"
            value={autoplaySpeed}
            onChange={(value) => {
              setAttributes({
                slideOptions: updateData(slideOptions, value, "autoplaySpeed"),
              });
            }}
          />
        )}

        <Spacer />

        <ToggleControl
          label="Show Arrows"
          checked={arrows}
          onChange={(value) => {
            setAttributes({
              slideOptions: updateData(slideOptions, value, "arrows"),
            });
          }}
        />

        <Spacer />

        <ToggleControl
          label="Slide on Mouse Drag"
          checked={dragOnMouse}
          onChange={(value) => {
            setAttributes({
              slideOptions: updateData(slideOptions, value, "dragOnMouse"),
            });
          }}
        />

        <Spacer />

        <ToggleControl
          label="Slide On Mouse Wheel"
          checked={slidesToScroll}
          onChange={(value) => {
            setAttributes({
              slideOptions: updateData(slideOptions, value, "slidesToScroll"),
            });
          }}
        />

        {/* <ToggleControl
          label="Show Indicators/Pagination"
          checked={true}
          onChange={(e) => console.log(e)}
        />

        
        <ToggleControl
          label="Pause on Hover"
          checked={true}
          onChange={(e) => console.log(e)}
        />
        
        <ToggleControl
          label="Swipe"
          checked={true}
          onChange={(e) => console.log(e)}
        /> */}
      </PanelBody>

      {/* Indicators */}
      <PanelBody
        className="bPlPanelBody"
        title={__("Indicators", "b-blocks")}
        initialOpen={false}
      >
        <SelectControl
          label="Pagination Style"
          value={paginationStyles.indicatorStyle}
          options={[
            { label: "Numbers", value: "numbers" },
            { label: "Circles", value: "circles" },
            { label: "Squares", value: "squares" },
            { label: "Hole Circles", value: "custom" },
          ]}
          onChange={(newStyle) => {
            setAttributes({
              paginationStyles: updateData(
                paginationStyles,
                newStyle,
                "indicatorStyle"
              ),
            });
          }}
        />
      </PanelBody>
    </>
  );
};

export default General;
