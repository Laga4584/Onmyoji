import Navbar from "../components/Navbar";
import { connect } from "react-redux";
function mapDispatchToProps(dispatch) {
    return {
        onClick: function(page) {
            dispatch({type:'changePage', page: page});
        }
    }
}
export default connect(null, mapDispatchToProps)(Navbar);