import { __ } from "@wordpress/i18n";
import { PanelBody } from "@wordpress/components";
import { ColorsControl } from "../../../../../../bpl-tools/Components";

const Style = ({ attributes, setAttributes }) => {
  const { colors } = attributes;
  return (
    <>
      <PanelBody
        className="bPlPanelBody"
        title={__("Style", "b-blocks")}
        initialOpen={false}
      >
        {/* <ColorsControl
          value={colors}
          onChange={(val) => setAttributes({ colors: val })}
          defaults={{ color: "black", bg: "#B1C5A4" }}
        /> */}
      </PanelBody>
    </>
  );
};

export default Style;
