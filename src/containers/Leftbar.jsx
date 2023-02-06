import Leftbar from "../components/Leftbar";
import { connect } from "react-redux";

function mapStateToProps(state) {
    return {
        pageState: state.pageState
    };
}
function mapDispatchToProps(dispatch) {
    return {
        onClick: function(act) {
            if(act==='prev') dispatch({type:'incrementCharacter', value: -1});
            else if(act==='next') dispatch({type:'incrementCharacter', value: 1});
            else dispatch({type:'changeGallery', value: -1});
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Leftbar);
