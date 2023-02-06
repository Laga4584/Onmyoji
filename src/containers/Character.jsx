import Character from "../components/Character";
import { connect } from "react-redux";

function mapStateToProps(state) {
    return {
        characterIndex: state.characterIndex,
        characterMenu: state.characterMenu
    };
}
function mapDispatchToProps(dispatch) {
    return {
        onClick: function(value) {
            dispatch({type:'changeCharacter', value: value});
        },
        onWheel: function(value) {
            if(value>0) dispatch({type:'incrementCharacter', value: 1});
            else dispatch({type:'incrementCharacter', value: -1});
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Character);
