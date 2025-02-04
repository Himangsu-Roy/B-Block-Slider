// import { getColorsCSS } from "../../../../Components/utils/getCSS";

const Style = ({ attributes, id }) => {
  const { colors } = attributes;

  const mainSl = `#${id}`;
  const blockSl = `${mainSl} .bBlocksTestPurpose`;

  // ${blockSl} p{
  // 		${getColorsCSS(colors)}
  // 	}

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
		
		

	`,
      }}
    />
  );
};
export default Style;
