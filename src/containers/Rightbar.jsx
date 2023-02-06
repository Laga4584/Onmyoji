import Rightbar from "../components/Rightbar";
import { connect } from "react-redux";

function mapStateToProps(state) {
    return {
        pageState: state.pageState,
        characterIndex: state.characterIndex,
        characterMenu: state.characterMenu
    };
}
function mapDispatchToProps(dispatch) {
    return {
        onClick: function(act) {
            if(act==='desc') dispatch({type:'changeCharacterMenu', value: 0});
            else if(act==='image') dispatch({type:'changeCharacterMenu', value: 1});
            else dispatch({type:'changeGallery', value: 1});
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Rightbar);
