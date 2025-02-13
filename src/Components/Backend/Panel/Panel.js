import {
  TextControl,
  __experimentalInputControl as InputControl,
  TextareaControl,
  ToggleControl,
  __experimentalSpacer as Spacer,
} from "@wordpress/components";
import { produce } from "immer";
import {
  Background,
  InlineMediaUpload,
} from "../../../../../bpl-tools/Components";
const Items = ({
  attributes,
  setAttributes,
  arrKey,
  index,
  setActiveIndex = false,
}) => {
  const items = attributes[arrKey];

  const updateSlide = (property, val, childProperty = null) => {
    const newItems = produce(attributes[arrKey], (draft) => {
      if (null !== childProperty) {
        draft[index][property][childProperty] = val;
      } else {
        draft[index][property] = val;
      }
    });

    setAttributes({ [arrKey]: newItems });
    setActiveIndex && setActiveIndex(index);
  };

  

  return (
    <div>
      {/* <InlineMediaUpload
        value={items[index]?.image}
        onChange={(newImage) => updateSlide("image", newImage)}
      /> */}

      <Background
        label="Customize Background"
        value={items[index]?.backgroundConfig}
        onChange={(value) => updateSlide("backgroundConfig", value)}
      />

      <InputControl
        label="Image Alt"
        value={items[index]?.alt}
        onChange={(value) => {
          updateSlide("alt", value);
        }}
      />

      <InputControl
        label="Title"
        value={items[index]?.title}
        onChange={(value) => {
          updateSlide("title", value);
        }}
      />

      <TextareaControl
        label="Description"
        value={items[index]?.description}
        onChange={(value) => {
          updateSlide("description", value);
        }}
      />

      <InputControl
        label="Button Label"
        value={items[index]?.buttonLabel}
        onChange={(value) => {
          updateSlide("buttonLabel", value);
        }}
      />

      <InputControl
        label="Button Link"
        value={items[index]?.buttonLink}
        onChange={(value) => {
          updateSlide("buttonLink", value);
        }}
      />

      <Spacer />

      <ToggleControl
        label="Open in new tab"
        checked={items[index]?.buttonTarget}
        onChange={(value) => {
          updateSlide("buttonTarget", value);
        }}
      />
    </div>
  );
};

export default Items;
