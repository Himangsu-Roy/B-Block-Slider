
import { useBlockProps } from '@wordpress/block-editor';

import Settings from './Settings/Settings';
import Style from '../Common/Style';

const Edit = props => {
	const { attributes, setAttributes, clientId } = props;
	const { purposeType } = attributes;

	return (
    <>
      <Settings {...{ attributes, setAttributes }} />

      <div {...useBlockProps()} id={`bBlocksSlider-${clientId}`}>
        <Style attributes={attributes} id={`bBlocksSlider-${clientId}`} />

		
      </div>
    </>
  );
}
export default Edit;