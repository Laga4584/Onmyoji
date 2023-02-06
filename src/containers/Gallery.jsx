import Gallery from "../components/Gallery";
import { connect } from "react-redux";

function mapStateToProps(state) {
    return {
        galleryIndex: state.galleryIndex
    };
}
function mapDispatchToProps(dispatch) {
    return {
        onWheel: function(value) {
            if(value>0) dispatch({type:'changeGallery', value: 1});
            else dispatch({type:'changeGallery', value: -1});
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
