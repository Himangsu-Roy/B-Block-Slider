import { useBlockProps } from "@wordpress/block-editor";
import Settings from "./Settings/Settings";
import Style from "../Common/Style";
import BBlockSlider from "../BBlockSlider/BBlockSlider";
import { withSelect } from "@wordpress/data";

const Edit = (props) => {
  const { attributes, setAttributes, clientId, isSelected, device } = props;
  const { slides } = attributes;

  return (
    <>
      <Settings {...{ attributes, setAttributes, device }} />

      <div {...useBlockProps()} id={`bBlocksBBlockSlider-${clientId}`}>
        <Style
          device={device}
          attributes={attributes}
          id={`bBlocksBBlockSlider-${clientId}`}
        />

        {!isSelected && <div className="bPlBlockBeforeSelect"></div>}

        <BBlockSlider
          setAttributes={setAttributes}
          slides={slides}
          attributes={attributes}
        />
      </div>
    </>
  );
};

export default withSelect((select) => {
  const { getDeviceType } = select("core/editor");
  return {
    device: getDeviceType()?.toLowerCase(),
  };
})(Edit);
